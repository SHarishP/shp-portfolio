"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { assets, navMenu } from "../assets/assets";
import { motion } from "motion/react";
import { DarkModeProvider } from "../utility/darkModeContext";
import NavLogo from "./navbar/navLogo";
import ThemeContactBtn from "./navbar/themeContactBtn";
import MobileClose from "./navbar/mobileCloseBtn";

const Navbar = () => {
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
      <DarkModeProvider>
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
          <Image src={assets.header_bg_color} alt="" className="w-full" />
        </div>

        <nav
          className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:border-b-2 dark:border-white/20" : ""}`}
        >
          <a href="#top">
            <NavLogo />
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

          <ThemeContactBtn openMenu={openMenu} />

          {/* Mobile menu */}
          <ul
            ref={sideMenuRef}
            className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-lightHover transition duration-500 dark:bg-darkHover dark:text-white"
          >
            <div className="absolute right-6 top-6" onClick={closeMenu}>
              <MobileClose />
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
      </DarkModeProvider>
    </>
  );
};

export default Navbar;
