import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import BlogArticleBody from "./BlogArticleBody";

type BlogArticlePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllPosts()
    .filter((p) => !p.draft)
    .map((p) => ({ slug: p.slug }));
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const post = getPostBySlug(params.slug);

  if (!post || post.draft) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="lang-en-text">Back to writing</span>
          <span className="lang-fr-text hidden">Retour à l&apos;écriture</span>
        </Link>

        <header className="mt-6 pb-8 border-b border-white/10">
          <p className="text-xs font-mono text-text-muted uppercase tracking-[0.14em]">
            {post.date} • {post.readingTime}
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-text-primary leading-tight">
            <span className="lang-en-text">{post.title}</span>
            <span className="lang-fr-text hidden">{post.titleFr}</span>
          </h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-mono rounded-md bg-[#0a0a0f] border border-white/10 text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <BlogArticleBody content={post.content} />
      </article>
    </main>
  );
}
