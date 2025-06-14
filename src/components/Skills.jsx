import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaGithub, FaDatabase, FaJs } from "react-icons/fa";
import {
  SiCplusplus,
  SiDjango,
  SiTailwindcss,
  SiPostman,
  SiMysql,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import heroImage from "../assets/skills3.png";

const iconStyle = "relative group text-5xl md:text-6xl cursor-pointer";

const skillsLeft = [
  { icon: <SiCplusplus color="#00599C" />, label: "C/C++" },
  { icon: <SiDjango color="#092e20" />, label: "Django REST Framework" },
  { icon: <TbApi color="#FF9900" />, label: "REST APIs" },
  { icon: <SiPostman color="#FF6C37" />, label: "Postman" },
  { icon: <SiMysql color="#00758F" />, label: "MySQL" },
];

const skillsRight = [
  { icon: <FaReact color="#61dafb" />, label: "React JS" },
  { icon: <SiTailwindcss color="#06b6d4" />, label: "Tailwind CSS" },
  { icon: <FaJs color="#f7df1e" />, label: "JavaScript" },
  { icon: <FaGithub color="#000" />, label: "Git & GitHub" },
  { icon: <FaDatabase color="#4DB33D" />, label: "Database" },
];

// Floating animation
const floatingVariant = {
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Skills = () => {
  // Track which icons are done animating using sets
  const [floatingIcons, setFloatingIcons] = useState(new Set());

  const handleComplete = (id) => {
    setFloatingIcons((prev) => new Set(prev).add(id));
  };

  return (
    <div className="min-h-screen bg-[#99b4c8] text-black py-20 relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-5xl md:text-6xl font-bold text-black text-center mb-16"
      >
        Skills
      </motion.h1>

      <div className="flex flex-col md:flex-row px-10 justify-between max-w-7xl mx-auto relative z-10 gap-0 md:gap-5">
        {/* LEFT SKILLS */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {skillsLeft.map((skill, index) => {
            const id = `left-${index}`;
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: -50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.4,
                }}
                viewport={{ once: true }}
                onAnimationComplete={() => handleComplete(id)}
                className={iconStyle}
              >
                <motion.div
                  animate={floatingIcons.has(id) ? "animate" : ""}
                  variants={floatingVariant}
                >
                  {skill.icon}
                </motion.div>
                <span className="absolute bottom-4 left-24 md:bottom-24 md:left-6  -translate-x-1/2 text-sm font-semibold text-center opacity-0 group-hover:opacity-100 transition duration-300">
                  {skill.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT SKILLS */}
        <div className="flex flex-col md:flex-row gap-10 items-end">
          {skillsRight.map((skill, index) => {
            const id = `right-${index}`;
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.4,
                }}
                viewport={{ once: true }}
                onAnimationComplete={() => handleComplete(id)}
                className={iconStyle}
              >
                <motion.div
                  animate={floatingIcons.has(id) ? "animate" : ""}
                  variants={{
                    animate: {
                      y: [0, 5, 0],
                      transition: {
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                      },
                    },
                  }}
                >
                  {skill.icon}
                </motion.div>
                <span className="absolute bottom-4 right-8 md:bottom-24 md:left-4 -translate-x-1/2 text-sm font-semibold text-center opacity-0 group-hover:opacity-100 transition duration-300">
                  {skill.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <img
        src={heroImage}
        alt="Skills Brain"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[580px] md:w-[750px] z-0 opacity-100"
      />
    </div>
  );
};

export default Skills;
