import Link from "next/link";
import type { Metadata } from "next";
import { type Lang, t } from "@/lib/i18n";
import { CATEGORIES } from "@/types/product";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = (lang === "zh" || lang === "en" ? lang : "en") as Lang;
  return {
    title: t(l, "products.title") as string,
    description: t(l, "products.subtitle") as string,
    alternates: {
      canonical: `/${l}/products`,
      languages: {
        en: "/en/products",
        zh: "/zh/products",
      },
    },
  };
}

export default async function ProductsPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { lang } = await params;
  const l = (lang === "zh" || lang === "en" ? lang : "en") as Lang;
  const { category: activeCategory } = await searchParams;

  const products = getProductsByCategory(activeCategory || undefined);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">
          {t(l, "products.title") as string}
        </h1>
        <p className="mt-2 text-gray-500">
          {t(l, "products.subtitle") as string}
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <Link
          href={`/${l}/products`}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !activeCategory
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {t(l, "products.allCategories") as string}
        </Link>
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.key}
            href={`/${l}/products?category=${cat.key}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat.key
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat.icon} {cat.name[l]}
          </Link>
        ))}
      </div>

      {/* Product Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} lang={l} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">{t(l, "products.noProducts") as string}</p>
          <Link
            href={`/${l}/products`}
            className="mt-4 inline-block text-primary hover:underline"
          >
            {t(l, "products.backToList") as string}
          </Link>
        </div>
      )}
    </div>
  );
}
