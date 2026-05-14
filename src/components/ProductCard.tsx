import Link from "next/link";
import type { Product } from "@/types/product";
import type { Lang } from "@/lib/i18n";

export default function ProductCard({
  product,
  lang,
}: {
  product: Product;
  lang: Lang;
}) {
  return (
    <Link
      href={`/${lang}/products/${product.slug}`}
      className="group block bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
    >
      <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
        <img
          src={product.images[0] || "/images/product-placeholder.svg"}
          alt={product.name[lang]}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
          {product.name[lang]}
        </h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
          {product.description[lang]}
        </p>
        <div className="mt-3 flex items-center text-sm text-primary font-medium">
          <span>{lang === "zh" ? "查看详情" : "View Details"}</span>
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
