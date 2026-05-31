import Script from "next/script";
import TikTokEmbed from "./TikTokEmbed";

const pinnedVideos = [
  {
    url: "https://www.tiktok.com/@zinyarabo/video/7601502279384026389",
    videoId: "7601502279384026389",
    type: "video" as const,
  },
  {
    url: "https://www.tiktok.com/@zinyarabo/photo/7604513934938410260",
    videoId: "7604513934938410260",
    type: "photo" as const,
  },
  {
    url: "https://www.tiktok.com/@zinyarabo/video/7634479967769873685",
    videoId: "7634479967769873685",
    type: "video" as const,
  },
];

export default function Videos() {
  return (
    <section id="videos" className="py-20 px-6" style={{ background: "#F8F0FF" }}>
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full text-white font-bold text-sm mb-4"
            style={{ background: "linear-gradient(135deg, #B388FF, #64B5F6)" }}>
            🎬 VIDEOS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            人気の<span className="gradient-text">動画</span>たち
          </h2>
          <p className="text-gray-600 text-lg">じんじゃらぼのピックアップコンテンツ！</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10 items-start">
          {pinnedVideos.map((v) => (
            <TikTokEmbed key={v.videoId} url={v.url} videoId={v.videoId} type={v.type} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.tiktok.com/@zinyarabo?_r=1&_t=ZS-96oXOPXU9MS"
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
