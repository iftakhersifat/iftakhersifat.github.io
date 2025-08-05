import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap } from "react-icons/fa";

const timelineData = [
  {
    title: "B.Sc (Engg.) in CSE",
    company: "International Islamic University Chittagong",
    location: "Chattogram, Bangladesh",
    date: "2023 - Present",
  },
  {
    title: "Higher Secondary School Certificate (Science)",
    company: "BAF Shaheen College Chittagong",
    location: "Chattogram, Bangladesh",
    date: "2019 - 2021",
  },
  {
    title: "Secondary School Certificate (Science)",
    company: "Railway Public High School",
    location: "Chattogram, Bangladesh",
    date: "2014 - 2019",
  },
];

const TimelineCard = ({ data, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`w-full flex items-center justify-between relative mb-12 ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* Connector line between dots */}
      {/* Connector line between dots (hidden on small screens) */}
<span
  className={`hidden sm:block absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-full w-[2px] bg-green-600 ${
    index === timelineData.length - 1 ? "h-0" : "h-[70px]"
  } z-20`}
/>

{/* Dot (hidden on small screens) */}
<div
  className="hidden sm:block absolute left-1/2 top-2/4 transform -translate-x-1/2 -translate-y-2/4 w-5 h-5 sm:w-6 sm:h-6 bg-green-600 rounded-full border-4 border-white shadow-lg z-30
    before:absolute before:content-[''] before:w-10 before:h-10 sm:before:w-12 sm:before:h-12 before:rounded-full before:bg-green-500 before:opacity-20 before:animate-ping before:top-[-18px] before:left-[-18px]"
/>


      <motion.div
        initial={{ x: isLeft ? -120 : 120, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-br from-emerald-900/90 to-emerald-500/80 backdrop-blur-md border border-white/10 text-white rounded-xl shadow-xl p-8 w-[90%] sm:w-[70%] md:w-[45%] cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
      >
        <h3 className="text-xl font-bold mb-2">{data.title}</h3>
        <p className="text-base  mb-1 font-semibold">{data.company}</p>
        <p className="text-base opacity-90 font-medium mb-2">{data.location}</p>
        <p className="text-sm text-green-400 font-bold tracking-wide">{data.date}</p>
      </motion.div>
    </div>
  );
};

const CareerTimeline = () => {
  const wrapperRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (wrapperRef.current) {
      setLineHeight(wrapperRef.current.clientHeight);
    }
  }, []);

  return (
    <div className="relative py-24 px-6 md:px-10 min-h-screen max-w-7xl mx-auto rounded-lg ">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Career
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          A journey through my education and milestones.
        </p>

        {/* Education Header */}
        <div className="flex items-center gap-4 mt-8 justify-center">
          <FaGraduationCap className="text-green-500 w-10 h-10 drop-shadow-md" />
          <h3 className="text-3xl font-bold text-green-500">
            Education
          </h3>
        </div>
      </motion.div>

      {/* Timeline Wrapper */}
      <div ref={wrapperRef} className="relative">
        {/* Vertical Line */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-600 rounded-full shadow-[0_0_15px_#22c55e]"
          style={{ height: lineHeight }}
        />

        {/* Timeline Cards */}
        {timelineData.map((item, index) => (
          <TimelineCard key={index} data={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CareerTimeline;
