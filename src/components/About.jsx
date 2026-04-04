// components/About.jsx
// ─────────────────────────────────────────────────────────────────────────────
// 🌤️ MORNING — Golden light, crisp and clear. The day warms up.
// A soft amber overlay on the sky creates that "just after sunrise" glow.
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/profilepic.png";
import ScrollTopButton from "./ScrollTopButton";

const TAGS = [
  "React.js",
  "Django REST",
  "Node.js",
  "AWS",
  "MySQL",
  ".NET",
  "UI/UX",
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-8 sm:px-12 md:px-20
        py-16 relative overflow-hidden"
    >
      {/* Morning golden overlay — warms the sky behind */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(254,243,199,0.45) 0%, rgba(251,191,36,0.18) 50%, rgba(186,230,253,0.15) 100%)",
        }}
      />

      {/* Soft sunbeam from top-left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 22% 0%, rgba(254,243,199,0.5) 0%, transparent 55%)",
        }}
      />

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-6xl mx-auto w-full relative z-10">
        {/* ── Text ──────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center gap-6"
        >
          {/* Section eyebrow */}
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-amber-500/70 rounded-full" />
            <span
              className="text-xs tracking-[0.35em] uppercase font-semibold text-amber-600"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {/* Good morning */}
            </span>
          </div>

          <h2
            className="text-5xl md:text-6xl font-black leading-none text-slate-800"
            style={{
              fontFamily: "'Cinzel', serif",
              textShadow: "0 2px 20px rgba(251,191,36,0.25)",
            }}
          >
            About
            <br />
            <span style={{ color: "#d97706" }}>Me</span>
          </h2>

          <p
            className="text-base md:text-lg leading-relaxed text-slate-700 max-w-md"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Born and raised in{" "}
            <strong className="text-amber-700">Biratnagar, Nepal</strong>,
            currently living in{" "}
            <strong className="text-amber-700">Kathmandu</strong>, pursuing an
            undergraduate degree in{" "}
            <strong className="text-slate-900">Computer Science</strong> under{" "}
            <strong className="text-slate-900">Tribhuvan University</strong>.
          </p>
{/* 
          <p
            className="text-base leading-relaxed text-slate-600 max-w-md"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Like the morning sun rising over the Himalayas, I approach every
            challenge with fresh energy and a clear mind ready to build,
            learn, and grow.
          </p> */}

          {/* Skill tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {TAGS.map((tag, i) => (
              <motion.span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-semibold
                  text-slate-700 border border-amber-300/80 bg-amber-50/70"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "rgba(251,191,36,0.2)",
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ── Photo ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center items-center"
        >
          {/* Morning light halo */}
          <div
            className="absolute rounded-2xl"
            style={{
              inset: "-20px",
              background:
                "radial-gradient(ellipse at 50% 30%, rgba(251,191,36,0.35) 0%, transparent 65%)",
              filter: "blur(16px)",
              zIndex: 0,
            }}
          />

          {/* Photo */}
          <motion.img
            src={myPhoto}
            alt="Suprim Bhattarai"
            className="relative z-10 rounded-2xl object-cover cursor-pointer select-none"
            style={{
              maxHeight: 500,
              width: "100%",
              objectFit: "cover",
              filter: "saturate(1.08) brightness(1.04)",
              boxShadow:
                "0 25px 60px rgba(251,191,36,0.28), 0 4px 20px rgba(0,0,0,0.12)",
            }}
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 30px 80px rgba(251,191,36,0.4), 0 6px 24px rgba(0,0,0,0.15)",
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Decorative frame corner */}
          <div
            className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl z-0 pointer-events-none"
            style={{ border: "2px solid rgba(217,119,6,0.5)" }}
          />
          <div
            className="absolute -top-4 -left-4 w-14 h-14 rounded-xl z-0 pointer-events-none"
            style={{ border: "2px solid rgba(217,119,6,0.35)" }}
          />
        </motion.div>
      </div>

      <ScrollTopButton />
    </section>
  );
};

export default About;
