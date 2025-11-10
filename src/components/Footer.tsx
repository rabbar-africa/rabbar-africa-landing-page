import { Logo } from '@/components/Logo';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <Logo 
              width={180} 
              height={60}
              className="mb-4"
              alt="Rabbar Africa - Premier Automobile Services"
            />
            <p className="text-gray-300 mb-4">
              Your trusted partner for professional automobile services across Nigeria. 
              Expert repairs, maintenance, documentation, and insurance services.
            </p>
            <div className="text-sm text-gray-400">
              <p>📍 Lagos, Nigeria</p>
              <p>📞 +234 XXX XXXX XXX</p>
              <p>✉️ info@rabbarafrica.com</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white transition-colors">Auto Repair</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Maintenance</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Insurance</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/blogs" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Rabbar Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}