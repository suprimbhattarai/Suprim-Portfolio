import React, { useState, useEffect } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { motion, useMotionValue, animate } from "framer-motion";
import ScrollTopButton from "./ScrollTopButton";

import myPhoto from "../assets/room.png";
import myPhoto2 from "../assets/eat.png";
import myPhoto3 from "../assets/eat2.png";
import myPhoto4 from "../assets/homesphere.png";
import clistal1 from "../assets/myclistal1.png";
import clistal2 from "../assets/myclistal2.png";
import clistal3 from "../assets/myclistal3.png";
import clistal4 from "../assets/myclistal4.png";
import clistal5 from "../assets/myclistal5.png";
import bgimg from "../assets/bgone.png";

const projectData = [
  {
    name: "MyClistal",
    images: [clistal1, clistal2, clistal3, clistal4, clistal5],
    description:
      "-> A webapp based Client and Service Portal for financial firm",
    link: "https://my-clistal-client-and-service-porta.vercel.app/",
  },
  {
    name: "Homesphere",
    images: [myPhoto4],
    description:
      "-> A modern platform to book, post, & browse verified tradies — with a secure Pay When Satisfied protection system.",
    link: "https://www.homesphere.co.nz/",
  },
  {
    name: "Roomsewa",
    images: [myPhoto],
    description: "-> A room rental platform connecting landlords and tenants.",
    link: "https://roomsewa.com.np/rooms-for-rent",
  },
  {
    name: "Eat Ease",
    images: [myPhoto2, myPhoto3],
    description:
      "-> A restaurant seat booking system that simplifies dining experiences.",
    link: "https://suprimprojects.carrd.co/",
  },
];

const Projects = () => {
  const [imageIndexes, setImageIndexes] = useState(projectData.map(() => 0));

  /* 🔥 motion value stores live position */
  const x = useMotionValue(0);
  const [animation, setAnimation] = useState(null);

  const startAnimation = () => {
    const controls = animate(x, ["0%", "-100%"], {
      duration: 25,
      ease: "linear",
      repeat: Infinity,
    });
    setAnimation(controls);
  };

  useEffect(() => {
    startAnimation();
    return () => animation?.stop();
  }, []);

  const handleNext = (index) => {
    setImageIndexes((prev) =>
      prev.map((imgIdx, i) =>
        i === index ? (imgIdx + 1) % projectData[i].images.length : imgIdx,
      ),
    );
  };

  const handlePrev = (index) => {
    setImageIndexes((prev) =>
      prev.map((imgIdx, i) =>
        i === index
          ? (imgIdx - 1 + projectData[i].images.length) %
            projectData[i].images.length
          : imgIdx,
      ),
    );
  };

  return (
    <section
      id="projects"
      className="min-h-screen text-black px-6 py-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">Projects</h2>
          <p className="text-lg">(Basic things I had done)</p>
        </motion.div>

        {/* 🔁 AUTO SLIDING CONTAINER */}
        <motion.div
          className="overflow-hidden"
          onMouseEnter={() => animation?.stop()}
          onMouseLeave={startAnimation}
        >
          <motion.div className="flex gap-8 w-max" style={{ x }}>
            {[...projectData, ...projectData].map((project, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, scale: 0.85 }}
                initial={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 1.2 }}
                className="relative max-w-md w-[350px] overflow-hidden transform transition-transform duration-300 group cursor-pointer"
                onClick={() => window.open(project.link, "_blank")}
              >
                {/* Image Carousel */}
                <div className="relative h-60 w-full">
                  <img
                    src={
                      project.images[imageIndexes[index % projectData.length]]
                    }
                    alt={project.name}
                    className="object-cover w-full rounded-2xl h-full"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev(index % projectData.length);
                    }}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white/80"
                  >
                    <BsFillCaretLeftFill />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext(index % projectData.length);
                    }}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white/80"
                  >
                    <BsFillCaretRightFill />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <p className="text-gray-700 font-semibold text-lg opacity-0 overflow-hidden group-hover:opacity-100 group-hover:mt-1 transition-all duration-500 ease-in-out">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="text-2xl md:text-2xl font-bold mb-6 text-gray-800">
            Want to visualize your project here?
          </h3>
          <a
            href="#contact"
            className="inline-block px-6 py-2 text-black border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Contact Suprim
          </a>
        </motion.div>
      </div>

      {/* 🔝 Scroll To Top */}
      <ScrollTopButton />
    </section>
  );
};

export default Projects;
