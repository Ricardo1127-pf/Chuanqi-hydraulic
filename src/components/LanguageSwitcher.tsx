"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANGUAGES, type Lang } from "@/lib/i18n";

export default function LanguageSwitcher({ currentLang }: { currentLang: Lang }) {
  const pathname = usePathname();

  function getSwitchedPath(targetLang: Lang) {
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = targetLang;
    return `/${segments.join("/")}`;
  }

  return (
    <div className="flex items-center gap-1">
      {LANGUAGES.map((lang) => (
        <Link
          key={lang.code}
          href={getSwitchedPath(lang.code)}
          className={`px-2 py-1 text-sm rounded transition-colors ${
            currentLang === lang.code
              ? "bg-primary text-white"
              : "text-gray-600 hover:text-primary hover:bg-gray-100"
          }`}
        >
          {lang.flag} {lang.label}
        </Link>
      ))}
    </div>
  );
}
