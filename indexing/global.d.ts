declare module "smart-chunks" {
  export class SmartMarkdown {
    parse: (args: { content: string }) => { blocks: { text: string }[] };
  }
}
