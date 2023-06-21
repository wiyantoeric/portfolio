import React, { Component } from "react";
import useBreakpoint from "use-breakpoint";
import { Link } from "react-scroll";

const breakpoints = { none: 0, sm: 640, lg: 1024 };

function Navbar() {
  const { breakpoint } = useBreakpoint(breakpoints, breakpoints.lg);

  return (
    <div className="px-12 items-center sm:px-20 py-8 bg-white w-full flex flex-row justify-center space-x-8">
      <div className="p-2">
        {/* Logo Chemy */}
        <svg width="21" height="53" viewBox="0 0 21 53" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.0170386 23.2721C0.157182 23.9021 0.431819 24.4913 0.82059 24.9959C6.02296 32.0752 11.1991 39.179 16.349 46.3071C16.817 46.9579 16.9869 47.8328 17.2892 48.6128V48.6516C16.494 48.8671 15.6987 49.2765 14.9034 49.2765C9.93302 49.2765 4.9626 49.2765 -0.0078125 49.2765V53.0086H14.3525C15.0508 53.0173 15.7491 52.9871 16.4443 52.9181C19.2277 52.6121 20.8969 50.8624 21.0005 48.6085C21.0174 47.5235 20.7511 46.4541 20.2301 45.5141C19.9092 44.9118 19.545 44.3356 19.1407 43.7903C14.2076 37.0457 9.24958 30.3226 4.34958 23.535C3.89203 22.8665 3.63675 22.0712 3.61645 21.2509C3.5626 14.6313 3.5833 8.01162 3.5833 1.39201V0H0.0170386V23.2721Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="flex flex-col text-center w-full items-end justify-end sm:flex-row gap-x-12 sm:gap-x-32 my-auto text-lg font-semibold">
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={1000}>
          <div className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-100 p-2">about</div>
        </Link>
        <Link activeClass="active" to="catalog" spy={true} smooth={true} offset={0} duration={1000}>
          <div className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-100 p-2">catalog</div>
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={1000}>
          <div className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-100 p-2">contact</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
