import { crawl } from "./crawl";
import dotenv from 'dotenv'
dotenv.config({
    path: "../.env"
})

crawl({
    product: "supabase",
    start: "https://supabase.com/docs",
    prefixes: ["https://supabase.com/docs"],
    concurrent: 10,
})