import { Logo } from "@/components/Logo";

import PageContainer from "./elements/PageContainer";
import { MenuIcon } from "./icons";

export function Header() {
  return (
    <header className="bg-white pt-10 " role="banner">
      <PageContainer>
        <nav className="flex justify-between items-center">
          <Logo isLink />
          <div
            // type="button"
            aria-label="Open menu"
            className="flex items-center gap-2 text-xl text-[#2F2F2F] transition-opacity hover:opacity-80"
          >
            <span>MENU</span>
            <MenuIcon className="cursor-pointer" />
          </div>
        </nav>
      </PageContainer>
    </header>
  );
}
