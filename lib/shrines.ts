import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const shrinesDir = path.join(process.cwd(), "content/shrines");

export type Shrine = {
  slug: string;
  title: string;
  prefecture: string;
  address: string;
  deity: string;
  benefit: string[];
  rating: number;
  mapUrl: string;
  emoji: string;
  color: string;
  description: string;
  content?: string;
};

export function getAllShrines(): Shrine[] {
  const files = fs.readdirSync(shrinesDir);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(shrinesDir, filename), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        prefecture: data.prefecture as string,
        address: data.address as string,
        deity: data.deity as string,
        benefit: (data.benefit as string[]) ?? [],
        rating: (data.rating as number) ?? 3,
        mapUrl: data.mapUrl as string,
        emoji: data.emoji as string,
        color: data.color as string,
        description: data.description as string,
      };
    });
}

export function getShrineBySlug(slug: string): Shrine | null {
  const filepath = path.join(shrinesDir, `${slug}.md`);
  if (!fs.existsSync(filepath)) return null;
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  const html = marked(content) as string;
  return {
    slug,
    title: data.title as string,
    prefecture: data.prefecture as string,
    address: data.address as string,
    deity: data.deity as string,
    benefit: (data.benefit as string[]) ?? [],
    rating: (data.rating as number) ?? 3,
    mapUrl: data.mapUrl as string,
    emoji: data.emoji as string,
    color: data.color as string,
    description: data.description as string,
    content: html,
  };
}
