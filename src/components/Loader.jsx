// components/Loader.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Sunrise loading screen. An animated sun rises from the horizon.
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-end pb-32 z-50 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #0d0221 0%, #4a044e 22%, #9d174d 42%, #f97316 68%, #fbbf24 85%, #fde68a 100%)",
      }}
    >
      {/* Stars */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
          }}
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{
            duration: Math.random() * 2 + 1,
            delay: Math.random() * 2,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Horizon glow */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "45%",
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(251,146,60,0.55) 0%, transparent 65%)",
        }}
      />

      {/* Rising sun */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 80,
          height: 80,
          left: "50%",
          translateX: "-50%",
          background:
            "radial-gradient(circle, #fff7ed 0%, #fed7aa 28%, #fb923c 62%, #ea580c 100%)",
          boxShadow:
            "0 0 70px 35px rgba(251,146,60,0.9), 0 0 140px 70px rgba(234,88,12,0.5)",
        }}
        initial={{ bottom: "-10%", opacity: 0 }}
        animate={{ bottom: "32%", opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Rays */}
      <motion.div
        className="absolute"
        style={{ left: "50%", translateX: "-50%", bottom: "32%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0.3], rotate: [0, 10, 0] }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <div
            key={angle}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transformOrigin: "0 50%",
              transform: `rotate(${angle}deg) translateY(-50%)`,
              width: 160,
              height: 1.5,
              background:
                "linear-gradient(to right, rgba(251,146,60,0.6), transparent)",
            }}
          />
        ))}
      </motion.div>

      {/* Text */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h1
          className="text-white text-3xl font-black tracking-widest uppercase"
          style={{
            fontFamily: "'Cinzel', serif",
            textShadow: "0 0 30px rgba(251,146,60,0.7)",
          }}
        >
          Suprim Bhattarai
        </h1>
        <p
          className="text-orange-200 text-sm tracking-[0.35em] uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          The day begins…
        </p>

        {/* Loading dots */}
        <div className="flex gap-2 mt-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-orange-300"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{
                duration: 1.2,
                delay: i * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;
