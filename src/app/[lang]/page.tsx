import Link from "next/link";
import { type Lang, t } from "@/lib/i18n";
import { CATEGORIES } from "@/types/product";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = (lang === "zh" || lang === "en" ? lang : "en") as Lang;
  const featured = getFeaturedProducts();
  const advantages = t(l, "home.advantages") as { title: string; desc: string }[];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-blue-900 text-white min-h-[500px] flex items-center">
        {/* Hero background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/hero.jpeg')" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              {t(l, "home.heroTitle") as string}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-blue-100">
              {t(l, "home.heroSubtitle") as string}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/${l}/products`}
                className="inline-flex items-center px-6 py-3 bg-accent text-gray-900 font-semibold rounded-lg hover:bg-amber-500 transition-colors"
              >
                {t(l, "home.heroCta") as string}
              </Link>
              <Link
                href={`/${l}/contact`}
                className="inline-flex items-center px-6 py-3 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {t(l, "nav.contact") as string}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {t(l, "home.categoriesTitle") as string}
            </h2>
            <p className="mt-2 text-gray-500">
              {t(l, "home.categoriesSubtitle") as string}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.key}
                href={`/${l}/products?category=${cat.key}`}
                className="relative flex flex-col items-center justify-center p-6 h-32 rounded-xl hover:shadow-md border border-gray-100 hover:border-primary/30 transition-all group overflow-hidden"
                style={{
                  backgroundImage: `url('/images/${cat.key === 'hydraulic-motor' ? 'ca' : cat.key === 'hydraulic-pump' ? 'pump' : cat.key === 'hydraulic-valve' ? 'industrial-valve' : cat.key === 'hydraulic-cylinder' ? 'winch' : cat.key === 'parts' ? 'seal-kit' : 'product-placeholder'}.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-white/85 group-hover:bg-white/70 transition-colors" />
                <span className="relative text-sm font-semibold text-gray-800 group-hover:text-primary text-center z-10">
                  {cat.name[l]}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {t(l, "home.featuredTitle") as string}
            </h2>
            <p className="mt-2 text-gray-500">
              {t(l, "home.featuredSubtitle") as string}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} lang={l} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={`/${l}/products`}
              className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              {lang === "zh" ? "查看全部产品" : "View All Products"}
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {t(l, "home.advantagesTitle") as string}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className="p-6 text-center rounded-lg border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{adv.title}</h3>
                <p className="text-sm text-gray-500">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
