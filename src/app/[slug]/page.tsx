import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getBlogPostBySlug,
  getRelatedPosts,
  getAllBlogSlugs,
} from "@/lib/sanity-blog";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArticleHeader,
  ArticleContent,
  RelatedPosts,
  ServiceCTA,
} from "@/components/blog";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug: string) => ({
    slug: slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Rabbar Africa",
    };
  }

  return {
    title: `${post.title} | Rabbar Africa Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Article Header */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <ArticleHeader post={post} />
          <ArticleContent content={post.content} />
        </div>
      </article>

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />

      {/* Service CTAs */}
      <ServiceCTA />

      <Footer />
    </div>
  );
}

// Enable dynamic rendering for Next.js 15 compatibility
export const dynamic = "force-dynamic";
export const revalidate = 60; // Revalidate every 60 seconds
