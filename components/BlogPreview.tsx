import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full text-white font-bold text-sm mb-4"
            style={{ background: "linear-gradient(135deg, #FF4D8D, #B388FF)" }}>
            📖 BLOG
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            神社の<span className="gradient-text">豆知識</span>
          </h2>
          <p className="text-gray-600 text-lg">知れば参拝がもっと楽しくなる！</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="bg-white rounded-3xl overflow-hidden card-hover shadow-sm border border-pink-50 h-full">
                <div className="h-32 flex items-center justify-center text-6xl"
                  style={{ background: "linear-gradient(135deg, #FFD6E8, #EDE7FF)" }}>
                  {post.emoji}
                </div>
                <div className="p-5">
                  <h3 className="font-black text-gray-800 text-base leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">{post.description}</p>
                  <span className="text-sm font-bold" style={{ color: "#FF4D8D" }}>
                    続きを読む →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ background: "linear-gradient(135deg, #FF4D8D, #B388FF)" }}
          >
            📖 ブログ記事をもっと見る
          </Link>
        </div>
      </div>
    </section>
  );
}
