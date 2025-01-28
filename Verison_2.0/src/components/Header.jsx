import { useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import Button from "./Button";

const Header = () => {
  const { pathname } = useLocation();
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
        <a className="block xl:mr-8 group relative">
          <span className="text-3xl font-bold tracking-wide uppercase 
            bg-gradient-to-r from-yellow-400 via-golden to-yellow-500 
            bg-clip-text text-transparent
            transition-all duration-300
            group-hover:scale-105 group-hover:drop-shadow-glow">
            Iron Wok
          </span>
          {/* Optional animated underline */}
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-golden 
            transition-all duration-300 group-hover:w-full"></div>
        </a>
        <nav className={`${openNavigation ? "flex" : "hidden"} fixed inset-0 lg:static lg:flex lg:mx-auto lg:bg-transparent lg:justify-center transition-transform duration-300 ease-out ${openNavigation ? "translate-x-0" : "translate-x-full lg:translate-x-0"}`}>
          <HamburgerMenu onClick={handleClick} />
          <div className="relative z-10 flex flex-col items-center justify-center lg:flex-row lg:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase py-4 lg:py-2 transition-all
                  bg-gradient-to-r from-yellow-400 via-golden to-yellow-500 
                  bg-clip-text text-transparent bg-[length:200%_100%]
                  hover:bg-right lg:text-sm lg:font-semibold
                  ${item.url === pathname.hash ? "animate-golden-pulse" : "opacity-50 hover:opacity-100"}
                  ${item.onlyMobile ? "lg:hidden" : ""}
                  px-6 lg:px-4`}>
                {item.title}
                <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-golden transform -translate-x-1/2 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
        </nav>
        <div className="hidden lg:block w-[12rem]"></div> {/* Placeholder for the removed button  feature update the button becomes a language changer*/}
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
};

export default Header;