import Turndown from "turndown";
import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";
import * as cheerio from "cheerio";
import { makeSupabase } from "./supabase";

export type CrawlArgs = {
  product: string;
  start: string;
  prefixes: string[];
  concurrent: number;
  limit?: number;
};

const turndown = new Turndown({
  codeBlockStyle: "fenced",
});

export function crawl({
  product,
  start,
  prefixes,
  concurrent,
  limit = 1 / 0,
}: CrawlArgs): string[] {
  const supabase = makeSupabase();

  const visited = new Set<string>();
  const visitQueue = new Set<string>();
  let inflight = 0;

  function requestVisit(url: string) {
    if (visited.size >= limit) {
      return;
    }
    if (visited.has(url) || visitQueue.has(url)) {
      return;
    }

    if (!prefixes.some((p) => url.startsWith(p))) {
      return;
    }

    visitQueue.add(url);
    attemptVisit();
  }

  function attemptVisit() {
    if (inflight >= concurrent) {
      return;
    }
    const entry = visitQueue.entries().next();
    if (entry.done) {
      return;
    }
    const toVisit = entry.value[0];
    visitQueue.delete(toVisit);
    visit(toVisit);
  }

  async function visit(url: string) {
    if (visited.size >= limit) {
      return;
    }
    if (visited.has(url)) {
      return;
    }

    if (!prefixes.some((p) => url.startsWith(p))) {
      return;
    }

    console.log(
      "visiting",
      url,
      "tovisit",
      visitQueue.size,
      "visited",
      visited.size
    );
    visited.add(url);

    inflight += 1;
    try {
      const res = await fetch(url);
      if (res.status !== 200) {
        console.log("error fetching", url, "status:", res.status);
      } else if (res.redirected) {
        requestVisit(res.url);
      } else {
        const html = await res.text();
        const doc = new JSDOM(html, { url });
        const content = new Readability(doc.window.document).parse();
        if (content?.content) {
          const markdownContent = turndown.turndown(content.content);
          const result = await supabase.from("scrapped").insert({
            product,
            markdown: markdownContent,
            title: content.title,
            url,
          });
          if (result.error) {
            console.log(result);
          }
        } else {
          console.log("url returns empty content", url);
        }
        const $ = cheerio.load(html);
        $("a").each((_, element) => {
          const href = $(element).attr("href");
          if (href) {
            const finalUrl = new URL(href, url);
            finalUrl.hash = "";
            requestVisit(finalUrl.href);
          }
        });
      }
    } catch (e) {
      console.log(`crawling ${url} failed`, e);
    }
    inflight -= 1;
    attemptVisit();
  }

  visit(start);

  return [...visited];
}
