import React from "react";
import { useDarkMode } from "../../utility/darkModeContext";
import Image from "next/image";
import { assets } from "../../assets/assets";

const LogoMail = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="text-center ">
      <Image
        src={isDarkMode ? assets.logo_dark : assets.logo}
        alt=""
        className="w-36 mx-auto mb-2"
      />

      <div className="w-max flex items-center gap-2 mx-auto font-outfit">
        <Image
          src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
          alt=""
          className="w-6"
        />
        setiawanharish85@gmail.com
      </div>
    </div>
  );
};

export default LogoMail;
