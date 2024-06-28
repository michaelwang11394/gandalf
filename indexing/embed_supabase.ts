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

const CHUNK_SIZE = 3000;

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
      const smart_markdown = new SmartMarkdown();
      const blocks = smart_markdown
        .parse({
          content: row.markdown,
        })
        .blocks.map((b) => {
          if (b.text.endsWith("\n")) {
            return b.text;
          } else {
            return b.text + "\n";
          }
        });
      const title = row.title + "\n";
      const chunks: string[] = [];
      let curChunk = title;
      blocks.forEach((b) => {
        if (enc.encode(curChunk + b).length > CHUNK_SIZE) {
          chunks.push(curChunk);
          curChunk = title + b;
        } else {
          curChunk += b;
        }
      });
      chunks.push(curChunk);
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
              const result = await supabase.from("supabase_embedding").insert({
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
