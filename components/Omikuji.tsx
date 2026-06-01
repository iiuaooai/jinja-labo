"use client";

import { useState, useEffect } from "react";

const FORTUNES = [
  {
    result: "大吉",
    color: "#FF4D8D",
    bg: "linear-gradient(135deg, #FFD6E8, #FFF0D6)",
    emoji: "🌸",
    message: "最高の運気！何事も全力で挑んで。神様があなたを見守っています。",
    poem: "春の風　穏やかに吹き　花開く",
  },
  {
    result: "中吉",
    color: "#FF8C42",
    bg: "linear-gradient(135deg, #FFF0D6, #FFFDE7)",
    emoji: "☀️",
    message: "良い運気が続いています。焦らず着実に進めば願いが叶います。",
    poem: "夏の日差し　温かく照らし　実り多し",
  },
  {
    result: "小吉",
    color: "#FFD700",
    bg: "linear-gradient(135deg, #FFFDE7, #F3F4F6)",
    emoji: "🌼",
    message: "小さな幸せが積み重なる日。日常の中の喜びに気づいて。",
    poem: "野の花よ　小さくとも　輝きあり",
  },
  {
    result: "吉",
    color: "#4CAF50",
    bg: "linear-gradient(135deg, #E8F5E9, #F0FFF4)",
    emoji: "🍀",
    message: "平和で安定した運気。人との縁を大切にすると吉。",
    poem: "清き流れ　変わらず続く　穏やかさ",
  },
  {
    result: "末吉",
    color: "#64B5F6",
    bg: "linear-gradient(135deg, #E3F2FD, #EDE7FF)",
    emoji: "🌙",
    message: "今は準備の時。焦らず地道に積み重ねることで運気が開けます。",
    poem: "冬の星よ　静かに輝く　夜明け前",
  },
  {
    result: "凶",
    color: "#B388FF",
    bg: "linear-gradient(135deg, #EDE7FF, #FFE0F0)",
    emoji: "⚡",
    message: "試練の時ですが、乗り越えれば大きく成長できます。神社に参拝を！",
    poem: "嵐の後　空は晴れ渡り　虹が出る",
  },
];

// 日付をシードにして毎日同じ結果が出る
function getDailyFortune() {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  return FORTUNES[seed % FORTUNES.length];
}

type Phase = "idle" | "shaking" | "revealing" | "done";

export default function Omikuji() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [fortune, setFortune] = useState<(typeof FORTUNES)[0] | null>(null);
  const [hasDrawn, setHasDrawn] = useState(false);

  // 初回訪問時は自動スタート
  useEffect(() => {
    const timer = setTimeout(() => {
      startOmikuji();
    }, 800);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startOmikuji() {
    if (phase !== "idle") return;
    setPhase("shaking");
    setTimeout(() => {
      setFortune(getDailyFortune());
      setPhase("revealing");
      setTimeout(() => {
        setPhase("done");
        setHasDrawn(true);
      }, 600);
    }, 1800);
  }

  const today = new Date();
  const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;

  return (
    <section className="py-20 px-6" style={{ background: "linear-gradient(135deg, #1a1a2e, #2d1b4e)" }}>
      <div className="max-w-md mx-auto text-center">
        <span className="inline-block px-4 py-2 rounded-full font-bold text-sm mb-6"
          style={{ background: "rgba(255,255,255,0.15)", color: "#FFD700" }}>
          🎋 今日のおみくじ
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
          {dateStr}の運勢
        </h2>
        <p className="text-gray-400 text-sm mb-10">毎日結果が変わります。何度でも引けます⛩️</p>

        {/* おみくじ筒 */}
        <div className="relative flex justify-center mb-8">
          <button
            onClick={startOmikuji}
            disabled={phase === "shaking" || phase === "revealing"}
            className="relative focus:outline-none"
            aria-label="おみくじを引く"
          >
            {/* 筒 */}
            <div
              className="w-24 h-36 rounded-2xl flex items-center justify-center text-5xl shadow-2xl transition-all duration-300"
              style={{
                background: "linear-gradient(160deg, #c0392b, #8e1a0e)",
                border: "4px solid #FFD700",
                animation: phase === "shaking"
                  ? "omikuji-shake 0.15s ease-in-out infinite"
                  : "none",
                transform: phase === "shaking" ? undefined : "scale(1)",
              }}
            >
              ⛩️
            </div>

            {/* 光のエフェクト */}
            {phase === "shaking" && (
              <div className="absolute inset-0 rounded-2xl animate-pulse"
                style={{ background: "rgba(255,215,0,0.2)" }} />
            )}
          </button>
        </div>

        <style>{`
          @keyframes omikuji-shake {
            0%   { transform: rotate(-8deg) translateY(-4px); }
            25%  { transform: rotate(8deg) translateY(4px); }
            50%  { transform: rotate(-6deg) translateY(-2px); }
            75%  { transform: rotate(6deg) translateY(2px); }
            100% { transform: rotate(-8deg) translateY(-4px); }
          }
          @keyframes result-pop {
            0%   { transform: scale(0.5) translateY(20px); opacity: 0; }
            70%  { transform: scale(1.05) translateY(-4px); opacity: 1; }
            100% { transform: scale(1) translateY(0); opacity: 1; }
          }
        `}</style>

        {/* 結果表示 */}
        {(phase === "revealing" || phase === "done") && fortune && (
          <div
            className="rounded-3xl p-8 text-left shadow-2xl"
            style={{
              background: fortune.bg,
              animation: "result-pop 0.5s ease forwards",
            }}
          >
            {/* 結果 */}
            <div className="text-center mb-6">
              <div className="text-5xl mb-2">{fortune.emoji}</div>
              <div className="text-6xl font-black mb-1"
                style={{ color: fortune.color }}>
                {fortune.result}
              </div>
              <div className="text-xs text-gray-500 font-bold">TODAY&apos;S FORTUNE</div>
            </div>

            {/* 和歌 */}
            <div className="text-center mb-5 py-4 rounded-2xl bg-white/50">
              <p className="text-gray-700 font-bold text-lg leading-relaxed tracking-widest">
                {fortune.poem}
              </p>
            </div>

            {/* メッセージ */}
            <p className="text-gray-700 text-center leading-relaxed font-bold">
              {fortune.message}
            </p>
          </div>
        )}

        {/* 引く前のメッセージ */}
        {phase === "idle" && (
          <p className="text-gray-400 text-sm animate-pulse">おみくじを準備中…</p>
        )}
        {phase === "shaking" && (
          <p className="text-yellow-300 font-bold animate-pulse">神様に祈っています…🙏</p>
        )}

        {/* 再度引くボタン */}
        {phase === "done" && hasDrawn && (
          <button
            onClick={() => { setPhase("idle"); setTimeout(startOmikuji, 50); }}
            className="mt-6 px-6 py-2 rounded-full text-sm font-bold text-gray-300 border border-gray-600 hover:border-pink-400 hover:text-pink-400 transition-all"
          >
            🎋 もう一度引く
          </button>
        )}
      </div>
    </section>
  );
}
