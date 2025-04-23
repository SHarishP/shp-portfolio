import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";
import { DarkModeProvider, useDarkMode } from "../utility/darkModeContext";
import LogoMail from "./footer/logoMail";

const Footer = () => {
  return (
    <div className="mt-20">
      <DarkModeProvider>
        <LogoMail />
      </DarkModeProvider>

      <div className="font-outfit text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Setiawan Harish P. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/SHarishP?tab=repositories"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/setiawan-harish-bb77b923b/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
