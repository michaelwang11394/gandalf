import dotenv from "dotenv";
import { SmartMarkdown } from "smart-chunks";
import { makeSupabase } from "./supabase";
import { get_encoding } from "tiktoken";
import OpenAI from "openai";

dotenv.config({
  path: "../.env",
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const enc = get_encoding("cl100k_base");

const supabase = makeSupabase();

class ConcurrentQueue {
  #queue: (() => Promise<void>)[];
  #concurrent: number;
  #running: number;

  constructor(concurrent: number) {
    this.#queue = [];
    this.#concurrent = concurrent;
    this.#running = 0;
  }

  enqueue(action: () => Promise<void>) {
    this.#queue.push(action);
    this.#attempDequeue();
  }

  async #attempDequeue() {
    if (this.#queue.length > 0 && this.#running < this.#concurrent) {
      console.log("processing", this.#running, "of", this.#concurrent);
      const action = this.#queue.shift();
      if (action) {
        this.#running++;
        await action();
        this.#running--;
        for (let i = this.#running; i < this.#concurrent; i++) {
          this.#attempDequeue();
        }
      }
    }
  }
}

const MAX_CHUNK_SIZE = 7000; // Conservative since OpenAI limit is 8192

function chunkDocument(content: string, title: string): string[] {
  const chunks: string[] = [];
  let currentChunk = title + "\n" + content;

  if (enc.encode(currentChunk).length <= MAX_CHUNK_SIZE) {
    // If the entire document fits, return it as a single chunk
    return [currentChunk];
  }

  // If it doesn't fit, we'll split it into smaller chunks
  const lines = content.split("\n");
  currentChunk = title + "\n";

  for (const line of lines) {
    const potentialChunk = currentChunk + line + "\n";
    if (
      enc.encode(potentialChunk).length > MAX_CHUNK_SIZE &&
      currentChunk !== title + "\n"
    ) {
      chunks.push(currentChunk);
      currentChunk = title + "\n" + line + "\n";
    } else {
      currentChunk = potentialChunk;
    }
  }

  if (currentChunk !== title + "\n") {
    chunks.push(currentChunk);
  }

  return chunks;
}

async function main() {
  const result = await supabase
    .from("scrapped")
    .select("*")
    .eq("product", "supabase");

  const openaiQueue = new ConcurrentQueue(10);
  const supabaseQueue = new ConcurrentQueue(10);

  const data = result.data;
  if (!data || data.length === 0) {
    console.log(result);
  } else {
    const processedChunks = new Set<string>();
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      const title = row.title;
      const content = row.markdown;

      const chunks = chunkDocument(content, title);

      const newChunks = chunks.filter((c) => !processedChunks.has(c));
      if (newChunks.length > 0) {
        newChunks.forEach((c) => processedChunks.add(c));
        openaiQueue.enqueue(async () => {
          const r = await openai.embeddings.create({
            model: "text-embedding-3-small",
            input: newChunks,
          });
          for (let i = 0; i < newChunks.length; i++) {
            supabaseQueue.enqueue(async () => {
              const result = await supabase.from("supabase_embeddings").insert({
                body: newChunks[i],
                embedding: r.data[i].embedding,
              });
              if (result.error) {
                console.log(result);
              }
            });
          }
        });
      }
      console.log("processed row", i, "processed chunks", processedChunks.size);
    }
  }
}

main();
