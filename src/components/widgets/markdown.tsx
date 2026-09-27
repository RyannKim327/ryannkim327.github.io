import { markdownToHtml } from "@/lib/markdown";

export function Markdown({ content, className }: { content: string; className?: string }) {
  const html = markdownToHtml(content);
  return <div className={className ?? "prose prose-sm max-w-none text-on-surface"} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function MarkdownExcerpt({ content }: { content: string }) {
  const html = markdownToHtml(content);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
