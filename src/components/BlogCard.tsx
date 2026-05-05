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
      className={`flex flex-col w-[680px] h-[600px]   md:p-12 min-h-[350px] ${
        !isLast ? 'border-b md:border-b-0 md:border-r  border-zinc-800' : ''
      }`}
    >
      <div className="grid gap-6">
        <div className="mb-8">
          <span className="bg-black
            border w-[152] h-[18px] 
            text-white text-[12px] uppercase tracking-widest p-2">
            {category}
          </span>
        </div>

        <div className="grid gap-4">
          <div className=" grid gap-2">
            <h3 className="text-white text-xl md:text-2xl font-regular leading-tight mb-4 uppercase">
              {title}
            </h3>

            <p className="text-white font-regular text-sm md:text-base leading-relaxed mb-10 line-clamp-3">
              {excerpt}
            </p>
         </div>

          <span className='text-regular w-[600px] h-[24px] text-white'>
              {date}
          </span>
      </div>
    </div>

      


      <div className="mt-auto flex justify-end ">
       
        
        <button className="flex items-center  gap-2  ">
          <span className="text-[#D9E954] text-xs md:text-sm font-regular underline">
            Read blog
          </span>
          
          <div className=" flex gap-0 items-center justify-center">
            
            <Image 
              src={Readicon} 
              alt="Read blog icon" 
              width={16} 
              height={16}
              
    

              
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;