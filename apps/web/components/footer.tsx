import Image from "next/image";
import { useDarkMode } from "../utility/darkModeContext";
import { assets } from "../assets/assets";

const Footer = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="mt-20">
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
