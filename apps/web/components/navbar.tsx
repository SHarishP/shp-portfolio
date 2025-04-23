"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { assets, navMenu } from "../assets/assets";
import { motion } from "motion/react";
import { useDarkMode } from "../utility/darkModeContext";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:border-b-2 dark:border-white/20" : ""}`}
      >
        <a href="#top">
          <Image
            alt="logo"
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}`}
        >
          {navMenu.map((data, index) => (
            <motion.li key={index} whileHover={{ scale: 1.05 }}>
              <a href={data.href} className="font-ovo">
                {data.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-4 ">
          <button onClick={toggleDarkMode} className="cursor-pointer">
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border boder-gray-500 rounded-full ml-4 font-ovo dark:border-white/50"
          >
            Contact{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="arrow"
            />
          </a>

          <button
            className="block md:hidden ml-3 cursor-pointer"
            onClick={openMenu}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-lightHover transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          {navMenu.map((data, index) => (
            <motion.li whileHover={{ scale: 1.05 }} key={index}>
              <a href={data.href} onClick={closeMenu}>
                {data.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
