import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="lang-en-text">Back to portfolio</span>
          <span className="lang-fr-text hidden">Retour au portfolio</span>
        </Link>

        <h1 className="mt-6 text-3xl md:text-4xl font-bold text-text-primary">
          <span className="lang-en-text">Writing Archive</span>
          <span className="lang-fr-text hidden">Archive d&apos;articles</span>
        </h1>
        <p className="mt-3 text-text-secondary max-w-2xl">
          <span className="lang-en-text">
            Notes and postmortems about building practical AI systems.
          </span>
          <span className="lang-fr-text hidden">
            Notes et retours d&apos;expérience sur la construction de systèmes IA
            pratiques.
          </span>
        </p>

        <div className="mt-10 space-y-4">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-card border border-white/5 rounded-xl p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl text-text-primary font-semibold">
                  <span className="lang-en-text">{post.title}</span>
                  <span className="lang-fr-text hidden">{post.titleFr}</span>
                </h2>
                <span
                  className={`px-2 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.12em] ${
                    post.draft
                      ? "bg-amber-900/25 text-amber-300"
                      : "bg-accent/20 text-accent"
                  }`}
                >
                  <span className="lang-en-text">
                    {post.draft ? "Coming soon" : "Published"}
                  </span>
                  <span className="lang-fr-text hidden">
                    {post.draft ? "Bientôt" : "Publié"}
                  </span>
                </span>
              </div>

              <p className="mt-2 text-sm text-text-secondary">
                <span className="lang-en-text">{post.excerpt}</span>
                <span className="lang-fr-text hidden">{post.excerptFr}</span>
              </p>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs font-mono text-text-muted">
                  {post.date} • {post.readingTime}
                </p>
                {post.draft ? (
                  <span className="text-xs text-text-muted">
                    <span className="lang-en-text">Drafting</span>
                    <span className="lang-fr-text hidden">Rédaction</span>
                  </span>
                ) : (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-dim transition-colors"
                  >
                    <span className="lang-en-text">Read article</span>
                    <span className="lang-fr-text hidden">Lire l&apos;article</span>
                    <ArrowUpRight size={14} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
