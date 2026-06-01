import Link from "next/link";
import { getAllShrines } from "@/lib/shrines";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "神社紹介 | じんじゃ⛩️らぼ",
  description: "じんじゃらぼが実際に訪れた・調べた神社を詳しく紹介。ご利益・参拝情報・みどころを徹底解説！",
};

const benefitColors: Record<string, string> = {
  縁結び: "#FF4D8D",
  開運: "#FF8C42",
  商売繁盛: "#FFD700",
  健康長寿: "#4CAF50",
  学業成就: "#64B5F6",
  五穀豊穣: "#8BC34A",
  夫婦円満: "#FF4D8D",
  家内安全: "#B388FF",
  開運招福: "#FF8C42",
};

export default function ShrinesPage() {
  const shrines = getAllShrines();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20" style={{ background: "#FFF8FF" }}>
        {/* ヘッダー */}
        <div className="py-16 px-6 text-center"
          style={{ background: "linear-gradient(135deg, #FFF0D6, #FFD6E8, #EDE7FF)" }}>
          <div className="text-6xl mb-4">⛩️</div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-3">
            神社<span className="gradient-text">図鑑</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            じんじゃらぼが厳選した神社を詳しく紹介！<br />
            あなたにぴったりのご利益が見つかるかも✨
          </p>
        </div>

        {/* 神社一覧 */}
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shrines.map((shrine) => (
              <Link key={shrine.slug} href={`/shrines/${shrine.slug}`}>
                <article className="bg-white rounded-3xl overflow-hidden card-hover shadow-sm h-full">
                  {/* サムネイル */}
                  <div className="h-36 flex flex-col items-center justify-center gap-2"
                    style={{ background: shrine.color }}>
                    <div className="text-6xl">{shrine.emoji}</div>
                    <span className="text-xs font-bold text-gray-600 bg-white/70 px-3 py-1 rounded-full">
                      📍 {shrine.prefecture}
                    </span>
                  </div>

                  <div className="p-5">
                    <h2 className="font-black text-gray-800 text-xl mb-1">{shrine.title}</h2>
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2">{shrine.description}</p>

                    {/* ご利益タグ */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {shrine.benefit.slice(0, 3).map((b) => (
                        <span key={b}
                          className="px-2 py-0.5 rounded-full text-white text-xs font-bold"
                          style={{ backgroundColor: benefitColors[b] ?? "#B388FF" }}>
                          ✨ {b}
                        </span>
                      ))}
                    </div>

                    <span className="text-sm font-bold" style={{ color: "#FF4D8D" }}>
                      詳しく見る →
                    </span>
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
