import { ReactNode, useState } from "react";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlight } from "react-syntax-highlighter";

type SyntaxHighlightProps = {
  inline?: boolean;
  className?: string;
  children?: ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export default function SyntaxHighlighter({
  inline,
  className,
  children,
  ...props
}: SyntaxHighlightProps) {
  const [copied, setCopied] = useState(false);
  const code = String(children).replace(/\s$/, "");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const match = /language-(\w+)/.exec(className || "");

  if (!inline && match != null) {
    return (
      <div style={{ position: "relative" }}>
        <button
          onClick={handleCopy}
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            fontSize: "12px",
            padding: "4px 8px",
            cursor: "pointer",
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </button>

        <SyntaxHighlight
          style={oneDark as any}
          language={match ? match[1].toLowerCase() : "text"}
          PreTag="div"
          {...props}
        >
          {code}
        </SyntaxHighlight>
      </div>
    );
  } else {
    return (
      <code
        className={`${className} font-mono bg-slate-200 text-black dark:bg-slate-800 dark:text-white rounded px-1 `}
        {...props}
      >
        {children}
      </code>
    );
  }
}
