import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ | じんじゃ⛩️らぼ",
  description: "神社の豆知識・参拝作法・パワースポット情報をわかりやすく解説するじんじゃらぼのブログ。",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20" style={{ background: "#FFF8FF" }}>
        {/* ヘッダー */}
        <div className="py-16 px-6 text-center"
          style={{ background: "linear-gradient(135deg, #FFD6E8, #EDE7FF, #FFF0D6)" }}>
          <div className="text-6xl mb-4">📖</div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-3">
            じんじゃ<span className="gradient-text">ブログ</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            神社の豆知識・参拝作法・パワースポット情報をポップに解説！
          </p>
        </div>

        {/* 記事一覧 */}
        <div className="max-w-4xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-3xl overflow-hidden card-hover h-full shadow-sm">
                  {/* サムネイル */}
                  <div className="h-36 flex items-center justify-center text-7xl"
                    style={{ background: "linear-gradient(135deg, #FFD6E8, #EDE7FF)" }}>
                    {post.emoji}
                  </div>
                  <div className="p-5">
                    {/* タグ */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag}
                          className="px-3 py-1 rounded-full text-xs font-bold text-white"
                          style={{ background: "linear-gradient(135deg, #FF4D8D, #FF8C42)" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-black text-gray-800 text-lg leading-snug mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <time className="text-xs text-gray-400 font-semibold">
                        📅 {post.date}
                      </time>
                      <span className="text-sm font-bold"
                        style={{ color: "#FF4D8D" }}>
                        続きを読む →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
