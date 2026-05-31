import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const siteUrl = "https://jinja-labo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "じんじゃ⛩️らぼ | 神社の魅力を、もっと身近に",
    template: "%s | じんじゃ⛩️らぼ",
  },
  description:
    "TikTokチャンネル「じんじゃ⛩️らぼ」の公式サイト。神社の歴史・豆知識・パワースポットをポップに発信するコミュニティです。フォロワー3,000人以上・高評価30,000件超！",
  keywords: [
    "じんじゃらぼ",
    "神社",
    "TikTok",
    "パワースポット",
    "神社豆知識",
    "神社歴史",
    "神様",
    "お参り",
    "参拝",
    "zinyarabo",
  ],
  authors: [{ name: "じんじゃ⛩️らぼ", url: siteUrl }],
  creator: "じんじゃ⛩️らぼ",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "じんじゃ⛩️らぼ",
    title: "じんじゃ⛩️らぼ | 神社の魅力を、もっと身近に",
    description:
      "神社の歴史・豆知識・パワースポットをポップに発信するTikTokコミュニティ。神社の「へぇ〜！」を一緒に探究しよう！",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "じんじゃ⛩️らぼ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "じんじゃ⛩️らぼ | 神社の魅力を、もっと身近に",
    description:
      "神社の歴史・豆知識・パワースポットをポップに発信するTikTokコミュニティ。",
    images: ["/og-image.png"],
    creator: "@zinyarabo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
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
