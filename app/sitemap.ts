import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { getAllShrines } from "@/lib/shrines";

const siteUrl = "https://jinja-labo.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const shrines = getAllShrines().map((s) => ({
    url: `${siteUrl}/shrines/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/shrines`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...posts,
    ...shrines,
  ];
}
