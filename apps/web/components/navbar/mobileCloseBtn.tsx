import Image from "next/image";
import React from "react";
import { useDarkMode } from "../../utility/darkModeContext";
import { assets } from "../../assets/assets";

const MobileClose = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <Image
        src={isDarkMode ? assets.close_white : assets.close_black}
        alt=""
        className="w-5 cursor-pointer"
      />
    </>
  );
};

export default MobileClose;
