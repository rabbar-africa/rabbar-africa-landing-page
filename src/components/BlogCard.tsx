"use client";
import { Calendar, User, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallBack";
import Link from "next/link";
import { trackConfiguredEvent } from "@/lib/gtag";
import { ANALYTICS_EVENTS } from "@/lib/analytics-events";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
  slug: string;
  onClick?: () => void;
}

export default function BlogCard({
  title,
  excerpt,
  author,
  date,
  image,
  category,
  onClick,
  slug,
}: BlogCardProps) {
  const handleClick = () => {
    trackConfiguredEvent(ANALYTICS_EVENTS.ENGAGEMENT.BLOG_CARD_CLICK, {
      event_label: slug,
      blog_title: title,
      blog_category: category,
    });
    onClick?.();
  };

  return (
    <article
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 384px"
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#E8F34F] text-[#0D2847] px-4 py-1 rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl mb-3 text-[#0D2847] group-hover:font-medium transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
        </div>

        <Link href={`/${slug}`} className="cursor-pointer">
          <button className="text-[#0D2847] cursor-pointer  flex items-center gap-2 transition-colors">
            Read More
            <ArrowRight size={18} />
          </button>
        </Link>
      </div>
    </article>
  );
}
