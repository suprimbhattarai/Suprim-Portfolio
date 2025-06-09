// components/PageWrapper.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const PageWrapper = ({ children, showArrow = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-full px-6 md:px-12 py-10 bg-[#99b4c8] text-black relative overflow-hidden"
    >
      {children}

      {showArrow && (
        <Link to="home" smooth={true} duration={800}>
          <button className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50">
            <FaArrowUp size={18} />
          </button>
        </Link>
      )}
    </motion.div>
  );
};

export default PageWrapper;
