// components/ScrollTopButton.jsx
// Scroll-to-top button — visible on all sections except Home.
// Styled with a warm amber gradient to complement the sun theme.

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ScrollTopButton = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  useEffect(() => {
    const home = document.getElementById("home");
    if (!home) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHomeVisible(entry.isIntersecting),
      {
        root: document.getElementById("scroll-container"),
        threshold: 0.6,
      },
    );

    observer.observe(home);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {!isHomeVisible && (
        <motion.a
          href="#home"
          key="scroll-top"
          className="fixed bottom-5 right-8 flex items-center justify-center w-11 h-11
            rounded-full text-white z-50 shadow-lg"
          style={{
            background: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)",
            boxShadow: "0 4px 18px rgba(249,115,22,0.5)",
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          whileHover={{
            scale: 1.12,
            boxShadow: "0 6px 26px rgba(249,115,22,0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25 }}
        >
          <FaArrowUp size={14} />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default ScrollTopButton;
