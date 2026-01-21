import { useState, useEffect, useRef } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
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

  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const isPaused = useRef(false);
  const speed = 120; // pixels per second (professional constant speed)

  const totalWidth = useRef(0);

  useEffect(() => {
    if (containerRef.current) {
      totalWidth.current = containerRef.current.scrollWidth / 2;
    }
  }, []);

  // 🔥 TRUE continuous marquee
  useAnimationFrame((t, delta) => {
    if (isPaused.current || !totalWidth.current) return;

    const moveBy = (speed * delta) / 1000;
    let currentX = x.get() - moveBy;

    // seamless wrap
    if (Math.abs(currentX) >= totalWidth.current) {
      currentX += totalWidth.current;
    }

    x.set(currentX);
  });

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

        {/* 🔁 PROFESSIONAL MARQUEE */}
        <motion.div className="overflow-hidden rounded-xl">
          <motion.div
            ref={containerRef}
            className="flex rounded-xl gap-8 w-max"
            style={{ x }}
          >
            {[...projectData, ...projectData].map((project, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl max-w-md w-[350px] overflow-hidden group cursor-pointer"
                onMouseEnter={() => (isPaused.current = true)}
                onMouseLeave={() => (isPaused.current = false)}
                onClick={() => window.open(project.link, "_blank")}
              >
                <div className="relative h-60 w-full">
                  <img
                    src={
                      project.images[imageIndexes[index % projectData.length]]
                    }
                    alt={project.name}
                    className="object-cover w-full rounded-xl h-full"
                  />

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev(index % projectData.length);
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2
                      bg-white/70 p-2 rounded-full
                      opacity-0 group-hover:opacity-100 transition"
                  >
                    <BsFillCaretLeftFill />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext(index % projectData.length);
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2
                      bg-white/70 p-2 rounded-full
                      opacity-0 group-hover:opacity-100 transition"
                  >
                    <BsFillCaretRightFill />
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <p className="text-gray-700 font-semibold text-md mt-2 opacity-0 group-hover:opacity-90 transition">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <ScrollTopButton />
        <motion.div
          className="text-center mt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {" "}
          <h3 className="text-2xl font-bold mb-6">
            {" "}
            Want to visualize your project here?{" "}
          </h3>{" "}
          <a
            href="#contact"
            className="inline-block px-6 py-2 border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition"
          >
            {" "}
            Contact Suprim{" "}
          </a>{" "}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
