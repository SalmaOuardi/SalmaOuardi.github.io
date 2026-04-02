"use client";

import Link from "next/link";
import { ArrowUpRight, NotebookPen } from "lucide-react";
import { useLang } from "@/lib/lang";

export type BlogPostPreview = {
  slug: string;
  title: string;
  titleFr: string;
  excerpt: string;
  excerptFr: string;
  tags: string[];
  date: string;
  readingTime: string;
  draft: boolean;
};

export default function Blog({ posts }: { posts: BlogPostPreview[] }) {
  const { lang } = useLang();
  const published = posts.filter((p) => !p.draft);

  if (published.length === 0) return null;

  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-text-muted mb-4">{"// 06. writing"}</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {lang === "fr" ? "Écriture" : "Writing"}
          <span className="block w-16 h-1 bg-accent mt-3 rounded-full" />
        </h2>

        <p className="text-text-secondary max-w-3xl mb-10 leading-relaxed">
          <span className="lang-en-text">
            Technical field notes on building AI systems that survive real-world
            constraints.
          </span>
          <span className="lang-fr-text hidden">
            Notes techniques sur la construction de systèmes IA qui tiennent en
            conditions réelles.
          </span>
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {published.map((post) => (
            <article
              key={post.slug}
              className="relative bg-card border border-white/5 rounded-xl p-6 flex flex-col hover:border-accent/20 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-text-primary leading-snug mb-3">
                {lang === "fr" ? post.titleFr : post.title}
              </h3>

              <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                {lang === "fr" ? post.excerptFr : post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={`${post.slug}-${tag}`}
                    className="px-2 py-1 text-xs font-mono rounded-md bg-base border border-white/[0.06] text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <p className="text-xs font-mono text-text-muted">
                  {post.date} · {post.readingTime}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-dim transition-colors"
                >
                  <NotebookPen size={14} />
                  {lang === "fr" ? "Lire" : "Read"}
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
