import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Clock } from "lucide-react";

interface RelatedPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: number;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="py-16 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Related Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((relatedPost) => (
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
                    className="transition-colors"
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
                  className="font-medium text-sm"
                >
                  Read article →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
