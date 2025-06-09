import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/myPhoto3.png";
import ScrollTopButton from "./ScrollTopButton";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#99b4c8] px-6 py-16 flex items-center overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-24 max-w-6xl mx-auto items-center w-full">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            Born and raised in <strong>Biratnagar, Nepal</strong>, currently
            living in <strong>Kathmandu</strong>, pursuing an undergraduate
            degree in <strong>Computer Science</strong> under{" "}
            <strong>Tribhuvan University</strong>.
          </p>
        </motion.div>

        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "linear" }}
          className="w-full flex justify-center"
        >
          <img
            src={myPhoto}
            alt="Suprim Bhattarai"
            className=" object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </div>

    </section>
  );
};

export default About;
