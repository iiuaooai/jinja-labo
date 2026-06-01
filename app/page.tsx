import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Videos from "@/components/Videos";
import BlogPreview from "@/components/BlogPreview";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "じんじゃ⛩️らぼ",
  url: "https://jinja-labo.vercel.app",
  description:
    "神社の歴史・豆知識・パワースポットをポップに発信するTikTokコミュニティ。神社の「へぇ〜！」を一緒に探究しよう！",
  sameAs: [
    "https://www.tiktok.com/@zinyarabo",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Navbar />
        <Hero />
        <About />
        <Videos />
        <BlogPreview />
        <Community />
        <Footer />
      </main>
    </>
  );
}
