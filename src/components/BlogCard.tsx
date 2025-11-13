import { Calendar, User, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallBack";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
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
}: BlogCardProps) {
  return (
    <article
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          fill
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

        <button className="text-[#0D2847]   flex items-center gap-2 transition-colors">
          Read More
          <ArrowRight size={18} />
        </button>
      </div>
    </article>
  );
}
