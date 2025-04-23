import Image from "next/image";
import React from "react";
import { useDarkMode } from "../../utility/darkModeContext";
import { assets } from "../../assets/assets";

const NavLogo = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <Image
        alt="logo"
        src={isDarkMode ? assets.logo_dark : assets.logo}
        className="w-28 cursor-pointer mr-14"
      />
    </>
  );
};

export default NavLogo;
