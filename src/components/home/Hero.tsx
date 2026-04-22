import PageContainer from "../elements/PageContainer";
import { MenuIcon } from "../icons";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
function MobileHero() {
  return (
    <div className="lg:hidden pb-20">
      <div className="flex items-center justify-between pt-4">
        <Logo isLink />
        <div
          aria-label="Open menu"
          className="flex items-center gap-2 text-xl text-[#2F2F2F] transition-opacity hover:opacity-80"
        >
          <span>MENU</span>
          <MenuIcon className="cursor-pointer" />
        </div>
      </div>
      <div className="mt-25 mb-20 ">
        <h1 className="mb-10 text-[32px] font-normal uppercase leading-8 tracking-[-1px] text-prim">
          Everything Your Car Needs, Delivered at a Higher Standard.
        </h1>

        <p className="text-xl font-normal leading-7.5 tracking-[0px]">
          We provide world-class automotive excellence, delivering premium
          vehicles and precision servicing you can rely on, wherever you are
          across Africa.
        </p>
      </div>
      <Button className="bg-secondary h-19.5 rounded-none text-xl py-0 w-full cursor-pointer">
        Explore our services
      </Button>{" "}
    </div>
  );
}
export function Hero() {
  return (
    <section id="hero" className="relative lg:min-h-screen bg-white">
      {/* <Header /> */}
      <PageContainer className="min-h-full">
        <div className=" min-h-screen grid-cols-1 py-8 lg:grid-cols-[66fr_34fr] hidden lg:grid">
          {/* Left column — 64%, 3 rows */}
          <div className="grid grid-rows-3   border-r border-[#DCDCDC]">
            <div>
              <Logo isLink />
            </div>
            <div className="">
              <h1 className="mb-10 text-5xl font-normal uppercase leading-none tracking-[-0.05em] text-prim">
                Everything Your Car Needs, Delivered at a Higher Standard.
              </h1>
              <p className="w-148.75 text-xl font-normal leading-normal">
                We provide world-class automotive excellence, delivering premium
                vehicles and precision servicing you can rely on, wherever you
                are across Africa.
              </p>
            </div>
            <div className=""></div>
          </div>

          {/* Right column — 36%, 2 rows */}
          <div className="grid grid-rows-2  ">
            <div className="border-b border-[#DCDCDC] flex justify-end  items-start">
              <div
                aria-label="Open menu"
                className="flex items-center gap-2 text-xl text-[#2F2F2F] transition-opacity hover:opacity-80"
              >
                <span>MENU</span>
                <MenuIcon className="cursor-pointer" />
              </div>
            </div>
            <div className="flex items-center bg-red pl-10">
              <Button className="bg-secondary h-19.5 rounded-none text-xl py-0 w-[83%] cursor-pointer">
                Explore our services
              </Button>
            </div>
          </div>
        </div>

        <MobileHero />
      </PageContainer>
    </section>
  );
}
