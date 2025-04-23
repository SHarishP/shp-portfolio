import Image from "next/image";
import React from "react";
import { useDarkMode } from "../../utility/darkModeContext";
import { infoList } from "../../assets/assets";
import { motion } from "motion/react";

const InfoList = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
      {infoList.map(({ icon, iconDark, title, description }, index) => (
        <motion.li
          whileHover={{ scale: 1.05 }}
          key={index}
          className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
        >
          <Image
            src={isDarkMode ? iconDark : icon}
            alt={title}
            className="w-7 mt-3"
          />
          <h3 className="my-4 font-semibold text-gray-700 font-outfit dark:text-white">
            {title}
          </h3>
          <p className="text-grau-600 text-sm font-outfit dark:text-white/80">
            {description}
          </p>
        </motion.li>
      ))}
    </div>
  );
};

export default InfoList;
