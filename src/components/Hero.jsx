// components/Hero.jsx
// ─────────────────────────────────────────────────────────────────────────────
// 🌅 DAWN — The sun is just cresting the horizon.
// Purple-to-amber sky handled by SkyBackground; this section layers
// atmospheric depth, a glowing logo, and a hero text reveal.
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import logo from "../assets/suprimlogo.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between
        px-8 sm:px-16 md:px-24 py-24 md:py-0 relative overflow-hidden"
    >
      {/* Dawn atmospheric gradient overlay (extra depth on top of sky) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,2,33,0.45) 0%, rgba(154,21,75,0.2) 50%, transparent 100%)",
        }}
      />

      {/* Morning mist at the bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(253,186,116,0.35) 0%, transparent 100%)",
        }}
      />

      {/* ── Left – Text ─────────────────────────────────────────────────── */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start
          gap-5 z-10 text-center md:text-left"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Eyebrow */}
        <motion.p
          className="text-xs tracking-[0.4em] uppercase font-semibold text-orange-200"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            textShadow: "0 0 20px rgba(251,146,60,0.9)",
          }}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          {/* 🌅 &nbsp;A new day begins */}
          new day new chapter
        </motion.p>

        {/* Main heading */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-none"
          style={{
            fontFamily: "'Cinzel', serif",
            color: "#fff7ed",
            textShadow:
              "0 2px 30px rgba(251,146,60,0.55), 0 0 80px rgba(234,88,12,0.3)",
          }}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          SUPRIM
          <br />
          <motion.span
            style={{
              color: "#fbbf24",
              textShadow:
                "0 0 50px rgba(252,211,77,0.7), 0 0 100px rgba(251,146,60,0.4)",
              display: "inline-block",
            }}
            animate={{
              textShadow: [
                "0 0 40px rgba(252,211,77,0.5)",
                "0 0 80px rgba(252,211,77,0.9)",
                "0 0 40px rgba(252,211,77,0.5)",
              ],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            BHATTARAI
          </motion.span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          className="text-base sm:text-lg max-w-full leading-relaxed text-orange-100/90"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            textShadow: "0 1px 10px rgba(0,0,0,0.3)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Computer Science professional from{" "}
          <span className="font-bold text-orange-200">Kathmandu, Nepal</span>{" "}
          crafting digital experiences one sunrise at a time.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="https://drive.google.com/file/d/1GHWbY7QwwWCKZW02Zhjq5WXO1_NF8542/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold
            text-sm tracking-[0.15em] uppercase transition-all duration-300"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            background: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)",
            color: "#1a0533",
            boxShadow:
              "0 4px 24px rgba(249,115,22,0.5), inset 0 1px 0 rgba(255,255,255,0.25)",
          }}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.5 }}
          whileHover={{
            scale: 1.06,
            boxShadow: "0 8px 36px rgba(249,115,22,0.7)",
          }}
          whileTap={{ scale: 0.97 }}
        >
          My Resume
          <span>→</span>
        </motion.a>
      </motion.div>

      {/* ── Right – Logo ─────────────────────────────────────────────────── */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.0, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 340,
            height: 340,
            background:
              "radial-gradient(circle, rgba(251,146,60,0.25) 0%, rgba(234,88,12,0.08) 60%, transparent 80%)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Inner glow ring */}
        <motion.div
          className="absolute rounded-full pointer-events-none border border-orange-400/30"
          style={{ width: 280, height: 280 }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{
            duration: 3,
            delay: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* <motion.img
          src={logo}
          alt="Suprim Bhattarai Logo"
          className="relative z-10 w-52 sm:w-64 md:w-80 xl:w-96 cursor-pointer select-none"
          style={{
            filter:
              "drop-shadow(0 0 30px rgba(251,146,60,0.65)) drop-shadow(0 0 60px rgba(234,88,12,0.35))",
            opacity: 0.93,
          }}
          whileHover={{
            scale: 1.07,
            filter:
              "drop-shadow(0 0 50px rgba(251,146,60,0.9)) drop-shadow(0 0 100px rgba(234,88,12,0.5))",
          }}
          transition={{ duration: 0.35 }}
        /> */}
      </motion.div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <span
          className="text-xs tracking-[0.35em] uppercase text-orange-200/70"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px h-10 rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(251,146,60,0.8), transparent)",
          }}
          animate={{ scaleY: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* ── Nav hint (only on home) ──────────────────────────────────────── */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
        <nav>
          <ul
            className="flex gap-7 items-center"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item} className="relative group">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-semibold tracking-wider uppercase
                    text-orange-100 hover:text-orange-300 transition-colors duration-300"
                >
                  {item}
                </a>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-orange-300 rounded-full" />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
