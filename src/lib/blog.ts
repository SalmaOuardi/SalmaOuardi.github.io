import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  titleFr: string;
  excerpt: string;
  excerptFr: string;
  tags: string[];
  date: string;
  readingTime: string;
  draft: boolean;
  content: string;
};

export function getAllPosts(): BlogPost[] {
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && f !== "_TEMPLATE.md");

  const posts = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    const isDraft =
      data.draft === true || filename.startsWith("_");

    // Derive slug: remove leading _ and .md extension
    const slug = filename.replace(/^_/, "").replace(/\.md$/, "");

    const stats = readingTime(content);

    return {
      slug,
      title: data.title ?? "",
      titleFr: data.title_fr ?? data.title ?? "",
      excerpt: data.excerpt ?? "",
      excerptFr: data.excerpt_fr ?? data.excerpt ?? "",
      tags: data.tags ?? [],
      date: data.date ?? "",
      readingTime: `${Math.max(1, Math.ceil(stats.minutes))} min read`,
      draft: isDraft,
      content,
    };
  });

  // Sort: published first, then by date descending
  return posts.sort((a, b) => {
    if (a.draft !== b.draft) return a.draft ? 1 : -1;
    return b.date.localeCompare(a.date);
  });
}

export function getPublishedPosts(): BlogPost[] {
  return getAllPosts().filter((p) => !p.draft);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
