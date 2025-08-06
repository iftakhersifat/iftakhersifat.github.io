import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Gardening Community",
    description:
      "A web platform for gardening lovers to share tips, gain knowledge, and connect with a vibrant community.",
    image: "/assets/Gardening.png",
    demoLink: "https://gardening-resource-hub.netlify.app/",
  },
  // {
  //   title: "SnapGallery",
  //   description: "Upload and share media with folder and privacy support.",
  //   image: "/project2.png",
  //   demoLink: "#",
  // },
  // Add more projects as needed
];

const ProjectCarousel = () => {
  return (
    <div className="max-w-6xl mx-auto  my-16">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold dark:text-white">Projects</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Some of my highlighted works
        </p>
      </motion.div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-200/90 to-green-400/80 dark:from-green-900/30 dark:to-green-800/30 border border-green-300/40 dark:border-green-700/30 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-8"
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-full h-[250px] object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-semibold dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 mb-6 text-gray-700 dark:text-gray-50 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition"
                >
                  Demo <FaArrowRight />
                </a>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;
