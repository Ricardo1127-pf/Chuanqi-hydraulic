import Link from "next/link";
import { type Lang, t } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white rounded-lg p-2 inline-block">
                <img
                  src="/images/logo.png"
                  alt="ChuanQi Hydraulic"
                  className="h-8 w-auto"
                />
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t(lang, "footer.description") as string}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t(lang, "footer.quickLinks") as string}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}`} className="text-sm hover:text-white transition-colors">
                  {t(lang, "nav.home") as string}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/products`} className="text-sm hover:text-white transition-colors">
                  {t(lang, "nav.products") as string}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="text-sm hover:text-white transition-colors">
                  {t(lang, "nav.about") as string}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-sm hover:text-white transition-colors">
                  {t(lang, "nav.contact") as string}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t(lang, "footer.contactInfo") as string}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>{t(lang, "contact.phoneLabel") as string}: {t(lang, "contact.phoneValue") as string}</li>
              <li className="pl-0">{t(lang, "contact.phoneValue2") as string}</li>
              <li>{t(lang, "contact.emailLabel") as string}: {t(lang, "contact.emailValue") as string}</li>
              <li>{t(lang, "contact.address") as string}: {t(lang, "contact.addressValue") as string}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ChuanQi Hydraulic. {t(lang, "footer.copyright") as string}.
        </div>
      </div>
    </footer>
  );
}
