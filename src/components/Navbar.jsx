import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  useEffect(() => {
    const homeSection = document.getElementById("home");
    if (!homeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHomeVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    observer.observe(homeSection);
    return () => observer.disconnect();
  }, []);

  if (!isHomeVisible) return null;

  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed top-2 left-1/2 transform text-xl text-black -translate-x-1/2 z-50 py-4 px-4 w-3/4 sm:w-1/2 overflow-hidden">
      <ul className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6 justify-center items-center text-black font-semibold text-xl sm:text-base">
        {navItems.map((item) => (
          <li key={item} className="relative group">
            <a
              href={`#${item.toLowerCase()}`}
              className="transition-all duration-300 ease-in-out"
            >
              {item}
            </a>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
