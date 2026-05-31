const perks = [
  { emoji: "🎯", title: "最新情報をいち早く", desc: "新動画・イベント情報をいち早くお届け" },
  { emoji: "💬", title: "交流・質問OK", desc: "神社好きと語り合おう！どんな質問もウェルカム" },
  { emoji: "📸", title: "参拝報告シェア", desc: "行ってよかった神社をみんなでシェア！" },
  { emoji: "🎁", title: "限定コンテンツ", desc: "コミュニティメンバー限定の特別コンテンツ" },
];

export default function Community() {
  return (
    <section id="community" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full text-white font-bold text-sm mb-4"
            style={{ background: "linear-gradient(135deg, #FF8C42, #FFD700)" }}>
            🌟 COMMUNITY
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            一緒に<span className="gradient-text">楽しもう！</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-lg mx-auto">
            じんじゃらぼのコミュニティに参加して、神社ライフをもっと楽しく✨
          </p>
        </div>

        {/* メリット */}
        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {perks.map((p, i) => (
            <div
              key={p.title}
              className="flex gap-4 items-start p-5 rounded-2xl card-hover"
              style={{
                background: i % 2 === 0
                  ? "linear-gradient(135deg, #FFE0F0, #FFF0D6)"
                  : "linear-gradient(135deg, #EDE7FF, #D6F0FF)",
              }}
            >
              <div className="text-4xl shrink-0">{p.emoji}</div>
              <div>
                <h3 className="font-black text-gray-800 text-lg mb-1">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-3xl p-8 md:p-12 text-center"
          style={{ background: "linear-gradient(135deg, #FF4D8D, #FF8C42, #FFD700)" }}>
          <div className="text-6xl mb-4 animate-wiggle inline-block">⛩️</div>
          <h3 className="text-3xl font-black text-white mb-3">
            今すぐ参加しよう！
          </h3>
          <p className="text-white/90 text-lg mb-8">
            TikTokをフォローして<br />じんじゃらぼコミュニティの仲間になろう！
          </p>
          <a
            href="https://www.tiktok.com/@zinyarabo?_r=1&_t=ZS-96oXOPXU9MS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-black text-gray-800 text-xl bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            🎵 フォローする
          </a>
        </div>
      </div>
    </section>
  );
}
