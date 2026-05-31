export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* グラデーション背景 */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background: "linear-gradient(135deg, #FFD6E8, #FFF0D6, #EDE7FF, #D6F0FF, #FFD6E8)",
          backgroundSize: "300% 300%",
        }}
      />

      {/* 装飾の丸 */}
      <div className="absolute top-16 left-8 w-24 h-24 rounded-full opacity-40 animate-bounce-slow"
        style={{ background: "radial-gradient(circle, #FF4D8D, #FF8C42)" }} />
      <div className="absolute top-32 right-12 w-16 h-16 rounded-full opacity-30 animate-bounce-slow"
        style={{ background: "radial-gradient(circle, #B388FF, #FF4D8D)", animationDelay: "1s" }} />
      <div className="absolute bottom-24 left-16 w-20 h-20 rounded-full opacity-30 animate-bounce-slow"
        style={{ background: "radial-gradient(circle, #FFD700, #FF8C42)", animationDelay: "0.5s" }} />
      <div className="absolute bottom-40 right-8 w-28 h-28 rounded-full opacity-25 animate-bounce-slow"
        style={{ background: "radial-gradient(circle, #B388FF, #64B5F6)", animationDelay: "1.5s" }} />

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <div className="text-8xl mb-4 animate-float inline-block">⛩️</div>

        <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
          <span className="gradient-text">じんじゃ</span>
          <br />
          <span className="gradient-text">らぼ</span>
        </h1>

        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-3">
          神社の魅力を、もっと身近に。✨
        </p>

        <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed">
          TikTokで神社の不思議・歴史・パワースポットを<br className="hidden md:inline" />
          楽しくポップに発信中！
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-black text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
            style={{ background: "linear-gradient(135deg, #FF4D8D, #FF8C42)" }}
          >
            🎵 TikTokを見る
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-black text-gray-700 text-lg border-3 border-gray-300 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white"
            style={{ border: "3px solid #FF4D8D" }}
          >
            🏯 もっと知る
          </a>
        </div>
      </div>

      {/* 下向き矢印 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl animate-bounce-slow text-gray-500">
        ↓
      </div>
    </section>
  );
}
