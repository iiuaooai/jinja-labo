import Image from "next/image";

const stats = [
  { emoji: "🎥", value: "100+", label: "動画" },
  { emoji: "👥", value: "1万+", label: "フォロワー" },
  { emoji: "⛩️", value: "50+", label: "神社を紹介" },
  { emoji: "❤️", value: "10万+", label: "いいね" },
];

const features = [
  {
    emoji: "🔍",
    title: "深掘り解説",
    desc: "神社の歴史・由緒・ご利益をわかりやすくポップに解説！",
    color: "#FFE0F0",
  },
  {
    emoji: "📍",
    title: "パワースポット紹介",
    desc: "全国の話題スポット・穴場神社を現地取材でお届け！",
    color: "#FFF0D6",
  },
  {
    emoji: "🎉",
    title: "お祭り・イベント情報",
    desc: "季節のお祭りや神社イベントをリアルタイム発信！",
    color: "#EDE7FF",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-white font-bold text-sm mb-4"
            style={{ background: "linear-gradient(135deg, #FF4D8D, #FF8C42)" }}>
            ✨ ABOUT
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
            じんじゃらぼって<br />
            <span className="gradient-text">なに？</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            難しそうな神社の世界を、もっとカジュアルに・楽しく・身近に！
            TikTokを通じて神社の魅力を発信するコミュニティです 🌟
          </p>
        </div>

        {/* 特徴カード */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl p-6 card-hover"
              style={{ backgroundColor: f.color }}
            >
              <div className="text-5xl mb-4">{f.emoji}</div>
              <h3 className="text-xl font-black text-gray-800 mb-2">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* キツネちゃん吹き出し */}
        <div className="flex items-end gap-4 mb-10">
          <div className="w-28 shrink-0">
            <Image src="/kitsune-miko.png" alt="KITSUNEちゃん" width={112} height={180} className="object-contain drop-shadow-md" />
          </div>
          <div className="relative bg-white rounded-3xl rounded-bl-none px-5 py-4 shadow-md border border-pink-100 text-sm font-bold text-gray-700 leading-relaxed">
            神社って難しそうに見えるけど、知れば知るほど面白いんだよ！一緒に探究しよ〜🦊✨
            <div className="absolute -bottom-3 left-0 w-4 h-4 bg-white border-b border-l border-pink-100"
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
          </div>
        </div>

        {/* 実績数字 */}
        <div className="rounded-3xl p-8 md:p-12"
          style={{ background: "linear-gradient(135deg, #FFD6E8, #EDE7FF, #FFF0D6)" }}>
          <h3 className="text-center text-2xl font-black text-gray-700 mb-8">
            📊 じんじゃらぼの実績
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl mb-2">{s.emoji}</div>
                <div className="text-3xl font-black gradient-text">{s.value}</div>
                <div className="text-gray-600 font-bold mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
