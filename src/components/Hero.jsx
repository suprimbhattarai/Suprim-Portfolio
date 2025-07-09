import React from "react";
import logo from "../assets/suprimlogo.png";
import { motion } from "framer-motion";
import bgimg from "../assets/bgone.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen py-44 font-bold text-gray-800 flex flex-col md:flex-row items-center justify-between px-9 sm:px-20 md:px-14 relative overflow-hidden bg-cover bg-center"
    >
      {/* Left Side */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col md:px-20 sm:px-18 justify-center items-center md:items-start space-y-6 z-10 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          HI,
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg max-w-md sm:max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          I'm <span className="font-semibold">Suprim Bhattarai</span> — wanna be
          IT Professional, trying to be my name.
        </motion.p>
        <motion.a
          href="https://drive.google.com/file/d/156A3BHOxGn57Ox1TTvK_22ue4nPW0GJI/view?usp=sharing"
          target="_blank"
          className="inline-block px-6 py-2 hover:text-black border-2 border-black rounded-full font-semibold hover:bg-transparent bg-black text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          MY RESUME →
        </motion.a>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center relative mt-4 md:mt-0 sm:mt-0 "
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.img
          src={logo}
          alt="Suprim Logo"
          className="relative  z-10 cursor-pointer w-60 sm:w-72 md:w-80 opacity-75 transition-transform duration-500 hover:scale-110"
          whileHover={{ scale: 1.1, rotate: 1, duration: 0.1 }}
        />
      </motion.div>

      {/* Scroll Down */}
      <div className="hidden sm:block absolute right-2 bottom-15 text-xs tracking-widest rotate-90 font-bold text-black z-20">
        SCROLL DOWN →
      </div>
    </section>
  );
};

export default Hero;
