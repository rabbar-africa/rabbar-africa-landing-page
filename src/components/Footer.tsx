import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#001f3f] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
      
        <div className="flex flex-col items-center md:items-start mb-16 text-center md:text-left">
          
  
          <div className="relative w-full h-[100px] sm:h-[120px] md:h-[160px] mb-6">
            <Image 
              src="/Rabbar-logo.svg"
              alt="Rabbar logo"
              fill
              className="object-cover"
              priority
            />
          </div>

          
          <p className="text-gray-300 text-sm leading-relaxed max-h-74">
            Your trusted partner for premium automobiles and exceptional
            service across Africa.
          </p>
        </div>

    
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 gap-6 md:gap-0">
          
          
          <div className="flex gap-4 items-center">
            <a 
              href="https://www.facebook.com/share/1AHGfHjCxz/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#c4e538] p-2 rounded-full text-[#001f3f] hover:scale-110 transition-transform"
            >
              <Facebook size={20} fill="currentColor" />
            </a>

            <a 
              href="https://www.instagram.com/rabbar.africa?igsh=c2F5azMzem0zcmJz&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#c4e538] p-2 rounded-full text-[#001f3f] hover:scale-110 transition-transform"
            >
              <Instagram size={20} />
            </a>

            <a 
              href="https://www.tiktok.com/@rabbar.africa?_r=1&_t=ZS-91szIfwso1o"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#c4e538] p-2 rounded-full text-[#001f3f] hover:scale-110 transition-transform"
            >
              <FaTiktok size={20} />
            </a>
          </div>

        
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
            {["HOME", "SERVICES", "ABOUT US", "BLOG", "CONTACT"].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase().replace(" ", "")}`}
                className="text-gray-300 hover:text-white text-sm md:text-base font-bold tracking-widest transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}