const links = [
  { label: "🎵 TikTok", href: "https://www.tiktok.com" },
  { label: "📸 Instagram", href: "https://www.instagram.com" },
  { label: "🐦 X (Twitter)", href: "https://twitter.com" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "動画", href: "#videos" },
  { label: "コミュニティ", href: "#community" },
];

export default function Footer() {
  return (
    <footer className="py-12 px-6 text-center"
      style={{ background: "linear-gradient(135deg, #1a1a2e, #2d1b4e)" }}>
      <div className="max-w-4xl mx-auto">
        {/* ロゴ */}
        <div className="text-5xl mb-3">⛩️</div>
        <h3 className="text-2xl font-black gradient-text mb-2">じんじゃ⛩️らぼ</h3>
        <p className="text-gray-400 text-sm mb-8">神社の魅力を、もっと身近に。</p>

        {/* ナビゲーション */}
        <nav className="flex justify-center gap-6 mb-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-gray-400 hover:text-white font-semibold text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* SNSリンク */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-bold text-sm text-white transition-all duration-300 hover:scale-105"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="w-full h-px mb-6" style={{ background: "rgba(255,255,255,0.1)" }} />

        <p className="text-gray-500 text-xs">
          © 2025 じんじゃ⛩️らぼ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
