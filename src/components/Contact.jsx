// components/Contact.jsx
// ─────────────────────────────────────────────────────────────────────────────
// 🌆 DUSK / SUNSET — The sun dips below the horizon. Stars emerge.
// Deep crimson-purple sky handled by SkyBackground. This section uses
// rich dark glass-morphism, warm glowing text, and soft neon accents.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter, FaWhatsapp, FaGithub } from "react-icons/fa6";

const whatsappNumber = "9779749235700";

// ── Social links ──────────────────────────────────────────────────────────────
const SOCIALS = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/suprimbhattarai10",
    label: "Facebook",
    color: "#1877f2",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/suprimbhattarai/",
    label: "Instagram",
    color: "#e1306c",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/suprim-bhattarai-494441226/",
    label: "LinkedIn",
    color: "#0a66c2",
  },
  {
    icon: <FaXTwitter />,
    href: "https://x.com/suprimbhattara1",
    label: "X / Twitter",
    color: "#e2e8f0",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/suprimbhattarai",
    label: "GitHub",
    color: "#f0f6fc",
  },
];

// ── Contact info rows ─────────────────────────────────────────────────────────
const CONTACT_INFO = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "suprimbhattarai2004@gmail.com",
    href: "mailto:suprimbhattarai2004@gmail.com",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+977-9749235700",
    href: "tel:+9779749235700",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Kathmandu, Nepal",
    href: null,
  },
];

// ── Twinkling shooting star ────────────────────────────────────────────────────
const ShootingStar = ({ delay }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      top: `${10 + Math.random() * 30}%`,
      left: "-5%",
      width: 80,
      height: 1.5,
      background:
        "linear-gradient(to right, transparent, rgba(255,255,255,0.9), transparent)",
      borderRadius: 9999,
      rotate: 15,
    }}
    animate={{ x: ["0vw", "110vw"], opacity: [0, 1, 0] }}
    transition={{
      duration: 1.2,
      delay,
      repeat: Infinity,
      repeatDelay: 6 + Math.random() * 8,
      ease: "easeIn",
    }}
  />
);

// ── Main component ────────────────────────────────────────────────────────────
const Contact = () => {
  const [showWAPopup, setShowWAPopup] = useState(false);
  const [showWABtn, setShowWABtn] = useState(false);
  const popupRef = useRef(null);

  // Show WA button when contact section is visible
  useEffect(() => {
    const section = document.getElementById("contact");
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowWABtn(entry.isIntersecting);
        if (!entry.isIntersecting) setShowWAPopup(false);
      },
      { threshold: 0.4 },
    );
    observer.observe(section);
    return () => observer.unobserve(section);
  }, []);

  // Close WA popup on outside click
  useEffect(() => {
    const handler = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowWAPopup(false);
      }
    };
    if (showWAPopup) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showWAPopup]);

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12
        py-16 relative overflow-hidden"
    >
      {/* Deep dusk overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,6,23,0.35) 0%, rgba(15,23,42,0.45) 60%, rgba(2,6,23,0.55) 100%)",
        }}
      />

      {/* Shooting stars */}
      {[2, 5, 9, 14].map((d) => (
        <ShootingStar key={d} delay={d} />
      ))}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 w-full max-w-2xl text-center"
      >
        {/* Eyebrow */}
        <motion.p
          className="text-xs tracking-[0.4em] uppercase font-semibold text-red-400 mb-4"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            textShadow: "0 0 15px rgba(248,113,113,0.6)",
          }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* 🌆 &nbsp;Sunset */}
        </motion.p>

        {/* Heading */}
        <h2
          className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-3"
          style={{
            fontFamily: "'Cinzel', serif",
            textShadow:
              "0 0 40px rgba(248,113,113,0.4), 0 2px 6px rgba(0,0,0,0.6)",
          }}
        >
          Let's Connect
        </h2>
        <p
          className="text-orange-200/60 text-sm mb-4"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          The sun sets, but the connection never has to
        </p>

        {/* Contact info glass card */}
        <motion.div
          className="rounded-2xl p-6 sm:p-8 mb-10 text-left"
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(16px)",
            border: "1.5px solid rgba(255,255,255,0.12)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="flex flex-col gap-4">
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(248,113,113,0.15)",
                    border: "1px solid rgba(248,113,113,0.3)",
                    color: "#f87171",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className="text-xs text-white/40 uppercase tracking-widest"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white/85 font-semibold text-sm hover:text-orange-300 transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className="text-white/85 font-semibold text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-red-500/40" />
          <p
            className="text-xs tracking-[0.3em] uppercase text-white/40"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Follow Along
          </p>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-red-500/40" />
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-5 mb-4">
          {SOCIALS.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              title={s.label}
              className="w-11 h-11 rounded-full flex items-center justify-center text-xl
                transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.7)",
              }}
              whileHover={{
                scale: 1.2,
                color: s.color,
                background: `rgba(${hexToRgb(s.color)}, 0.15)`,
                borderColor: s.color,
                boxShadow: `0 4px 20px rgba(${hexToRgb(s.color)}, 0.4)`,
              }}
              whileTap={{ scale: 0.95 }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p
            className="text-sm text-white/50"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Prefer a direct chat?
          </p>
          <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-bold text-sm
              tracking-wider uppercase"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
              color: "white",
              boxShadow: "0 4px 20px rgba(34,197,94,0.45)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 30px rgba(34,197,94,0.6)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <FaWhatsapp className="text-lg" />
            Chat on WhatsApp
          </motion.a>
        </motion.div>

        {/* Footer signature */}
        <motion.p
          className="mt-8 text-white/25 text-xs"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          © {new Date().getFullYear()} Suprim Bhattarai
        </motion.p>
      </motion.div>

      {/* ── Floating WA Button ──────────────────────────────────────────── */}
      {showWABtn && (
        <motion.button
          onClick={() => setShowWAPopup(!showWAPopup)}
          className="fixed bottom-5 right-24 bg-green-500 text-white p-3.5 rounded-full shadow-lg
            hover:bg-green-600 z-20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.1 }}
          style={{ boxShadow: "0 4px 20px rgba(34,197,94,0.5)" }}
        >
          <FaWhatsapp className="text-xl" />
        </motion.button>
      )}

      {/* ── WA Popup ────────────────────────────────────────────────────── */}
      {showWABtn && showWAPopup && (
        <motion.div
          ref={popupRef}
          className="fixed bottom-24 right-5 rounded-2xl border w-72 p-5 z-30"
          style={{
            background: "rgba(15,23,42,0.92)",
            backdropFilter: "blur(16px)",
            border: "1.5px solid rgba(34,197,94,0.3)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
        >
          <h4
            className="text-base font-bold text-white mb-1.5"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Chat on WhatsApp
          </h4>
          <p
            className="text-sm mb-4 text-white/60"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            I'm usually available — let's chat!
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center py-2.5 rounded-xl font-bold text-white text-sm
              transition-all duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #22c55e, #16a34a)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Start Chat →
          </a>
        </motion.div>
      )}
    </section>
  );
};

// Helper
function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r
    ? `${parseInt(r[1], 16)}, ${parseInt(r[2], 16)}, ${parseInt(r[3], 16)}`
    : "255, 255, 255";
}

export default Contact;
