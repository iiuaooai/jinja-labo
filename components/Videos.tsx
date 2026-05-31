const videos = [
  {
    emoji: "⛩️",
    title: "明治神宮の秘密10選",
    views: "12.3万回",
    likes: "8,900",
    tag: "人気",
    tagColor: "#FF4D8D",
    bg: "#FFE0F0",
  },
  {
    emoji: "🌸",
    title: "春の花見スポット神社ランキング",
    views: "8.7万回",
    likes: "6,200",
    tag: "季節",
    tagColor: "#FF8C42",
    bg: "#FFF0D6",
  },
  {
    emoji: "🦊",
    title: "稲荷神社のキツネはなぜいるの？",
    views: "15.1万回",
    likes: "11,400",
    tag: "解説",
    tagColor: "#B388FF",
    bg: "#EDE7FF",
  },
  {
    emoji: "🎋",
    title: "七夕の願い事が叶う神社3選",
    views: "6.5万回",
    likes: "4,800",
    tag: "おすすめ",
    tagColor: "#4CAF50",
    bg: "#E8F5E9",
  },
  {
    emoji: "🏯",
    title: "東京の最強パワースポット",
    views: "9.2万回",
    likes: "7,100",
    tag: "人気",
    tagColor: "#FF4D8D",
    bg: "#FFE0F0",
  },
  {
    emoji: "🎍",
    title: "初詣の正しい参拝方法",
    views: "20.4万回",
    likes: "15,600",
    tag: "バズ",
    tagColor: "#FFD700",
    bg: "#FFFDE7",
  },
];

export default function Videos() {
  return (
    <section id="videos" className="py-20 px-6" style={{ background: "#F8F0FF" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full text-white font-bold text-sm mb-4"
            style={{ background: "linear-gradient(135deg, #B388FF, #64B5F6)" }}>
            🎬 VIDEOS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            人気の<span className="gradient-text">動画</span>たち
          </h2>
          <p className="text-gray-600 text-lg">TikTokで話題になった動画をピックアップ！</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
          {videos.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl overflow-hidden card-hover cursor-pointer bg-white shadow-sm"
            >
              {/* サムネイル */}
              <div
                className="h-40 flex items-center justify-center text-7xl"
                style={{ background: v.bg }}
              >
                {v.emoji}
              </div>

              <div className="p-4">
                <span
                  className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-2"
                  style={{ backgroundColor: v.tagColor }}
                >
                  {v.tag}
                </span>
                <h3 className="font-black text-gray-800 text-sm leading-snug mb-3">{v.title}</h3>
                <div className="flex gap-4 text-xs text-gray-500 font-semibold">
                  <span>👁️ {v.views}</span>
                  <span>❤️ {v.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            style={{ background: "linear-gradient(135deg, #B388FF, #FF4D8D)" }}
          >
            🎵 もっと動画を見る
          </a>
        </div>
      </div>
    </section>
  );
}
