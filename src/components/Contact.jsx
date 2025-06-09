// Import this at the top
import React, { useState, useEffect, useRef } from "react";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter, FaArrowUp, FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const popupRef = useRef(null);
  const whatsappNumber = "9779749235700"; // without '+'

  // Detect if #contact is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowIcon(entry.isIntersecting);
        if (!entry.isIntersecting) setShowWhatsApp(false);
      },
      { threshold: 0.8 } // 80% of section should be visible to trigger
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowWhatsApp(false);
      }
    };

    if (showWhatsApp) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showWhatsApp]);

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#99b4c8] flex items-center justify-center px-4 py-12 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-lg w-full"
      >
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

        <div className="space-y-4 text-lg mb-10">
          <div className="flex justify-center items-center gap-3">
            <FaEnvelope />
            <span>supremebhattarai497@gmail.com</span>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaPhone />
            <span>+977-9749235700</span>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaMapMarkerAlt />
            <span>Kathmandu, Nepal</span>
          </div>
        </div>

        <h6 className="text-2xl font-bold mb-6">Do Follow</h6>
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://www.facebook.com/suprimbhattarai10"
            target="_blank"
            className="hover:text-blue-600 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/suprimbhattarai/"
            target="_blank"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/suprim-bhattarai-494441226/"
            target="_blank"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/suprimbhattara1"
            target="_blank"
            className="hover:text-gray-800 transition"
          >
            <FaXTwitter />
          </a>
        </div>
      </motion.div>

      {/* Scroll to top button */}
      

      {/* WhatsApp Icon */}
      {showIcon && (
        <motion.button
          onClick={() => setShowWhatsApp(!showWhatsApp)}
          className="fixed bottom-4 right-24 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-800 z-20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <FaWhatsapp className="text-lg" />
        </motion.button>
      )}

      {/* WhatsApp Popup */}
      {showIcon && showWhatsApp && (
        <div
          ref={popupRef}
          className="fixed bottom-20 right-6 bg-white rounded-lg shadow-xl border w-72 p-4 z-30"
        >
          <h4 className="text-lg font-bold mb-2">Chat on WhatsApp</h4>
          <p className="text-sm mb-3 text-gray-700">
            I am available in Whatsapp, Lets' chat
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold transition"
          >
            Start Chat
          </a>
        </div>
      )}
    </section>
  );
};

export default Contact;
