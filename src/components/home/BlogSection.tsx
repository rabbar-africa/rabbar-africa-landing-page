import BlogCard from "../BlogCard";
import { getPaginatedBlogPosts, BlogPost } from "@/lib/sanity-blog";
import Link from "next/link";

export async function BlogSection() {
  const { posts } = await getPaginatedBlogPosts(1, 6);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-[#0D2847]">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with automotive news, tips, and insights from our
            experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: BlogPost) => (
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

        <div className="text-center mt-12">
          <Link href="/blogs">
            <button className="bg-[#E8F34F] text-[#0D2847] px-8 py-4 rounded-lg hover:bg-[#d5e040] transition-colors">
              View All Articles
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
