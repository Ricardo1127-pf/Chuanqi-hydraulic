import Link from "next/link";
import { type Lang, t } from "@/lib/i18n";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = (lang === "zh" || lang === "en" ? lang : "en") as Lang;
  const values = t(l, "about.values") as { title: string; desc: string }[];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold text-gray-900">
          {t(l, "about.title") as string}
        </h1>
        <p className="mt-2 text-gray-500">{t(l, "about.subtitle") as string}</p>
      </div>

      {/* Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <p className="text-gray-600 leading-relaxed text-lg">
            {t(l, "about.intro") as string}
          </p>
        </div>
        {/* Placeholder image */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 flex items-center justify-center">
          <div className="text-center">
            <img
              src="/images/logo.png"
              alt="ChuanQi Hydraulic"
              className="h-16 w-auto mx-auto mb-4"
            />
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-primary text-white rounded-2xl p-8 sm:p-12 mb-20">
        <h2 className="text-2xl font-bold mb-4">
          {t(l, "about.missionTitle") as string}
        </h2>
        <p className="text-blue-100 text-lg leading-relaxed">
          {t(l, "about.mission") as string}
        </p>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
          {t(l, "about.valuesTitle") as string}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href={`/${l}/contact`}
          className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
        >
          {t(l, "nav.contact") as string}
          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
