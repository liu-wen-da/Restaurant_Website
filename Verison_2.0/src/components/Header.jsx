import { useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { ironwok } from "../assets";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import Button from "./Button";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 bg-black lg:bg-black/90 lg:backdrop-blur-sm ${
      openNavigation ? "bg-black" : "bg-black/90 backdrop-blur-sm"
    }`}>
      <div className="flex items-center justify-between px-5 lg:px-10 py-4">
        <a className="block w-[12rem] xl:mr-8">
          <img src={ironwok} width={190} height={40} alt="Iron Wok" />
        </a>
        <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-black lg:static lg:flex lg:mx-auto lg:bg-transparent lg:justify-center`}>
          <div className="relative z-2 flex flex-col items-center justify-center lg:flex-row lg:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-white transition-colors hover:text-golden ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:text-sm lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-white"
                    : "lg:text-white/50"
                } lg:leading-5 lg:hover:text-white xl:px-8`}>
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <div className="hidden lg:block w-[12rem]"></div> {/* Placeholder for the removed button */}
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
};

export default Header;