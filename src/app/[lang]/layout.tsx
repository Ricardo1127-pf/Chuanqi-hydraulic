import Script from "next/script";
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
        ? ["宁波传祺液压", "宁波传祺液压有限公司", "传祺液压", "径向柱塞液压马达", "赫格隆替代", "赫格隆马达", "低速大扭矩马达", "CA液压马达", "CB液压马达", "CBP液压马达", "液压泵", "液压阀", "液压绞车", "液压马达厂家", "宁波液压马达"]
        : ["radial piston hydraulic motor", "Hägglunds replacement", "LSHT motor", "CA hydraulic motor", "CB hydraulic motor", "CBP hydraulic motor", "hydraulic pump", "hydraulic valve", "hydraulic winch", "ChuanQi Hydraulic", "China hydraulic manufacturer"],
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
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: l === "zh" ? "宁波传祺液压有限公司" : "Ningbo ChuanQi Hydraulic Co., Ltd.",
            alternateName: "ChuanQi Hydraulic",
            description: t(l, "site.description"),
            url: "https://chuanqipower.com",
            logo: "https://chuanqipower.com/images/logo.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ningbo",
              addressRegion: "Zhejiang",
              addressCountry: "CN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+86 136 1678 6884",
              contactType: "sales",
              availableLanguage: ["Chinese", "English"],
            },
            sameAs: [
              "https://chuanqipower.com",
            ],
          }),
        }}
      />
      <Header lang={l} />
      <main className="flex-1">{children}</main>
      <Footer lang={l} />
    </>
  );
}
