"use client";

import { useEffect } from "react";

interface TikTokEmbedProps {
  url: string;
  videoId: string;
  type?: "video" | "photo";
}

export default function TikTokEmbed({ url, videoId, type = "video" }: TikTokEmbedProps) {
  useEffect(() => {
    // TikTok embed scriptを再実行して埋め込みを初期化
    if ((window as Window & { tiktokEmbed?: { lib?: { render: (el: Element) => void } } }).tiktokEmbed?.lib) {
      const embeds = document.querySelectorAll(".tiktok-embed");
      embeds.forEach((el) => {
        (window as Window & { tiktokEmbed?: { lib?: { render: (el: Element) => void } } }).tiktokEmbed?.lib?.render(el);
      });
    }
  }, []);

  return (
    <div className="flex justify-center">
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-video-id={type === "video" ? videoId : undefined}
        data-type={type === "photo" ? "photo" : undefined}
        style={{ maxWidth: "325px", minWidth: "325px" }}
      >
        <section />
      </blockquote>
    </div>
  );
}
