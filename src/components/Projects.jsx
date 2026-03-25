// components/Projects.jsx
// ─────────────────────────────────────────────────────────────────────────────
// 🌇 GOLDEN HOUR — The sun is descending, painting everything warm amber & gold.
// The existing marquee is preserved; cards are styled with warm glass-morphism.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect, useRef } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import ScrollTopButton from "./ScrollTopButton";

// ── Your project data (update images/links as needed) ────────────────────────
import myPhoto from "../assets/room.png";
import myPhoto2 from "../assets/eat.png";
import myPhoto3 from "../assets/eat2.png";
import myPhoto4 from "../assets/homesphere.png";
import clistal1 from "../assets/myclistal1.png";
import clistal2 from "../assets/myclistal2.png";
import clistal3 from "../assets/myclistal3.png";
import clistal4 from "../assets/myclistal4.png";
import clistal5 from "../assets/myclistal5.png";

const PROJECT_DATA = [
  {
    name: "MyClistal",
    images: [clistal1, clistal2, clistal3, clistal4, clistal5],
    description: "A webapp-based Client & Service Portal for a financial firm.",
    link: "https://myclistalbysuprim.vercel.app/",
    year: "2024",
  },
  {
    name: "Homesphere",
    images: [myPhoto4],
    description:
      "A modern platform to book, post & browse verified tradies with a Pay-When-Satisfied system.",
    link: "https://www.homesphere.co.nz/",
    year: "2024",
  },
  {
    name: "Roomsewa",
    images: [myPhoto],
    description: "A room-rental platform connecting landlords and tenants.",
    link: "https://roomsewa.com.np/",
    year: "2023",
  },
  {
    name: "Eat Ease",
    images: [myPhoto2, myPhoto3],
    description:
      "A restaurant seat-booking system that simplifies dining experiences.",
    link: "https://suprimprojects.carrd.co/",
    year: "2023",
  },
];

// ── Marquee speed ─────────────────────────────────────────────────────────────
const MARQUEE_SPEED = 115; // px/s

// ── Project card ──────────────────────────────────────────────────────────────
const ProjectCard = ({ project, imgIndex, onPrev, onNext, isPausedRef }) => {
  return (
    <motion.div
      className="relative rounded-2xl w-[330px] sm:w-[360px] overflow-hidden cursor-pointer shrink-0 group"
      style={{
        // background: "rgba(255,255,255,0.1)",
        // backdropFilter: "blur(12px)",
        // border: "1.5px solid rgba(255,255,255,0.25)",
        // boxShadow: "0 8px 32px rgba(234,88,12,0.2), 0 2px 8px rgba(0,0,0,0.15)",
      }}
      onMouseEnter={() => (isPausedRef.current = true)}
      onMouseLeave={() => (isPausedRef.current = false)}
      onClick={() => window.open(project.link, "_blank")}
      whileHover={{
        y: -6,
        // boxShadow:
        //   "0 16px 48px rgba(234,88,12,0.35), 0 4px 12px rgba(0,0,0,0.2)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative h-52 w-full rounded-b-2xl overflow-hidden">
        <img
          src={project.images[imgIndex]}
          alt={project.name}
          className="w-full h-full rounded-b-2xl object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ filter: "saturate(1.1) brightness(0.97)" }}
        />

        {/* Golden hour image overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(234,88,12,0.35) 100%)",
          }}
        />

        {/* Image nav arrows */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70
                text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition z-10"
            >
              <BsFillCaretLeftFill size={12} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70
                text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition z-10"
            >
              <BsFillCaretRightFill size={12} />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {project.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {project.images.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === imgIndex ? 16 : 6,
                  height: 6,
                  background:
                    i === imgIndex
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-1.5">
          <h3
            className="text-xl font-black text-white"
            style={{
              fontFamily: "'Cinzel', serif",
              textShadow: "0 1px 6px rgba(0,0,0,0.3)",
            }}
          >
            {project.name}
          </h3>
          <span
            className="text-xs font-semibold text-orange-300/80 mt-1"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {project.year}
          </span>
        </div>

        <p
          className="text-sm text-orange-100/75 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {project.description}
        </p>

        <div className="flex items-center gap-1.5 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span
            className="text-xs font-bold text-orange-300 tracking-wider"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            View Project →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const Projects = () => {
  const [imageIndexes, setImageIndexes] = useState(PROJECT_DATA.map(() => 0));
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const isPaused = useRef(false);
  const totalWidth = useRef(0);

  useEffect(() => {
    if (containerRef.current) {
      totalWidth.current = containerRef.current.scrollWidth / 2;
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (isPaused.current || !totalWidth.current) return;
    let current = x.get() - (MARQUEE_SPEED * delta) / 1000;
    if (Math.abs(current) >= totalWidth.current) current += totalWidth.current;
    x.set(current);
  });

  const handleNext = (i) =>
    setImageIndexes((prev) =>
      prev.map((v, j) =>
        j === i ? (v + 1) % PROJECT_DATA[i].images.length : v,
      ),
    );

  const handlePrev = (i) =>
    setImageIndexes((prev) =>
      prev.map((v, j) =>
        j === i
          ? (v - 1 + PROJECT_DATA[i].images.length) %
            PROJECT_DATA[i].images.length
          : v,
      ),
    );

  return (
    <section
      id="projects"
      className="min-h-screen py-16 px-4 sm:px-8 flex flex-col justify-center overflow-hidden relative"
    >
      {/* Golden hour overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(124,58,237,0.12) 0%, rgba(194,65,12,0.22) 50%, rgba(245,158,11,0.18) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-10"
        >
          <p
            className="text-xs tracking-[0.4em] uppercase font-semibold text-orange-300 mb-3"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              textShadow: "0 0 15px rgba(249,115,22,0.6)",
            }}
          >
            {/* 🌇 &nbsp;Golden Hour */}
          </p>
          <h2
            className="text-5xl md:text-7xl font-black text-white"
            style={{
              fontFamily: "'Cinzel', serif",
              textShadow:
                "0 0 40px rgba(249,115,22,0.4), 0 2px 6px rgba(0,0,0,0.5)",
            }}
          >
            Projects
          </h2>
          <p
            className="text-orange-200/75 mt-3 text-base"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Work bathed in afternoon light — projects I built & was part of.
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="overflow-hidden rounded-2xl">
          <motion.div
            ref={containerRef}
            className="flex gap-6 w-max py-3"
            style={{ x }}
          >
            {[...PROJECT_DATA, ...PROJECT_DATA].map((project, idx) => {
              const realIdx = idx % PROJECT_DATA.length;
              return (
                <ProjectCard
                  key={idx}
                  project={project}
                  imgIndex={imageIndexes[realIdx]}
                  onNext={() => handleNext(realIdx)}
                  onPrev={() => handlePrev(realIdx)}
                  isPausedRef={isPaused}
                />
              );
            })}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3
            className="text-xl font-bold text-white mb-5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Interested in working together?
          </h3>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold
              text-sm tracking-wider uppercase transition-all duration-300"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              background: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)",
              color: "#1a0533",
              boxShadow: "0 4px 24px rgba(249,115,22,0.5)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 8px 36px rgba(249,115,22,0.7)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 4px 24px rgba(249,115,22,0.5)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Contact Suprim →
          </a>
        </motion.div>
      </div>

      <ScrollTopButton />
    </section>
  );
};

export default Projects;
