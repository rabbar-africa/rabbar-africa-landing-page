import React from 'react';
import Image from 'next/image';
import Readicon from '@/assets/icons/Readicon.svg';

interface BlogCardProps {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  isLast?: boolean;
}

const BlogCard = ({ category, title, excerpt, date, isLast }: BlogCardProps) => {
  return (
    <div 
      className={`flex flex-col p-6 md:p-12 min-h-[350px] ${
        !isLast ? 'border-b md:border-b-0 md:border-r border-zinc-800' : ''
      }`}
    >
      <div className="mb-8">
        <span className="bg-black border border-zinc-800 text-zinc-400 text-[10px] uppercase tracking-widest px-3 py-1">
          {category}
        </span>
      </div>

      <h3 className="text-white text-xl md:text-2xl font-bold leading-tight mb-4 uppercase">
        {title}
      </h3>

      <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 line-clamp-3">
        {excerpt}
      </p>

      <div className="mt-auto flex justify-between items-center">
        <span className="text-zinc-500 text-xs md:text-sm font-medium">
          {date}
        </span>
        
        <button className="flex items-center gap-2 group">
          <span className="text-[#D9E954] text-xs md:text-sm font-bold group-hover:underline">
            Read blog
          </span>
          
          <div className="bg-[#D9E954] p-1 w-6 h-6 flex items-center justify-center">
            
            <Image 
              src={Readicon} 
              alt="Read blog icon" 
              width={16} 
              height={16} 
              className="brightness-0"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;