import React from "react";
import { serviceData } from "../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo "
      >
        I am a fullstack web developer from Jakarta, Indonesia with experience
        building user-driven applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover/50 dark:hover:shadow-white"
          >
            <Image
              src={icon}
              alt=""
              className="w-10 border-2 border-black bg-white dark:border-white rounded-lg p-1"
            />
            <h3 className="text-lg my-4 text-gray-700 font-outfit dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 font-outfit dark:text-white/80">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
