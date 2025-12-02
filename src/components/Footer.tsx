import {
  Facebook,
  Instagram,
  // Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D2847] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            {/* <h3 className="text-[#E8F34F] text-xl mb-4">RABBAR AFRICA</h3>
             */}

            <div className="mb-4">
              <Logo color="white" />
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for premium automobiles and exceptional
              service across Africa.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1AHGfHjCxz/?mibextid=wwXIfr"
                className="w-10 h-10 bg-[#0A1E3A] rounded-full flex items-center justify-center hover:bg-[#E8F34F] hover:text-[#0D2847] transition-colors"
              >
                <Facebook size={20} />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 bg-[#0A1E3A] rounded-full flex items-center justify-center hover:bg-[#E8F34F] hover:text-[#0D2847] transition-colors"
              >
                <Twitter size={20} />
              </a> */}
              <a
                href="https://www.instagram.com/rabbar.africa?igsh=c2F5azMzem0zcmJz&utm_source=qr"
                className="w-10 h-10 bg-[#0A1E3A] rounded-full flex items-center justify-center hover:bg-[#E8F34F] hover:text-[#0D2847] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@rabbar.africa?_r=1&_t=ZS-91szIfwso1o"
                className="w-10 h-10 bg-[#0A1E3A] rounded-full flex items-center justify-center hover:bg-[#E8F34F] hover:text-[#0D2847] transition-colors"
              >
                <FaTiktok size={20} />
              </a>
              {/* <a
                href=""
                className="w-10 h-10 bg-[#0A1E3A] rounded-full flex items-center justify-center hover:bg-[#E8F34F] hover:text-[#0D2847] transition-colors"
              >
                <Linkedin size={20} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#E8F34F] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="hover:text-[#E8F34F] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#E8F34F] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#E8F34F] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:text-[#E8F34F] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#E8F34F] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#E8F34F] mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#E8F34F] transition-colors">
                  Vehicle Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E8F34F] transition-colors">
                  Car Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E8F34F] transition-colors">
                  Car Revamping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E8F34F] transition-colors">
                  Dealership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E8F34F] transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#E8F34F] mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="shrink-0 mt-1" />
                <div>
                  <p>+234 916 000 2836</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="shrink-0 mt-1" />
                <div>
                  <p>contact.rabbar@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-1" />
                <div>
                  <p>40 Akinwunmi street, Alagomeji, Yaba, Lagos, Nigeria .</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1a3a5e] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Rabbar Africa. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-[#E8F34F] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#E8F34F] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#E8F34F] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
