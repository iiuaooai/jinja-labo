import { getShrineBySlug, getAllShrines } from "@/lib/shrines";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllShrines().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const shrine = getShrineBySlug(slug);
  if (!shrine) return {};
  return {
    title: `${shrine.title}（${shrine.prefecture}）| じんじゃ⛩️らぼ`,
    description: shrine.description,
  };
}

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

export default async function ShrinePage({ params }: Props) {
  const { slug } = await params;
  const shrine = getShrineBySlug(slug);
  if (!shrine) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20" style={{ background: "#FFF8FF" }}>
        {/* ヘッダー */}
        <div className="py-14 px-6 text-center"
          style={{ background: shrine.color }}>
          <div className="text-8xl mb-3">{shrine.emoji}</div>
          <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-1 rounded-full text-sm font-bold text-gray-600 mb-4">
            📍 {shrine.prefecture}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-3">
            {shrine.title}
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">{shrine.description}</p>
        </div>

        <div className="max-w-2xl mx-auto px-6 py-12">
          {/* 基本情報カード */}
          <div className="bg-white rounded-3xl p-6 mb-8 shadow-sm">
            <h2 className="font-black text-gray-800 text-xl mb-4">📋 基本情報</h2>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="font-bold text-gray-500 w-20 shrink-0">祭神</span>
                <span className="text-gray-700">{shrine.deity}</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-gray-500 w-20 shrink-0">住所</span>
                <span className="text-gray-700">{shrine.address}</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-gray-500 w-20 shrink-0">Googleマップ</span>
                <a href={shrine.mapUrl} target="_blank" rel="noopener noreferrer"
                  className="font-bold hover:underline" style={{ color: "#FF4D8D" }}>
                  地図を開く 🗺️
                </a>
              </div>
            </div>
          </div>

          {/* ご利益 */}
          <div className="bg-white rounded-3xl p-6 mb-8 shadow-sm">
            <h2 className="font-black text-gray-800 text-xl mb-4">✨ ご利益</h2>
            <div className="flex flex-wrap gap-2">
              {shrine.benefit.map((b) => (
                <span key={b}
                  className="px-4 py-2 rounded-full text-white font-bold text-sm"
                  style={{ backgroundColor: benefitColors[b] ?? "#B388FF" }}>
                  ✨ {b}
                </span>
              ))}
            </div>
          </div>

          {/* 記事本文 */}
          <article
            className="bg-white rounded-3xl p-6 mb-8 shadow-sm
              prose prose-lg max-w-none
              prose-headings:font-black prose-headings:text-gray-800
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-3
              prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-strong:text-gray-900
              prose-ul:text-gray-700 prose-li:my-1
              prose-table:text-sm"
            dangerouslySetInnerHTML={{ __html: shrine.content ?? "" }}
          />

          {/* TikTokへのCTA */}
          <div className="rounded-3xl p-8 text-center mb-8"
            style={{ background: "linear-gradient(135deg, #FF4D8D, #FF8C42, #FFD700)" }}>
            <div className="text-5xl mb-3">⛩️</div>
            <p className="text-white font-black text-xl mb-2">動画でも紹介中！</p>
            <p className="text-white/90 text-sm mb-6">
              じんじゃらぼのTikTokで神社の魅力を動画で発信✨
            </p>
            <a
              href="https://www.tiktok.com/@zinyarabo?_r=1&_t=ZS-96oXOPXU9MS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-black text-gray-800 bg-white transition-all hover:scale-105"
            >
              🎵 TikTokをフォローする
            </a>
          </div>

          {/* 神社一覧に戻る */}
          <div className="text-center">
            <Link href="/shrines"
              className="inline-flex items-center gap-2 font-bold text-gray-500 hover:text-pink-500 transition-colors">
              ← 神社図鑑に戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
