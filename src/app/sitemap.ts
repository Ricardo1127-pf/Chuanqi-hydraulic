import { products } from "@/data/products";
import type { MetadataRoute } from "next";

const BASE_URL = "https://chuanqipower.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const langs = ["zh", "en"];

  // Static pages
  const staticPages = ["", "/products", "/about", "/contact"];

  const staticEntries: MetadataRoute.Sitemap = [];
  for (const lang of langs) {
    for (const page of staticPages) {
      staticEntries.push({
        url: `${BASE_URL}/${lang}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "daily" : "weekly",
        priority: page === "" ? 1 : 0.8,
      });
    }
  }

  // Product pages
  const productEntries: MetadataRoute.Sitemap = [];
  for (const lang of langs) {
    for (const product of products) {
      productEntries.push({
        url: `${BASE_URL}/${lang}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      });
    }
  }

  return [...staticEntries, ...productEntries];
}
