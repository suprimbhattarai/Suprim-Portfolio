import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTopButton = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  useEffect(() => {
    const homeSection = document.getElementById("home");
    if (!homeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHomeVisible(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    observer.observe(homeSection);

    return () => observer.disconnect();
  }, []);

  // ❌ Don't show if we're in #home
  if (isHomeVisible) return null;

  return (
    <a
      href="#home"
      className="fixed bottom-4 right-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition z-50 overflow-hidden"
    >
      <FaArrowUp />
    </a>
  );
};

export default ScrollTopButton;
