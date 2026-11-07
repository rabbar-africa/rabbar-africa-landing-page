import { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/lib/blog-data";
import { SIDE_PRODUCTS } from "@/data/products";
import { FEATURE_PAGES } from "@/data/feature-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rabbar.africa";
  const blogSlugs = getAllBlogSlugs();

  // Static routes — product slugs come from the product constants.
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    // The homepage is the platform; the side services have their own pages.
    ...SIDE_PRODUCTS.map((product) => ({
      url: `${baseUrl}${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    // The feature pages: each ranks for its own selling point. /jobcard is the
    // URL ChatGPT and Google already rank first for "job card".
    ...FEATURE_PAGES.map((page) => ({
      url: `${baseUrl}${page.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vehicle-documentation`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...["/privacy", "/terms", "/data-processing"].map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];

  // Blog post routes
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
