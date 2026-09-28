export function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}


function renderInlineCore(s: string): string {
  let out = s;

  const placeholders: string[] = [];

  const store = (html: string) => {
    const token = `§INLINE${placeholders.length}§`;
    placeholders.push(html);
    return token;
  };

  // Bold ** **
  out = out.replace(/\*\*([^*\n]+?)\*\*/g, (_m, inner: string) =>
    store(`<strong>${inner}</strong>`),
  );

  // Highlight == ==
  out = out.replace(/==([^=\n]+?)==/g, (_m, inner: string) =>
    store(
      `<mark class="rounded bg-secondary-container px-1">${inner}</mark>`,
    ),
  );

  // Strikethrough ~~ ~~
  out = out.replace(/~~([^~\n]+?)~~/g, (_m, inner: string) =>
    store(`<s>${inner}</s>`),
  );

  // Underline __ __
  out = out.replace(/__([^_\n]+?)__/g, (_m, inner: string) =>
    store(`<u>${inner}</u>`),
  );

  // Italic * *
  out = out.replace(
    /(?<!\*)\*([^*\n]+?)\*(?!\*)/g,
    (_m, inner: string) => store(`<em>${inner}</em>`),
  );

  // Italic _ _
  // Don't match underscores inside words.
  out = out.replace(
    /(?<![\w])_([^_\n]+?)_(?![\w])/g,
    (_m, inner: string) => store(`<em>${inner}</em>`),
  );

  // Restore inline placeholders.
  placeholders.forEach((html, i) => {
    out = out.split(`§INLINE${i}§`).join(html);
  });

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

  // 1) Inline code — fully protected
  out = out.replace(/`([^`\n]+?)`/g, (_m, inner: string) =>
    store(
      `<code class="rounded bg-surface-container px-1 py-0.5 text-[12px] font-mono">${inner}</code>`,
    ),
  );

  // 2) Markdown links
  out = out.replace(
    /\[([^\]]+?)\]\((https?:\/\/[^\s)]+)\)/g,
    (_m, label: string, url: string) => {
      const formattedLabel = renderInlineCore(label);

      return store(
        `<a href="${url}" target="_blank" rel="noreferrer" class="font-medium text-primary hover:underline">${formattedLabel}</a>`,
      );
    },
  );

  // 3) Autolink bare URLs
  out = out.replace(
    /(^|\s)(https?:\/\/[^\s<]+)/g,
    (_m, pre: string, url: string) => {
      const token = store(
        `<a href="${url}" target="_blank" rel="noreferrer" class="font-medium text-primary hover:underline">${url}</a>`,
      );

      return `${pre}${token}`;
    },
  );

  // 4) Remaining inline formatting
  out = renderInlineCore(out);

  // 5) Restore protected content
  out = restore(out);

  return out;
}

export function markdownToHtml(md: string): string {
  if (!md.trim()) {
    return '<p class="text-on-surface-variant italic">No content.</p>';
  }

  const lines = md.split(/\r?\n/);
  const html: string[] = [];

  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines between blocks
    if (!trimmed) {
      i++;
      continue;
    }

    // ============================================================
    // FENCED CODE BLOCK
    // ============================================================
    const fenceMatch = line.match(/^\s*```\s*([^\s`]*)\s*$/);

    if (fenceMatch) {
      const language = fenceMatch[1];
      const codeLines: string[] = [];

      i++;

      // Collect everything until closing ```
      while (i < lines.length && !/^\s*```\s*$/.test(lines[i])) {
        codeLines.push(lines[i]);
        i++;
      }

      // Skip closing ```
      if (i < lines.length && /^\s*```\s*$/.test(lines[i])) {
        i++;
      }

      const code = escapeHtml(codeLines.join('\n'));

      const languageClass = language
        ? ` language-${escapeHtml(language)}`
        : '';

      html.push(
        `<pre class="scrollbar-none overflow-auto rounded-xl bg-surface-container p-3 text-xs font-mono"><code class="${languageClass.trim()}">${code}</code></pre>`,
      );

      continue;
    }

    // ============================================================
    // GATHER NORMAL BLOCK
    // ============================================================
    const blockLines: string[] = [];

    while (i < lines.length && lines[i].trim() !== '') {
      // Stop here if a new fenced block starts.
      if (blockLines.length > 0 && /^\s*```/.test(lines[i])) {
        break;
      }

      blockLines.push(lines[i]);
      i++;
    }

    const block = blockLines.join('\n');
    const blockTrimmed = block.trim();

    if (!blockTrimmed) {
      continue;
    }

    // ============================================================
    // UNORDERED LIST
    // ============================================================
    if (/^[-*]\s+/.test(blockTrimmed)) {
      const items = blockTrimmed
        .split('\n')
        .filter((l) => /^[-*]\s+/.test(l.trim()))
        .map(
          (l) =>
            `<li>${renderInline(l.replace(/^[-*]\s+/, ''))}</li>`,
        )
        .join('');

      html.push(
        `<ul class="mt-2 list-disc space-y-1 pl-6 text-sm">${items}</ul>`,
      );

      continue;
    }

    // ============================================================
    // ORDERED LIST
    // ============================================================
    if (/^\d+\.\s+/.test(blockTrimmed)) {
      const items = blockTrimmed
        .split('\n')
        .filter((l) => /^\d+\.\s+/.test(l.trim()))
        .map(
          (l) =>
            `<li>${renderInline(l.replace(/^\d+\.\s+/, ''))}</li>`,
        )
        .join('');

      html.push(
        `<ol class="mt-2 list-decimal space-y-1 pl-6 text-sm">${items}</ol>`,
      );

      continue;
    }

    // ============================================================
    // HEADINGS
    // ============================================================
    if (/^###\s+/.test(blockTrimmed)) {
      const t = blockTrimmed.replace(/^###\s+/, '');

      html.push(
        `<h3 class="mt-3 text-base font-semibold">${renderInline(t)}</h3>`,
      );

      continue;
    }

    if (/^##\s+/.test(blockTrimmed)) {
      const t = blockTrimmed.replace(/^##\s+/, '');

      html.push(
        `<h2 class="mt-3 text-lg font-semibold">${renderInline(t)}</h2>`,
      );

      continue;
    }

    if (/^#\s+/.test(blockTrimmed)) {
      const t = blockTrimmed.replace(/^#\s+/, '');

      html.push(
        `<h1 class="mt-3 text-xl font-bold">${renderInline(t)}</h1>`,
      );

      continue;
    }

    // ============================================================
    // BLOCKQUOTE
    // ============================================================
    if (/^>\s?/.test(blockTrimmed)) {
      const linesContent = blockTrimmed
        .split('\n')
        .map((l) => l.replace(/^>\s?/, ''))
        .join('\n');

      html.push(
        `<blockquote class="mt-2 border-l-4 border-primary/30 bg-primary-container/10 px-3 py-2 text-sm italic">${renderInline(
          linesContent,
        ).replace(/\n/g, '<br/>')}</blockquote>`,
      );

      continue;
    }

    // ============================================================
    // HORIZONTAL RULE
    // ============================================================
    if (/^(---+|\*\*\*+|___+)\s*$/.test(blockTrimmed)) {
      html.push('<hr />');
      continue;
    }

    // ============================================================
    // PARAGRAPH
    // ============================================================
    const inline = renderInline(blockTrimmed).replace(/\n/g, '<br/>');

    html.push(
      `<p class="mt-2 text-sm leading-relaxed">${inline}</p>`,
    );
  }

  return html.join('\n');
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

