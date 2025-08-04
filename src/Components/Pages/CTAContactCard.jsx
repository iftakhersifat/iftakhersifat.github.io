import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const CTAContactCard = () => {
  return (
    <div className="bg-green-600 text-white mt-12 rounded-xl max-w-5xl mx-auto px-6 md:px-14 py-10 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
      {/* Text */}
      <div className="max-w-md text-center md:text-left">
        <h3 className="text-2xl font-bold mb-2">New projects in your mind?</h3>
        <p className="text-sm text-white/90">
          Don't be late. Contact me now to discuss about your projects.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 mt-4 px-5 py-3 bg-white text-green-600 font-semibold rounded-md hover:bg-green-100 transition"
        >
          Contact Me <FaPaperPlane />
        </a>
      </div>

      {/* Thinking Guy Image */}
      <div className="w-[200px] h-[200px] md:w-[150px] md:h-[150px] flex-shrink-0">
        <img
          src="/assets/thinking.png"
          alt="Thinking Guy"
          className="w-full h-full object-contain rounded-xl shadow-md"
        />
      </div>
    </div>
  );
};

export default CTAContactCard;
