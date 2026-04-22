// import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
// import { FaTiktok } from "react-icons/fa";
import tikTokIcon from "@/assets/icons/tik-tok.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import Image from "next/image";
import PageContainer from "./elements/PageContainer";
import footerImage from "@/assets/images/footer-logo.svg";
export function Footer() {
  return (
    <footer className="bg-[#001f3f] text-white lg:h-218 pt-26 pb-26 lg:pb-0 lg:pt-50">
      <PageContainer>
        <div className="relative w-full h-16 lg:h-60">
          <Image
            src={footerImage}
            alt="Rabbar logo"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-20 lg:w-97.25">
          <p className="text-white">
            Your trusted partner for premium automobiles and exceptional service
            across Africa.
          </p>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-20 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          {/* social icons */}
          <div className="flex gap-9 items-center">
            <a
              href="https://www.facebook.com/share/1AHGfHjCxz/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:scale-110 transition-transform"
            >
              <Image src={facebookIcon} alt="Facebook" width={40} height={40} />
            </a>

            <a
              href="https://www.instagram.com/rabbar.africa?igsh=c2F5azMzem0zcmJz&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src={instagramIcon}
                alt="Instagram"
                width={40}
                height={40}
              />
            </a>

            <a
              href="https://www.tiktok.com/@rabbar.africa?_r=1&_t=ZS-91szIfwso1o"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image src={tikTokIcon} alt="TikTok" width={40} height={40} />
            </a>
          </div>

          {/* nav links */}
          <nav className="flex flex-col gap-10 lg:flex-row lg:flex-wrap lg:justify-center">
            {["HOME", "SERVICES", "ABOUT US", "BLOG", "CONTACT"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "")}`}
                // className="text-gray-300 hover:text-white text-sm md:text-base font-bold tracking-widest transition-colors"
              >
                <p className="text-white">{item}</p>
              </Link>
            ))}
          </nav>
        </div>
      </PageContainer>
    </footer>
  );
}
