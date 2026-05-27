import React from 'react';
import Image from 'next/image';
import Readicon from '@/assets/icons/Readicon.svg';

interface BlogCardProps {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  imageSrc: string; 
}

const BlogCard = ({ category, title, excerpt, date, imageSrc }: BlogCardProps) => {
  return (
    <div className="flex flex-col w-full border-b border-r border-zinc-800 p-8 h-full">
      
      
      <div className="relative w-full h-[240px] mb-6 overflow-hidden bg-zinc-900">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

     
      <div className="flex flex-col flex-grow gap-4">
        <span className="border border-white w-fit text-white text-[10px] uppercase tracking-widest px-2 py-1">
          {category}
        </span>
        <h3 className="text-white text-xl font-normal leading-tight uppercase">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <span className='text-gray-500 text-xs'>{date}</span>
      </div>

      
      <div className="mt-6 flex justify-end">
        <button className="flex items-center gap-2 group">
          <span className="text-[#D9E954] text-sm font-normal underline">
            Read blog
          </span>
          <div className="transition-transform duration-300 group-hover:translate-x-1">
            <Image src={Readicon} alt="Read icon" width={16} height={16} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;