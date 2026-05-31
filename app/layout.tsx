import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "じんじゃ⛩️らぼ | 神社の魅力を、もっと身近に",
  description: "TikTokチャンネル「じんじゃ⛩️らぼ」の公式サイト。神社の魅力を楽しくポップに発信するコミュニティです。",
  openGraph: {
    title: "じんじゃ⛩️らぼ",
    description: "神社の魅力を、もっと身近に。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
