"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogArticleBody({ content }: { content: string }) {
  return (
    <div className="mt-10 prose-custom">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold text-text-primary mt-10 mb-4">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-text-primary mt-8 mb-3">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-text-secondary leading-relaxed mb-4">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="space-y-2 mb-6">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="space-y-2 mb-6 list-decimal list-inside">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="flex items-start gap-2 text-text-secondary">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <span className="leading-relaxed">{children}</span>
            </li>
          ),
          blockquote: ({ children }) => (
            <div className="mt-8 p-5 rounded-xl border border-accent/30 bg-accent/10 text-text-secondary leading-relaxed">
              {children}
            </div>
          ),
          code: ({ className, children }) => {
            const isBlock = className?.includes("language-");
            if (isBlock) {
              return (
                <pre className="bg-[#0d0d14] border border-white/[0.06] rounded-xl p-5 overflow-x-auto my-6">
                  <code className="font-mono text-sm text-text-secondary">
                    {children}
                  </code>
                </pre>
              );
            }
            return (
              <code className="font-mono text-sm bg-card px-1.5 py-0.5 rounded border border-white/10 text-accent">
                {children}
              </code>
            );
          },
          pre: ({ children }) => <>{children}</>,
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-dim underline underline-offset-2 transition-colors"
            >
              {children}
            </a>
          ),
          hr: () => (
            <hr className="my-8 border-white/10" />
          ),
          strong: ({ children }) => (
            <strong className="text-text-primary font-semibold">
              {children}
            </strong>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
