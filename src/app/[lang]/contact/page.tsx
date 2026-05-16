import type { Metadata } from "next";
import { type Lang, t } from "@/lib/i18n";
import InquiryForm from "@/components/InquiryForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = (lang === "zh" || lang === "en" ? lang : "en") as Lang;
  return {
    title: t(l, "contact.title") as string,
    description: t(l, "contact.subtitle") as string,
    alternates: {
      canonical: `/${l}/contact`,
      languages: {
        en: "/en/contact",
        zh: "/zh/contact",
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = (lang === "zh" || lang === "en" ? lang : "en") as Lang;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold text-gray-900">
          {t(l, "contact.title") as string}
        </h1>
        <p className="mt-2 text-gray-500">
          {t(l, "contact.subtitle") as string}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {t(l, "contact.formTitle") as string}
          </h2>
          <InquiryForm lang={l} />
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {t(l, "contact.infoTitle") as string}
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  {t(l, "contact.address") as string}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {t(l, "contact.addressValue") as string}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  {t(l, "contact.phoneLabel") as string}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {t(l, "contact.phoneValue") as string}<br />
                  {t(l, "contact.phoneValue2") as string}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  {t(l, "contact.emailLabel") as string}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {t(l, "contact.emailValue") as string}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  {t(l, "contact.whatsapp") as string}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {t(l, "contact.whatsappValue") as string}
                </p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">
              {lang === "zh" ? "工作时间" : "Working Hours"}
            </h3>
            <p className="text-sm text-gray-500">
              {lang === "zh"
                ? "周一至周五：8:00 - 18:00（北京时间）"
                : "Mon - Fri: 8:00 AM - 6:00 PM (GMT+8)"}
            </p>
          </div>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="mt-16 bg-gray-200 rounded-xl h-64 flex items-center justify-center">
        <div className="text-center text-gray-400">
          <svg className="w-10 h-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-sm">
            {lang === "zh" ? "此处可嵌入 Google 地图" : "Google Map can be embedded here"}
          </p>
        </div>
      </div>
    </div>
  );
}
