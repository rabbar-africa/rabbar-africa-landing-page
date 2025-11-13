import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllBlogPosts } from "@/lib/blog-data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Clock, User, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Rabbar Africa - Auto Repair & Maintenance Insights",
  description:
    "Expert automobile insights, maintenance tips, and industry updates from Rabbar Africa. Stay informed about car care, repairs, and documentation in Nigeria.",
  keywords: [
    "auto repair blog",
    "car maintenance tips",
    "Nigeria automobile",
    "vehicle care",
    "car documentation",
  ],
};

export default function BlogsPage() {
  const allPosts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="flex items-center mb-6">
            <Button variant="ghost" asChild className="mr-4">
              <Link href="/" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Rabbar Africa Blog
            </h1>
            <p className="text-xl text-gray-600">
              Expert insights on automobile maintenance, repair, documentation,
              and industry trends. Keep your vehicle running smoothly with
              advice from Nigeria&apos;s trusted auto professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <Card
                key={post.id}
                className="hover:shadow-xl transition-all duration-300 bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
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
                  <CardTitle className="text-xl leading-tight">
                    <Link
                      href={`/${post.slug}`}
                      className="hover:text-blue-600 transition-colors line-clamp-2"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      <span className="line-clamp-1">{post.author}</span>
                    </div>
                    <Link
                      href={`/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                    >
                      Read more →
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-xs text-gray-400 mt-3">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Need Professional Auto Services?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Don&apos;t just read about it - get expert automobile services from
            Rabbar Africa. From routine maintenance to complex repairs,
            we&apos;ve got you covered.
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
              Get Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
