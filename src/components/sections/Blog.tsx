"use client";

import Link from "next/link";
import { ArrowUpRight, FlaskConical, NotebookPen } from "lucide-react";
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
  const publishedCount = posts.filter((p) => !p.draft).length;

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
            constraints, with lessons I wish I had earlier.
          </span>
          <span className="lang-fr-text hidden">
            Notes techniques sur la construction de systèmes IA qui tiennent en
            conditions réelles, avec les leçons que j&apos;aurais aimé avoir plus
            tôt.
          </span>
        </p>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-white/5 rounded-xl p-4">
              <p className="text-xs font-mono text-text-muted uppercase tracking-[0.16em]">
                {lang === "fr" ? "Articles publiés" : "Published"}
              </p>
              <p className="mt-2 text-3xl font-semibold text-text-primary">
                {publishedCount}
              </p>
            </div>
            <div className="bg-card border border-white/5 rounded-xl p-4">
              <p className="text-xs font-mono text-text-muted uppercase tracking-[0.16em]">
                {lang === "fr" ? "En préparation" : "In Draft"}
              </p>
              <p className="mt-2 text-3xl font-semibold text-text-primary">
                {posts.length - publishedCount}
              </p>
            </div>
          </div>

          <div className="bg-card border border-white/5 rounded-xl p-4">
            <p className="text-xs font-mono text-text-muted uppercase tracking-[0.16em]">
              {lang === "fr" ? "Cadence" : "Cadence"}
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              <span className="lang-en-text">One practical article every few weeks.</span>
              <span className="lang-fr-text hidden">
                Un article pratique toutes les quelques semaines.
              </span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => {
            const postHref = `/blog/${post.slug}`;

            return (
              <article
                key={post.slug}
                className="relative bg-card border border-white/5 rounded-xl p-6 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-text-primary leading-snug">
                    {lang === "fr" ? post.titleFr : post.title}
                  </h3>
                  <span
                    className={`shrink-0 px-2 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.12em] ${
                      post.draft
                        ? "bg-amber-900/25 text-amber-300"
                        : "bg-accent/20 text-accent"
                    }`}
                  >
                    {post.draft
                      ? lang === "fr"
                        ? "Bientôt"
                        : "Soon"
                      : lang === "fr"
                        ? "Publié"
                        : "Published"}
                  </span>
                </div>

                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  {lang === "fr" ? post.excerptFr : post.excerpt}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={`${post.slug}-${tag}`}
                      className="px-2 py-1 text-xs font-mono rounded-md bg-[#0a0a0f] border border-white/10 text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <p className="text-xs font-mono text-text-muted">
                    {post.date} • {post.readingTime}
                  </p>
                  {post.draft ? (
                    <span className="text-xs text-text-muted inline-flex items-center gap-1">
                      <FlaskConical size={14} className="text-amber-300" />
                      {lang === "fr" ? "En cours" : "In progress"}
                    </span>
                  ) : (
                    <Link
                      href={postHref}
                      className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-dim transition-colors"
                    >
                      <NotebookPen size={14} />
                      {lang === "fr" ? "Lire" : "Read"}
                      <ArrowUpRight size={14} />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
