"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const FORTUNES = [
  {
    result: "大吉",
    color: "#FF4D8D",
    textColor: "#FF4D8D",
    bg: "linear-gradient(135deg, #FFD6E8 0%, #FFF0D6 100%)",
    emoji: "🌸",
    message: "最高の運気！何事も全力で挑んで。神様があなたを見守っています。",
    poem: "春の風　穏やかに吹き　花開く",
  },
  {
    result: "中吉",
    color: "#FF8C42",
    textColor: "#FF8C42",
    bg: "linear-gradient(135deg, #FFF0D6 0%, #FFFDE7 100%)",
    emoji: "☀️",
    message: "良い運気が続いています。焦らず着実に進めば願いが叶います。",
    poem: "夏の日差し　温かく照らし　実り多し",
  },
  {
    result: "小吉",
    color: "#F4B400",
    textColor: "#B8860B",
    bg: "linear-gradient(135deg, #FFFDE7 0%, #F3F4F6 100%)",
    emoji: "🌼",
    message: "小さな幸せが積み重なる日。日常の中の喜びに気づいて。",
    poem: "野の花よ　小さくとも　輝きあり",
  },
  {
    result: "吉",
    color: "#4CAF50",
    textColor: "#2E7D32",
    bg: "linear-gradient(135deg, #E8F5E9 0%, #F0FFF4 100%)",
    emoji: "🍀",
    message: "平和で安定した運気。人との縁を大切にすると吉。",
    poem: "清き流れ　変わらず続く　穏やかさ",
  },
  {
    result: "末吉",
    color: "#64B5F6",
    textColor: "#1565C0",
    bg: "linear-gradient(135deg, #E3F2FD 0%, #EDE7FF 100%)",
    emoji: "🌙",
    message: "今は準備の時。焦らず地道に積み重ねることで運気が開けます。",
    poem: "冬の星よ　静かに輝く　夜明け前",
  },
  {
    result: "凶",
    color: "#B388FF",
    textColor: "#6A1B9A",
    bg: "linear-gradient(135deg, #EDE7FF 0%, #FFE0F0 100%)",
    emoji: "⚡",
    message: "試練の時ですが、乗り越えれば大きく成長できます。神社に参拝を！",
    poem: "嵐の後　空は晴れ渡り　虹が出る",
  },
];

function getDailyFortune() {
  const today = new Date();
  const seed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();
  return FORTUNES[seed % FORTUNES.length];
}

