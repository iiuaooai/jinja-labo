import { getPostBySlug, getAllPosts } from "@/lib/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | じんじゃ⛩️らぼ`,
    description: post.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20" style={{ background: "#FFF8FF" }}>
        {/* ヘッダー */}
        <div className="py-14 px-6 text-center"
          style={{ background: "linear-gradient(135deg, #FFD6E8, #EDE7FF, #FFF0D6)" }}>
          <div className="text-7xl mb-4">{post.emoji}</div>
          <div className="flex justify-center flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag}
                className="px-3 py-1 rounded-full text-xs font-bold text-white"
                style={{ background: "linear-gradient(135deg, #FF4D8D, #FF8C42)" }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-800 max-w-2xl mx-auto leading-snug mb-3">
            {post.title}
          </h1>
          <time className="text-sm text-gray-500 font-semibold">📅 {post.date}</time>
        </div>

        {/* 記事本文 */}
        <div className="max-w-2xl mx-auto px-6 py-12">
          <article
            className="prose prose-lg max-w-none
              prose-headings:font-black prose-headings:text-gray-800
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-strong:text-gray-900
              prose-ul:text-gray-700 prose-li:my-1
              prose-table:text-sm prose-th:bg-pink-50
              prose-blockquote:border-pink-400 prose-blockquote:text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
          />

          {/* TikTokへのCTA */}
          <div className="mt-14 rounded-3xl p-8 text-center"
            style={{ background: "linear-gradient(135deg, #FF4D8D, #FF8C42, #FFD700)" }}>
            <div className="text-5xl mb-3">⛩️</div>
            <p className="text-white font-black text-xl mb-2">もっと神社の豆知識を見る！</p>
            <p className="text-white/90 text-sm mb-6">TikTokで動画も発信中✨</p>
            <a
              href="https://www.tiktok.com/@zinyarabo?_r=1&_t=ZS-96oXOPXU9MS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-black text-gray-800 bg-white transition-all hover:scale-105"
            >
              🎵 TikTokをフォローする
            </a>
          </div>

          {/* ブログ一覧に戻る */}
          <div className="mt-8 text-center">
            <Link href="/blog"
              className="inline-flex items-center gap-2 font-bold text-gray-500 hover:text-pink-500 transition-colors">
              ← ブログ一覧に戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
