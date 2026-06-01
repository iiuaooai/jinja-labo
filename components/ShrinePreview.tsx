import Link from "next/link";
import { getAllShrines } from "@/lib/shrines";

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

export default function ShrinePreview() {
  const shrines = getAllShrines().slice(0, 3);

  return (
    <section id="shrines" className="py-20 px-6" style={{ background: "#FFF8FF" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full text-white font-bold text-sm mb-4"
            style={{ background: "linear-gradient(135deg, #FF8C42, #FFD700)" }}>
            ⛩️ SHRINES
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            神社<span className="gradient-text">図鑑</span>
          </h2>
          <p className="text-gray-600 text-lg">じんじゃらぼ厳選の神社をご紹介！</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {shrines.map((shrine) => (
            <Link key={shrine.slug} href={`/shrines/${shrine.slug}`}>
              <article className="bg-white rounded-3xl overflow-hidden card-hover shadow-sm h-full">
                <div className="h-32 flex flex-col items-center justify-center gap-2"
                  style={{ background: shrine.color }}>
                  <div className="text-5xl">{shrine.emoji}</div>
                  <span className="text-xs font-bold text-gray-600 bg-white/70 px-3 py-0.5 rounded-full">
                    📍 {shrine.prefecture}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-black text-gray-800 text-lg mb-1">{shrine.title}</h3>
                  <p className="text-gray-500 text-xs mb-3 line-clamp-2">{shrine.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {shrine.benefit.slice(0, 2).map((b) => (
                      <span key={b}
                        className="px-2 py-0.5 rounded-full text-white text-xs font-bold"
                        style={{ backgroundColor: benefitColors[b] ?? "#B388FF" }}>
                        ✨ {b}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/shrines"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ background: "linear-gradient(135deg, #FF8C42, #FFD700)" }}
          >
            ⛩️ 神社図鑑をもっと見る
          </Link>
        </div>
      </div>
    </section>
  );
}
