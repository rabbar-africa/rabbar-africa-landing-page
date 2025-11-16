import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogList } from "@/components/blog";
import { getPaginatedBlogPosts } from "@/lib/sanity-blog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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

export default async function BlogsPage() {
  const { posts, total, hasMore } = await getPaginatedBlogPosts(1, 9);

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

      {/* Blog Posts with Pagination */}
      <BlogList initialPosts={posts} initialHasMore={hasMore} total={total} />

      <Footer />
    </div>
  );
}
