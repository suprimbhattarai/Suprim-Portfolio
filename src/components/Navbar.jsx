// components/Navbar.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Adaptive nav bar. Hidden on home section.
// Big screens: centered at top.
// Small screens: burger icon at top-right.
// Original color theme preserved.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Colour scheme per section index
const THEMES = [
  // 0 Dawn – light text on dark sky
  {
    text: "text-orange-100",
    hover: "hover:text-orange-300",
    underline: "bg-orange-300",
    backdrop: "bg-transparent",
  },
  // 1 Morning – dark text on light sky
  {
    text: "text-slate-800",
    hover: "hover:text-amber-600",
    underline: "bg-amber-500",
    backdrop: "bg-sky-100/20 backdrop-blur-sm",
  },
  // 2 Noon – dark text
  {
    text: "text-slate-800",
    hover: "hover:text-blue-600",
    underline: "bg-blue-600",
    backdrop: "bg-white/15 backdrop-blur-sm",
  },
  // 3 Golden Hour – warm light text
  {
    text: "text-orange-50",
    hover: "hover:text-yellow-300",
    underline: "bg-yellow-300",
    backdrop: "bg-transparent",
  },
  // 4 Sunset – soft white text
  {
    text: "text-orange-100",
    hover: "hover:text-red-300",
    underline: "bg-red-300",
    backdrop: "bg-transparent",
  },
];

const NAV_ITEMS = ["Home", "About", "Projects", "Skills", "Contact"];

const Navbar = ({ sectionIndex }) => {
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const theme = THEMES[Math.min(sectionIndex, 4)];

  useEffect(() => {
    const homeSection = document.getElementById("home");
    const scrollContainer = document.getElementById("scroll-container");

    if (!homeSection || !scrollContainer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHomeVisible(entry.isIntersecting);
        if (entry.isIntersecting) setMenuOpen(false);
      },
      { root: scrollContainer, threshold: 0.5 },
    );

    observer.observe(homeSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [sectionIndex]);

  if (isHomeVisible) return null;

  return (
    <>
      {/* Desktop / tablet navbar centered */}
      <motion.nav
        key="navbar-desktop"
        className={`hidden sm:block fixed top-5 left-1/2 z-50 -translate-x-1/2 py-3 px-6 rounded-full
          ${theme.backdrop} border border-white/20 shadow-lg`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        style={{ minWidth: "max-content" }}
      >
        <ul className="flex gap-7 items-center">
          {NAV_ITEMS.map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-semibold tracking-wider uppercase transition-colors duration-300
                  ${theme.text} ${theme.hover}`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {item}
              </a>
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full transition-all duration-300 ${theme.underline}`}
              />
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile hamburger at top-right */}
      <motion.div
        className="fixed top-5 right-5 z-50 sm:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <button
          className={`flex flex-col gap-1.5 p-3 rounded-xl ${theme.backdrop} border border-white/20 shadow-lg ${theme.text}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className={`block w-5 h-0.5 rounded-full ${theme.underline}`}
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
          />
          <motion.span
            className={`block w-5 h-0.5 rounded-full ${theme.underline}`}
            animate={{ opacity: menuOpen ? 0 : 1 }}
          />
          <motion.span
            className={`block w-5 h-0.5 rounded-full ${theme.underline}`}
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
          />
        </button>
      </motion.div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed top-20 right-5 z-50 bg-black/70 backdrop-blur-lg
              rounded-2xl border border-white/20 py-4 px-8 shadow-2xl sm:hidden"
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white text-lg font-semibold tracking-wider uppercase
                      hover:text-orange-300 transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
