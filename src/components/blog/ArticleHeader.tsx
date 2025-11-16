import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/ImageWithFallBack";
import Link from "next/link";
import { Clock, User, Calendar, ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/markdown-parser";

interface ArticleHeaderProps {
  post: {
    image?: string;
    title: string;
    category: string;
    readingTime: number;
    excerpt: string;
    author: string;
    publishedAt: string;
    tags: string[];
  };
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "Maintenance":
        return "bg-blue-100 text-blue-700";
      case "Repair":
        return "bg-red-100 text-red-700";
      case "Documentation":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <>
      <div className="flex items-center mb-6">
        <Button variant="ghost" asChild className="mr-4">
          <Link href="/blogs" className="flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Hero Image */}
      {post.image && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              fill
            />
            <div className="absolute top-6 left-6">
              <span className="bg-[#E8F34F] text-[#0D2847] px-4 py-2 rounded-full">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      )}

      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Badge
            variant="secondary"
            className={getCategoryBadgeClass(post.category)}
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
            <span>{formatDate(post.publishedAt)}</span>
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
    </>
  );
}
