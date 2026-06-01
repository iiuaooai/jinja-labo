import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDir = path.join(process.cwd(), "content/posts");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  emoji: string;
  tags: string[];
  content?: string;
};

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDir);
  const posts = files
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(postsDir, filename), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        emoji: data.emoji as string,
        tags: (data.tags as string[]) ?? [],
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const filepath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filepath)) return null;
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  const html = marked(content) as string;
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    emoji: data.emoji as string,
    tags: (data.tags as string[]) ?? [],
    content: html,
  };
}
