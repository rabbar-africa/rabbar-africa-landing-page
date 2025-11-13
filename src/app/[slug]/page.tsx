import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  getBlogPostBySlug,
  getRelatedPosts,
  getAllBlogSlugs,
} from "@/lib/blog-data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Clock, User, ArrowLeft, Calendar } from "lucide-react";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
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
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Rabbar Africa",
    };
  }

  return {
    title: post.seo?.metaTitle || `${post.title} | Rabbar Africa Blog`,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords || post.tags,
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
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Article Header */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <div className="flex items-center mb-6">
            <Button variant="ghost" asChild className="mr-4">
              <Link href="/blogs" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>

          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge
                variant="secondary"
                className={
                  post.category === "Maintenance"
                    ? "bg-blue-100 text-blue-700"
                    : post.category === "Repair"
                      ? "bg-red-100 text-red-700"
                      : post.category === "Documentation"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                }
              >
                {post.category}
              </Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {post.readingTime} min read
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-600">
                <User className="w-5 h-5 mr-2" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <Calendar className="w-5 h-5 mr-2" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  #{tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n")
                  .map((line) => {
                    // Handle headers
                    if (line.startsWith("# ")) {
                      return `<h1 class="text-3xl font-bold mt-8 mb-4 text-gray-900">${line.substring(
                        2,
                      )}</h1>`;
                    }
                    if (line.startsWith("## ")) {
                      return `<h2 class="text-2xl font-semibold mt-6 mb-3 text-gray-800">${line.substring(
                        3,
                      )}</h2>`;
                    }
                    if (line.startsWith("### ")) {
                      return `<h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">${line.substring(
                        4,
                      )}</h3>`;
                    }
                    // Handle bold text
                    if (line.includes("**")) {
                      line = line.replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong class="font-semibold text-gray-900">$1</strong>',
                      );
                    }
                    // Handle lists
                    if (line.match(/^- \*\*(.*?)\*\*:/)) {
                      return `<li class="mb-2"><strong class="font-semibold text-gray-900">${
                        line.match(/^- \*\*(.*?)\*\*:/)?.[1]
                      }</strong>: ${line.split(": ")[1] || ""}</li>`;
                    }
                    if (line.startsWith("- ")) {
                      return `<li class="mb-1">${line.substring(2)}</li>`;
                    }
                    if (line.match(/^\d+\. /)) {
                      return `<li class="mb-1">${line.substring(
                        line.indexOf(". ") + 2,
                      )}</li>`;
                    }
                    // Handle regular paragraphs
                    if (line.trim() && !line.startsWith("#")) {
                      return `<p class="mb-4">${line}</p>`;
                    }
                    return line === "" ? "<br>" : line;
                  })
                  .join(""),
              }}
            />
          </div>

          {/* CTA within article */}
          <div className="bg-blue-50 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Need Professional Auto Services?
            </h3>
            <p className="text-gray-600 mb-4">
              Put this knowledge to work with expert services from Rabbar
              Africa. Our certified technicians are ready to help with all your
              automobile needs.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Contact Us Today
            </Button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-8 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="hover:shadow-lg transition-shadow bg-white"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{relatedPost.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {relatedPost.readingTime} min read
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">
                      <Link
                        href={`/${relatedPost.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 line-clamp-2 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      href={`/${relatedPost.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Read article →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Service Your Vehicle?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Don&apos;t let car problems slow you down. Get expert automobile
            services from Rabbar Africa&apos;s certified technicians.
          </p>
          <div className="flex gap-4 items-center justify-center flex-wrap">
            <Button size="lg" variant="secondary">
              Schedule Service
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// This ensures the page is statically generated
export const dynamic = "force-static";
export const dynamicParams = false;
