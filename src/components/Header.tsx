import { Logo } from '@/components/Logo';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Logo 
            isLink={true} 
            width={150} 
            height={50}
            priority={true}
          />
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/blogs" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link 
              href="#services" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Services
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}