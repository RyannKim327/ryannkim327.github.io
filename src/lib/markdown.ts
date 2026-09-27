export function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderInlineCore(s: string): string {
  let out = s;
  // bold ** **
  out = out.replace(/\*\*([^*]+?)\*\*/g, "<strong>$1</strong>");
  // highlight == ==
  out = out.replace(/==([^=]+?)==/g, '<mark class="rounded bg-secondary-container px-1">$1</mark>');
  // strikethrough ~~ ~~
  out = out.replace(/~~([^~]+?)~~/g, "<s>$1</s>");
  // underline __ __  (before single _)
  out = out.replace(/__([^_]+?)__/g, "<u>$1</u>");
  // italic * *  (avoid already bold)
  out = out.replace(/(?<!\*)\*([^*\n]+?)\*(?!\*)/g, "<em>$1</em>");
  // italic _ _  — only when not inside word (so link_ko stays intact even if not protected)
  out = out.replace(/(?<![\w])_([^_\n]+?)_(?![\w])/g, "<em>$1</em>");
  return out;
}

export function renderInline(text: string): string {
  let out = escapeHtml(text);

  const placeholders: string[] = [];
  const store = (html: string) => {
    const token = `§PH${placeholders.length}§`;
    placeholders.push(html);
    return token;
  };
  const restore = (s: string) => {
    let r = s;
    placeholders.forEach((html, i) => {
      r = r.split(`§PH${i}§`).join(html);
    });
    return r;
  };

  // 1) inline code — fully protected
  out = out.replace(/`([^`]+?)`/g, (_m, inner: string) =>
    store(`<code class="rounded bg-surface-container px-1 py-0.5 text-[12px] font-mono">${inner}</code>`),
  );

  // 2) markdown links [label](https://url) — URL fully protected, label gets inline core formatting
  out = out.replace(/\[([^\]]+?)\]\((https?:\/\/[^\s)]+)\)/g, (_m, label: string, url: string) => {
    const formattedLabel = renderInlineCore(label);
    return store(`<a href="${url}" target="_blank" rel="noreferrer" class="font-medium text-primary hover:underline">${formattedLabel}</a>`);
  });

  // 3) autolink bare urls — fully protected
  out = out.replace(/(^|\s)(https?:\/\/[^\s<]+)/g, (_m, pre: string, url: string) => {
    const token = store(`<a href="${url}" target="_blank" rel="noreferrer" class="font-medium text-primary hover:underline">${url}</a>`);
    return `${pre}${token}`;
  });

  // 4) remaining inline formatting (bold, highlight, underline, italic) — safe now, no URLs remain
  out = renderInlineCore(out);

  // 5) restore placeholders
  out = restore(out);
  return out;
}

export function markdownToHtml(md: string): string {
  if (!md.trim()) return '<p class="text-on-surface-variant italic">No content.</p>';
  const blocks = md.split(/\n{2,}/);
  const html: string[] = [];

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;

    // fenced code
    if (trimmed.startsWith("```")) {
      const inner = trimmed.replace(/^```[a-z]*\n?/, "").replace(/\n?```$/, "");
      html.push(`<pre class="overflow-auto rounded-xl bg-surface-container p-3 text-xs font-mono">${escapeHtml(inner)}</pre>`);
      continue;
    }
    // heading
    if (/^###\s+/.test(trimmed)) {
      const t = trimmed.replace(/^###\s+/, "");
      html.push(`<h3 class="mt-3 text-base font-semibold">${renderInline(t)}</h3>`);
      continue;
    }
    if (/^##\s+/.test(trimmed)) {
      const t = trimmed.replace(/^##\s+/, "");
      html.push(`<h2 class="mt-3 text-lg font-semibold">${renderInline(t)}</h2>`);
      continue;
    }
    if (/^#\s+/.test(trimmed)) {
      const t = trimmed.replace(/^#\s+/, "");
      html.push(`<h1 class="mt-3 text-xl font-bold">${renderInline(t)}</h1>`);
      continue;
    }
    // blockquote
    if (/^>\s+/.test(trimmed)) {
      const lines = trimmed
        .split("\n")
        .map((l) => l.replace(/^>\s?/, ""))
        .join("<br/>");
      html.push(
        `<blockquote class="mt-2 border-l-4 border-primary/30 bg-primary-container/10 px-3 py-2 text-sm italic">${renderInline(lines)}</blockquote>`,
      );
      continue;
    }
    // unordered list
    if (/^[-*]\s+/.test(trimmed)) {
      const items = trimmed
        .split("\n")
        .filter((l) => /^[-*]\s+/.test(l.trim()))
        .map((l) => `<li>${renderInline(l.replace(/^[-*]\s+/, ""))}</li>`)
        .join("");
      html.push(`<ul class="mt-2 list-disc space-y-1 pl-6 text-sm">${items}</ul>`);
      continue;
    }
    // ordered list
    if (/^\d+\.\s+/.test(trimmed)) {
      const items = trimmed
        .split("\n")
        .filter((l) => /^\d+\.\s+/.test(l.trim()))
        .map((l) => `<li>${renderInline(l.replace(/^\d+\.\s+/, ""))}</li>`)
        .join("");
      html.push(`<ol class="mt-2 list-decimal space-y-1 pl-6 text-sm">${items}</ol>`);
      continue;
    }
    // paragraph - split single newlines into <br>
    const inline = renderInline(trimmed).replace(/\n/g, "<br/>");
    html.push(`<p class="mt-2 text-sm leading-relaxed">${inline}</p>`);
  }

  return html.join("\n");
}

/** Strip markdown syntax to plain text for excerpts */
export function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/==([^=]+)==/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/~~([^~]+)~~/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^[-*]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/\n+/g, " ")
    .trim();
}

export function getExcerpt(md: string, maxLen = 160): string {
  const plain = stripMarkdown(md);
  if (plain.length <= maxLen) return plain;
  return plain.slice(0, maxLen).trimEnd() + "…";
}