export default function Hero() {
  const [phase, setPhase] = useState<"shaking" | "done">("shaking");
  const [fortune, setFortune] = useState<(typeof FORTUNES)[0] | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFortune(getDailyFortune());
      setPhase("done");
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const today = new Date();
  const dateStr = `${today.getMonth() + 1}月${today.getDate()}日`;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 px-6">
      {/* 背景 */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background: fortune && phase === "done"
            ? fortune.bg
            : "linear-gradient(135deg, #FFD6E8, #FFF0D6, #EDE7FF, #FFD6E8)",
          backgroundSize: "300% 300%",
          transition: "background 0.8s ease",
        }}
      />

      {/* 装飾の丸 */}
      <div className="absolute top-16 left-8 w-20 h-20 rounded-full opacity-30 animate-bounce-slow"
        style={{ background: "radial-gradient(circle, #FF4D8D, #FF8C42)" }} />
      <div className="absolute top-28 right-10 w-14 h-14 rounded-full opacity-25 animate-bounce-slow"
        style={{ background: "radial-gradient(circle, #B388FF, #FF4D8D)", animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-12 w-16 h-16 rounded-full opacity-25 animate-bounce-slow"
        style={{ background: "radial-gradient(circle, #FFD700, #FF8C42)", animationDelay: "0.5s" }} />

      {/* キツネちゃん（右下に控えめに） */}
      <div className="absolute bottom-0 right-0 w-48 md:w-64 pointer-events-none select-none"
        style={{ animation: "float 4s ease-in-out infinite" }}>
        <Image
          src="/kitsune-pink.png"
          alt="KITSUNEちゃん"
          width={256}
          height={400}
          className="object-contain drop-shadow-xl"
          priority
        />
      </div>

      <style>{`
        @keyframes omikuji-shake {
          0%   { transform: rotate(-10deg) scale(1.1); }
          25%  { transform: rotate(10deg) scale(1.15); }
          50%  { transform: rotate(-8deg) scale(1.1); }
          75%  { transform: rotate(8deg) scale(1.15); }
          100% { transform: rotate(-10deg) scale(1.1); }
        }
        @keyframes result-reveal {
          0%   { transform: scale(0.7) translateY(16px); opacity: 0; }
          65%  { transform: scale(1.04) translateY(-4px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes fortune-text {
          0%   { transform: scale(0.5); opacity: 0; }
          70%  { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div className="relative z-10 w-full max-w-sm mx-auto text-center">
        {/* チャンネル名（小さく上部に） */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-2xl">⛩️</span>
          <span className="font-black text-lg gradient-text">じんじゃ⛩️らぼ</span>
        </div>

        {/* 日付ラベル */}
        <div className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-6"
          style={{ background: "rgba(255,255,255,0.7)", color: "#666" }}>
          🎋 {dateStr}の運勢
        </div>

        {/* おみくじ筒 → 結果 */}
        {phase === "shaking" && (
          <div className="flex flex-col items-center gap-6">
            <div
              className="w-28 h-40 rounded-3xl flex items-center justify-center text-6xl shadow-2xl"
              style={{
                background: "linear-gradient(160deg, #c0392b, #8e1a0e)",
                border: "4px solid #FFD700",
                animation: "omikuji-shake 0.18s ease-in-out infinite",
              }}
            >
              ⛩️
            </div>
            <p className="text-gray-600 font-bold text-lg animate-pulse">
              神様に祈っています…🙏
            </p>
          </div>
        )}

        {/* 結果カード */}
        {phase === "done" && fortune && (
          <div
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ animation: "result-reveal 0.5s ease forwards" }}
          >
            {/* 運勢 */}
            <div className="py-8 px-6 bg-white/60 backdrop-blur-sm">
              <div className="text-5xl mb-2">{fortune.emoji}</div>
              <div
                className="font-black mb-1"
                style={{
                  fontSize: "5rem",
                  lineHeight: 1,
                  color: fortune.textColor,
                  animation: "fortune-text 0.4s ease 0.1s both",
                }}
              >
                {fortune.result}
              </div>
              <div className="text-xs text-gray-400 font-bold tracking-widest">TODAY&apos;S FORTUNE</div>
            </div>

            {/* 和歌 */}
            <div className="py-4 px-6 bg-white/40">
              <p className="text-gray-700 font-bold tracking-widest text-base">
                {fortune.poem}
              </p>
            </div>

            {/* メッセージ */}
            <div className="py-5 px-6 bg-white/50">
              <p className="text-gray-700 font-bold leading-relaxed text-sm">
                {fortune.message}
              </p>
            </div>
          </div>
        )}

        {/* CTAボタン */}
        {phase === "done" && (
          <div
            className="flex flex-col sm:flex-row gap-3 justify-center mt-6"
            style={{ animation: "result-reveal 0.5s ease 0.3s both", opacity: 0 }}
          >
            <a
              href="https://www.tiktok.com/@zinyarabo?_r=1&_t=ZS-96oXOPXU9MS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-black text-white text-base transition-all hover:scale-105 shadow-lg"
              style={{ background: "linear-gradient(135deg, #FF4D8D, #FF8C42)" }}
            >
              🎵 TikTokを見る
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-black text-gray-700 text-base bg-white/80 transition-all hover:scale-105"
              style={{ border: "2px solid #FF4D8D" }}
            >
              🏯 もっと知る
            </a>
          </div>
        )}
      </div>

      {/* 下向き矢印 */}
      {phase === "done" && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-2xl animate-bounce-slow text-gray-400">
          ↓
        </div>
      )}
    </section>
  );
}
