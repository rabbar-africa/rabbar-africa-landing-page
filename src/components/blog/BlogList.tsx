"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readingTime: number;
}

interface BlogListProps {
  initialPosts: BlogPost[];
  initialHasMore: boolean;
  total: number;
}

export function BlogList({
  initialPosts,
  initialHasMore,
  total,
}: BlogListProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const loadMore = async () => {
    setLoading(true);
    try {
      const nextPage = currentPage + 1;
      const response = await fetch(`/api/blogs?page=${nextPage}&pageSize=9`);
      const data = await response.json();

      setPosts((prevPosts) => [...prevPosts, ...data.posts]);
      setHasMore(data.hasMore);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error("Failed to load more posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                author={post.author}
                date={post.date}
                image={post.image}
                category={post.category}
                slug={post.slug}
              />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-12 text-center">
              <Button
                onClick={loadMore}
                disabled={loading}
                size="lg"
                className="bg-[#0D2847] hover:bg-[#0D2847]/90 text-white px-8 py-6"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>Read More Articles</>
                )}
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Showing {posts.length} of {total} articles
              </p>
            </div>
          )}

          {/* No More Posts Message */}
          {!hasMore && posts.length > 0 && (
            <div className="mt-12 text-center">
              <p className="text-gray-600">
                You&apos;ve reached the end of our blog posts
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Total: {total} articles
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
