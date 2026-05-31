export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md"
      style={{ background: "rgba(255,255,255,0.8)", borderBottom: "1px solid rgba(255,77,141,0.15)" }}>
      <a href="#" className="flex items-center gap-2 font-black text-xl">
        <span>⛩️</span>
        <span className="gradient-text">じんじゃらぼ</span>
      </a>
      <div className="hidden sm:flex items-center gap-6 text-sm font-bold text-gray-600">
        <a href="#about" className="hover:text-pink-500 transition-colors">About</a>
        <a href="#videos" className="hover:text-pink-500 transition-colors">動画</a>
        <a href="#community" className="hover:text-pink-500 transition-colors">コミュニティ</a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full text-white font-bold transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg, #FF4D8D, #FF8C42)" }}
        >
          🎵 TikTok
        </a>
      </div>
    </nav>
  );
}
