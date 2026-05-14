import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { type Lang, t } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = (lang === "zh" || lang === "en" ? lang : "en") as Lang;
  return {
    title: t(l, "site.title") as string,
    description: t(l, "site.description") as string,
    keywords:
      l === "zh"
        ? ["径向柱塞液压马达", "赫格隆替代", "低速大扭矩马达", "CA液压马达", "CB液压马达", "液压泵", "液压阀", "液压绞车", "传祺液压", "宁波液压马达厂"]
        : ["radial piston hydraulic motor", "Hägglunds replacement", "LSHT motor", "CA hydraulic motor", "CB hydraulic motor", "hydraulic pump", "hydraulic valve", "hydraulic winch", "ChuanQi Hydraulic", "China hydraulic manufacturer"],
    openGraph: {
      title: t(l, "site.title") as string,
      description: t(l, "site.description") as string,
      siteName: "ChuanQi Hydraulic",
      locale: l === "zh" ? "zh_CN" : "en_US",
      type: "website",
    },
    alternates: {
      languages: {
        en: "/en",
        zh: "/zh",
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = (lang === "zh" || lang === "en" ? lang : "en") as Lang;

  return (
    <>
      <Header lang={l} />
      <main className="flex-1">{children}</main>
      <Footer lang={l} />
    </>
  );
}
