import { Menu } from 'lucide-react';
import BlogCard from '../BlogCard';

const blogPosts = [
  { id: 1, title: "TRUCK LICENSES", excerpt: "Many Lagos drivers...", date: "Dec 17, 2025", img: "/bloglist1.svg" },
  { id: 2, title: "ENGINE TIPS", excerpt: "Keep your engine...", date: "Dec 18, 2025", img: "/bloglist2.svg" },
  { id: 3, title: "TIRE SAFETY", excerpt: "Check your pressure...", date: "Dec 19, 2025", img: "/bloglist3.svg" },
  { id: 4, title: "BRAKE CARE", excerpt: "Stay safe on roads...", date: "Dec 20, 2025", img: "/bloglist4.svg" },
  { id: 5, title: "FUEL ECONOMY", excerpt: "Save more money...", date: "Dec 21, 2025", img: "/bloglist5.svg" },
  { id: 6, title: "DOCUMENTATION", excerpt: "Avoid legal issues...", date: "Dec 22, 2025", img: "/bloglist6.svg" },
  { id: 7, title: "AC REPAIR", excerpt: "Beat the heat...", date: "Dec 23, 2025", img: "/bloglist7.svg" },
  { id: 8, title: "NIGHT DRIVING", excerpt: "Safety tips for night...", date: "Dec 24, 2025", img: "/bloglist8.svg" },
  { id: 9, title: "EMERGENCY KITS", excerpt: "What to keep inside...", date: "Dec 25, 2025", img: "/bloglist9.svg" },
];

export default function BlogPage() {
  return (
    
    <main className="min-h-screen bg-white">
      <header className="px-4 md:px-[160px] py-[160px] flex flex-col gap-6">
        
      </header>

      <section className="bg-[#000000] px-4 py-[120px] md:px-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1440px] mx-auto">
          {blogPosts.map((post) => (
            <BlogCard 
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              imageSrc={post.img} 
            />
            
          ))}
        </div>
      </section>
    </main>
  );
}
