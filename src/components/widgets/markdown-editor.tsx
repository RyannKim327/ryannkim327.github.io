import { useRef, useState } from "react";
import {
  Bold,
  Italic,
  Highlighter,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Code2,
  Eye,
  Pencil,
  Columns2,
} from "lucide-react";
import { markdownToHtml } from "@/lib/markdown";

interface MarkdownEditorProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}

const EMPTY_PREVIEW = '<p class="text-on-surface-variant italic">Nothing to preview — start writing markdown on the left.</p>';
function toPreviewHtml(md: string): string {
  if (!md.trim()) return EMPTY_PREVIEW;
  return markdownToHtml(md);
}

export function MarkdownEditor({ id, name, value, onChange, placeholder, rows = 10 }: MarkdownEditorProps) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [mode, setMode] = useState<"write" | "preview" | "split">("write");

  function insertAround(before: string, after: string, placeholderText = "text") {
    const el = ref.current;
    if (!el) return;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = value.slice(start, end) || placeholderText;
    const next = value.slice(0, start) + before + selected + after + value.slice(end);
    onChange(next);
    requestAnimationFrame(() => {
      el.focus();
      const cursorStart = start + before.length;
      const cursorEnd = cursorStart + selected.length;
      el.setSelectionRange(cursorStart, cursorEnd);
    });
  }

  function insertPrefix(prefix: string) {
    const el = ref.current;
    if (!el) return;
    const start = el.selectionStart;
    const lineStart = value.lastIndexOf("\n", start - 1) + 1;
    const next = value.slice(0, lineStart) + prefix + value.slice(lineStart);
    onChange(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + prefix.length, start + prefix.length);
    });
  }

  function insertBlock(before: string, after: string, placeholderText: string) {
    const el = ref.current;
    if (!el) return;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = value.slice(start, end) || placeholderText;
    const next = value.slice(0, start) + before + selected + after + value.slice(end);
    onChange(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + before.length, start + before.length + selected.length);
    });
  }

  const toolbarBtn =
    "inline-flex size-8 items-center justify-center rounded-lg border border-outline-variant/40 bg-surface-container-low text-on-surface-variant hover:bg-primary/8 hover:text-primary hover:border-primary/20 transition-colors";

  return (
    <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 border-b border-outline-variant/40 bg-surface-container px-2 py-2">
        <button type="button" onClick={() => insertAround("**", "**", "bold")} className={toolbarBtn} title="Bold (**text**)">
          <Bold className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => insertAround("*", "*", "italic")} className={toolbarBtn} title="Italic (*text*)">
          <Italic className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => insertAround("==", "==", "highlight")} className={toolbarBtn} title="Highlight (==text==)">
          <Highlighter className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => insertAround("__", "__", "underline")} className={`${toolbarBtn} text-xs font-semibold`} title="Underline (__text__)">
          U
        </button>
        <span className="mx-1 h-6 w-px bg-outline-variant/40" />
        <button type="button" onClick={() => insertPrefix("## ")} className={toolbarBtn} title="Heading 2">
          <Heading2 className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => insertPrefix("### ")} className={toolbarBtn} title="Heading 3">
          <Heading3 className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => insertPrefix("- ")} className={toolbarBtn} title="Bullet list">
          <List className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => insertPrefix("1. ")} className={toolbarBtn} title="Numbered list">
          <ListOrdered className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => insertPrefix("> ")} className={toolbarBtn} title="Quote">
          <Quote className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => insertBlock("[", "](https://)", "text")} className={toolbarBtn} title="Link [text](url)">
          <LinkIcon className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => insertAround("`", "`", "code")} className={toolbarBtn} title="Inline code">
          <Code2 className="h-4 w-4" />
        </button>

        <span className="ml-auto flex items-center gap-1">
          <button
            type="button"
            onClick={() => setMode("write")}
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium ${mode === "write" ? "bg-primary text-on-primary" : "bg-surface-container-low border border-outline-variant text-on-surface-variant hover:bg-primary/8"}`}
          >
            <Pencil className="h-3.5 w-3.5" /> Write
          </button>
          <button
            type="button"
            onClick={() => setMode("preview")}
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium ${mode === "preview" ? "bg-primary text-on-primary" : "bg-surface-container-low border border-outline-variant text-on-surface-variant hover:bg-primary/8"}`}
          >
            <Eye className="h-3.5 w-3.5" /> Preview
          </button>
          <button
            type="button"
            onClick={() => setMode("split")}
            className={`hidden sm:inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium ${mode === "split" ? "bg-primary text-on-primary" : "bg-surface-container-low border border-outline-variant text-on-surface-variant hover:bg-primary/8"}`}
          >
            <Columns2 className="h-3.5 w-3.5" /> Split
          </button>
        </span>
      </div>

      {/* Editor / Preview */}
      {mode === "write" && (
        <textarea
          ref={ref}
          id={id}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className="w-full bg-surface-container-low px-3.5 py-3 text-sm leading-relaxed text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none resize-y min-h-[180px]"
        />
      )}

      {mode === "preview" && (
        <>
          <div className="max-h-[360px] overflow-auto px-4 py-3">
            <div dangerouslySetInnerHTML={{ __html: toPreviewHtml(value) }} />
          </div>
          <input type="hidden" name={name} value={value} />
        </>
      )}

      {mode === "split" && (
        <div className="grid sm:grid-cols-2">
          <textarea
            ref={ref}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={rows}
            id={id ? `${id}-split` : undefined}
            className="w-full bg-surface-container-low px-3.5 py-3 text-sm leading-relaxed text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none resize-y min-h-[280px] border-r border-outline-variant/30"
          />
          <div className="max-h-[340px] overflow-auto bg-surface-container px-4 py-3">
            <div dangerouslySetInnerHTML={{ __html: toPreviewHtml(value) }} />
          </div>
        </div>
      )}

      <div className="border-t border-outline-variant/30 bg-surface-container px-3 py-2 text-[11px] leading-relaxed text-on-surface-variant">
        Markdown supported: <code>**bold**</code> · <code>*italic*</code> · <code>==highlight==</code> · <code>__underline__</code> · <code>## heading</code> · <code>- list</code> · <code>[text](url)</code> · <code>`code`</code> · <code>&gt; quote</code>
      </div>
      {/* keep hidden input for split mode form association */}
      {mode === "split" && <input type="hidden" name={name} value={value} />}
    </div>
  );
}
