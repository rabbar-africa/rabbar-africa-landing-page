import React from 'react';
import BlogCard from '../BlogCard';


const BLOG_DATA = [
  {
    id: 1,
    category: 'Driver Documentation',
    title: 'Are you driving a truck with a bicycle license?',
    excerpt: 'Many Lagos drivers unknowingly break the law by using a Class B license for commercial activities or driving with an expired license...',
    date: 'December 17, 2025',
  },
  {
    id: 2,
    category: 'Driver Documentation',
    title: 'The Medical Report: Why Roadworthiness Scares...',
    excerpt: 'Many Lagos drivers fear LACVIS because the inspection is strict and the machine does not lie. Fake papers cannot save you anymore...',
    date: 'December 17, 2025',
  }
];

const BlogSection = () => {
  return (
    <section className="w-full bg-black flex justify-center py-16">
      <div className="w-full max-w-[390px] md:max-w-[1440px] px-6 md:px-20">
        
        <div className="mb-10">
          <h2 className="text-white text-3xl md:text-4xl font-bold uppercase mb-4">
            Latest From Our Blog
          </h2>
          <p className="text-zinc-400 text-sm md:text-lg max-2xl">
            Stay informed with automotive news, tips, and insights from our experts.
          </p>
        </div>

        <div className="bg-[#161616] grid grid-cols-1 md:grid-cols-2 gap-10  pt-10">
          {BLOG_DATA.map((post, index) => (
            <BlogCard 
              key={post.id}
              category={post.category}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              isLast={index === BLOG_DATA.length - 1}
             
            />
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button className="bg-[#D9E954] text-black font-bold py-4 px-10 hover:bg-[#c4d44b] transition-colors">
            Read all blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;