// components/Skills.jsx
// ─────────────────────────────────────────────────────────────────────────────
// ☀️ NOON — The sun is at its peak. Crisp azure sky, maximum clarity.
// Skills are displayed as glass-morphic icon cards floating in bright daylight.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaGithub, FaDatabase } from "react-icons/fa";
import {
  SiCplusplus,
  SiDjango,
  SiTailwindcss,
  SiPostman,
  SiMysql,
  SiAmazonwebservices,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { DiDotnet, DiNodejs } from "react-icons/di";
import ScrollTopButton from "./ScrollTopButton";

// ── Skill data ────────────────────────────────────────────────────────────────
const SKILLS = [
  {
    icon: <SiCplusplus />,
    label: "C / C++",
    color: "#00599C",
    category: "Systems",
  },
  {
    icon: <SiDjango />,
    label: "Django REST",
    color: "#16a34a",
    category: "Backend",
  },
  {
    icon: <TbApi />,
    label: "REST APIs",
    color: "#f97316",
    category: "Backend",
  },
  {
    icon: <SiPostman />,
    label: "Postman",
    color: "#FF6C37",
    category: "Tools",
  },
  { icon: <SiMysql />, label: "MySQL", color: "#00758F", category: "Database" },
  { icon: <DiDotnet />, label: ".NET", color: "#7c3aed", category: "Backend" },
  {
    icon: <FaReact />,
    label: "React JS",
    color: "#38bdf8",
    category: "Frontend",
  },
  {
    icon: <SiTailwindcss />,
    label: "Tailwind CSS",
    color: "#06b6d4",
    category: "Frontend",
  },
  {
    icon: <DiNodejs />,
    label: "Node.js",
    color: "#22c55e",
    category: "Backend",
  },
  {
    icon: <FaGithub />,
    label: "Git & GitHub",
    color: "#e2e8f0",
    category: "Tools",
  },
  {
    icon: <FaDatabase />,
    label: "Database",
    color: "#4ade80",
    category: "Database",
  },
  {
    icon: <SiAmazonwebservices />,
    label: "AWS",
    color: "#fb923c",
    category: "Cloud",
  },
];

function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r
    ? `${parseInt(r[1], 16)}, ${parseInt(r[2], 16)}, ${parseInt(r[3], 16)}`
    : "255,255,255";
}

// ── Single skill card ─────────────────────────────────────────────────────────
const SkillCard = ({ skill, index }) => {
  const [hovered, setHovered] = useState(false);
  const rgb = hexToRgb(skill.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-2.5 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="flex items-center justify-center rounded-2xl"
        style={{
          width: 72,
          height: 72,
          background: hovered ? `rgba(${rgb}, 0.22)` : "rgba(255,255,255,0.12)",
          border: hovered
            ? `1.5px solid rgba(${rgb}, 0.5)`
            : "1.5px solid rgba(255,255,255,0.25)",
          backdropFilter: "blur(12px)",
          boxShadow: hovered
            ? `0 8px 32px rgba(${rgb}, 0.45), inset 0 1px 0 rgba(255,255,255,0.2)`
            : "0 2px 8px rgba(0,0,0,0.1)",
        }}
        animate={{
          scale: hovered ? 1.12 : 1,
          y: hovered ? -4 : 0,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <span
          className="text-4xl md:text-[2.6rem]"
          style={{
            color: skill.color,
            filter: "brightness(1.15) saturate(1.2)",
          }}
        >
          {skill.icon}
        </span>
      </motion.div>

      <span
        className="text-xs font-semibold text-center leading-tight"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: hovered ? skill.color : "rgba(255,255,255,0.9)",
          textShadow: hovered ? `0 0 12px rgba(${rgb},0.5)` : "none",
          transition: "color 0.2s, text-shadow 0.2s",
          maxWidth: 80,
        }}
      >
        {skill.label}
      </span>

      {/* Category badge */}
      <motion.span
        className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: `rgba(${rgb}, 0.2)`,
          color: skill.color,
          border: `1px solid rgba(${rgb}, 0.35)`,
          opacity: hovered ? 1 : 0,
        }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
        transition={{ duration: 0.2 }}
      >
        {skill.category}
      </motion.span>
    </motion.div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center py-16 px-6 sm:px-12 relative overflow-hidden"
    >
      {/* Noon bright glare overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 55%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <motion.p
            className="text-xs tracking-[0.4em] uppercase font-semibold text-sky-300 mb-3 block"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              textShadow: "0 0 15px rgba(125,211,252,0.6)",
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ☀️ &nbsp;High Noon
          </motion.p>

          <h2
            className="text-5xl md:text-7xl font-black text-white"
            style={{
              fontFamily: "'Cinzel', serif",
              textShadow:
                "0 0 40px rgba(255,255,255,0.3), 0 0 80px rgba(125,211,252,0.2), 0 2px 6px rgba(0,0,0,0.5)",
            }}
          >
            Skills
          </h2>

          <p
            className="text-sky-200/80 mt-4 text-base max-w-full mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            The tools I wield in the light of self-discovery are bright, sharp, and battle-tested
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-sky-400/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-sky-300" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-sky-400/60" />
          </div>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5 md:gap-8">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.label} skill={skill} index={i} />
          ))}
        </div>

        {/* Bottom quote */}
        <motion.p
          className="text-center mt-14 text-white/45 text-sm italic"
          style={{ fontFamily: "'Crimson Pro', serif" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          "Trying to be good at it"
        </motion.p>
      </div>

      <ScrollTopButton />
    </section>
  );
};

export default Skills;
