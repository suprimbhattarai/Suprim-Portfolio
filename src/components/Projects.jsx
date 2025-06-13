import React, { useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { motion } from "framer-motion";
import ScrollTopButton from "./ScrollTopButton";

import myPhoto from "../assets/room.png";
import myPhoto2 from "../assets/eat.png";
import myPhoto3 from "../assets/eat2.png";

const projectData = [
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

  const handleNext = (index) => {
    setImageIndexes((prev) =>
      prev.map((imgIdx, i) =>
        i === index ? (imgIdx + 1) % projectData[i].images.length : imgIdx
      )
    );
  };

  const handlePrev = (index) => {
    setImageIndexes((prev) =>
      prev.map((imgIdx, i) =>
        i === index
          ? (imgIdx - 1 + projectData[i].images.length) %
            projectData[i].images.length
          : imgIdx
      )
    );
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#99b4c8] px-6 py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl font-bold mb-4">Projects</h2>
          <p className="text-lg">(Basic things I had done)</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 justify-items-center">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, scale: 0.85 }}
              initial={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 1.2 }}
              className="relative max-w-md w-full overflow-hidden transform transition-transform duration-300 group cursor-pointer"
              onClick={() => window.open(project.link, "_blank")}
            >
              {/* Image Carousel */}
              <div className="relative h-60 w-full">
                <img
                  src={project.images[imageIndexes[index]]}
                  alt={project.name}
                  className="object-cover w-full rounded-2xl h-full"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev(index);
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white/80"
                >
                  <BsFillCaretLeftFill />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext(index);
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white/80"
                >
                  <BsFillCaretRightFill />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-700 font-semibold text-m opacity-0 overflow-hidden group-hover:opacity-100 group-hover:mt-2 transition-all duration-500 ease-in-out">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add this block below the grid */}
        <motion.div
          className="text-center "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
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
    </section>
  );
};

export default Projects;
