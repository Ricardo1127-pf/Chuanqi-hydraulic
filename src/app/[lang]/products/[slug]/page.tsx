import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import { type Lang, t } from "@/lib/i18n";
import { getProductBySlug, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import InquiryForm from "@/components/InquiryForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  const l = (lang === "zh" || lang === "en" ? lang : "en") as Lang;

  const keywordsEn = [
    product.name.en,
    product.category,
    "radial piston hydraulic motor",
    "low speed high torque motor",
    "Hägglunds replacement",
    "China hydraulic motor manufacturer",
    "ChuanQi Hydraulic",
  ];

  const keywordsZh = [
    product.name.zh,
    product.category,
    "径向柱塞液压马达",
    "低速大扭矩马达",
    "赫格隆替代",
    "液压马达厂家",
    "传祺液压",
  ];

  return {
    title: `${product.name[l]} | ChuanQi Hydraulic`,
    description: product.description[l],
    keywords: l === "zh" ? keywordsZh : keywordsEn,
    openGraph: {
      title: product.name[l],
      description: product.description[l],
      images: [{ url: product.images[0], width: 800, height: 600, alt: product.name[l] }],
      type: "website",
      locale: l === "zh" ? "zh_CN" : "en_US",
    },
    alternates: {
      canonical: `/${l}/products/${product.slug}`,
      languages: {
        en: `/en/products/${product.slug}`,
        zh: `/zh/products/${product.slug}`,
      },
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const l = (lang === "zh" || lang === "en" ? lang : "en") as Lang;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(product.category).filter(
    (p) => p.slug !== product.slug
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name[l],
    description: product.description[l],
    image: product.images[0],
    category: product.category,
    manufacturer: {
      "@type": "Organization",
      name: l === "zh" ? "宁波传祺液压有限公司" : "ChuanQi Hydraulic",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <>
      <Script
        id="product-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href={`/${l}`} className="hover:text-primary transition-colors">
          {t(l, "nav.home") as string}
        </Link>
        <span>/</span>
        <Link href={`/${l}/products`} className="hover:text-primary transition-colors">
          {t(l, "nav.products") as string}
        </Link>
        <span>/</span>
        <span className="text-gray-900">{product.name[l]}</span>
      </nav>

      {/* Product Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Image */}
        <div className="bg-gray-100 rounded-xl overflow-hidden">
          <img
            src={product.images[0] || "/images/product-placeholder.svg"}
            alt={product.name[l]}
            className="w-full h-full object-contain p-8"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {product.name[l]}
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            {product.description[l]}
          </p>

          {/* Features */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              {t(l, "products.features") as string}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(product.features[l] as string[]).map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href={`/${l}/contact`}
              className="inline-flex items-center px-6 py-3 bg-accent text-gray-900 font-semibold rounded-lg hover:bg-amber-500 transition-colors"
            >
              {t(l, "products.inquiry") as string}
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Specs Table */}
      <div className="mb-16">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          {t(l, "products.specs") as string}
        </h2>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full">
            <tbody>
              {product.specs.map((spec, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-6 py-3 text-sm font-medium text-gray-700 w-1/3">
                    {spec.label[l]}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-900">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Inquiry Form Section */}
      <div className="bg-gray-50 rounded-xl p-6 sm:p-8 mb-16">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          {t(l, "contact.formTitle") as string}
        </h2>
        <InquiryForm lang={l} defaultProduct={product.name[l]} />
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {t(l, "products.relatedProducts") as string}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.slice(0, 4).map((p) => (
              <ProductCard key={p.slug} product={p} lang={l} />
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
}
