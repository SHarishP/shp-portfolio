import Image from "next/image";
import React from "react";
import { assets } from "../../assets/assets";
import { useDarkMode } from "../../utility/darkModeContext";

interface IThemeContactBtn {
  openMenu: () => void;
}

const ThemeContactBtn = ({ openMenu }: IThemeContactBtn) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
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
    </>
  );
};

export default ThemeContactBtn;
