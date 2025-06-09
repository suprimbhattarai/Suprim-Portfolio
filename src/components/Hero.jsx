import React from "react";
import logo from "../assets/suprimlogo1.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen py-52 bg-[#99b4c8] text-black flex flex-col md:flex-row items-center justify-between px-4 sm:px-20 md:px-18 relative overflow-hidden"
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
          IT Professional, trying to be a good human being.
        </motion.p>
        <motion.a
          href="https://drive.google.com/file/d/1lQwguTP3AGCqxSMtBCe61cjV-0ylb50o/view?usp=sharing"
          target="_blank"
          className="inline-block bg-black text-white py-3 px-6 rounded-full font-semibold hover:bg-opacity-80 transition duration-300"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          MY RESUME →
        </motion.a>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="absolute w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-white opacity-20 z-0" />
        <div className="absolute w-44 h-44 z-0 rotate-45">
          <div className="absolute bg-black h-[16px] w-full top-1/2 -translate-y-1/2" />
          <div className="absolute bg-black w-[16px] h-full left-1/2 -translate-x-1/2" />
        </div>
        <motion.img
          src={logo}
          alt="Suprim Logo"
          className="relative z-10 cursor-pointer w-60 sm:w-72 md:w-80 object-contain drop-shadow-xl transition-transform duration-500 hover:scale-110"
          whileHover={{ scale: 1.1, rotate: 1, duration: 0.1 }}
        />
      </motion.div>

      {/* Scroll Down */}
      <div className="hidden sm:block absolute right-2 bottom-8 text-xs tracking-widest rotate-90 font-bold text-black z-20">
        SCROLL DOWN
      </div>
    </section>
  );
};

export default Hero;
