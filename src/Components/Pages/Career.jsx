import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';

const Career = () => {
  return (
    <div  className="max-w-5xl mx-auto mt-20 px-12">
      {/* title and description */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Career</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">My Career Journey</p>
      </div>

      {/* Education header with icon */}
      <div className="flex items-center gap-3 mb-6 justify-center">
        <FaGraduationCap className="text-green-600 w-8 text-2xl" />
        <h3 className="text-2xl font-semibold text-green-600 dark:text-white">Education</h3>
      </div>

      {/* education sections */}
      <ul className="timeline timeline-vertical">
        {/* 1st */}
        <li>
          <div className="timeline-start md:mx-4 lg:mx-8 mx-4 w-full md:w-[400px] text-left">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">B.Sc (Engg.) in CSE</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">International Islamic University Chittagong</p>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
              <FaMapMarkerAlt />
              <span>Chattogram, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <FaCalendarAlt />
              <span>2023 - Present</span>
            </div>
          </div>

          <div className="timeline-middle">
            <div className="bg-green-600 w-3 h-3 rounded-full" />
          </div>
          <hr className="bg-green-500 h-px" />
        </li>

        {/* 2nd */}
        <li>
          <hr className="bg-green-500 h-px" />
          <div className="timeline-end md:mx-4 lg:mx-8 mx-4 w-full md:w-[400px] text-left">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Higher Secondary School Certificate (Science)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">BAF Shaheen College Chittagong</p>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
              <FaMapMarkerAlt />
              <span>Chattogram, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <FaCalendarAlt />
              <span>2019 - 2021</span>
            </div>
          </div>

          <div className="timeline-middle">
            <div className="bg-green-600 w-3 h-3 rounded-full" />
          </div>
          <hr className="bg-green-500 h-px" />
        </li>

        {/* 3rd */}
        <li>
          <hr className="bg-green-500 h-px" />
          <div className="timeline-start md:mx-4 lg:mx-8 mx-4 w-full md:w-[400px] text-left">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Secondary School Certificate (Science)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Railway Public High School</p>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
              <FaMapMarkerAlt />
              <span>Chattogram, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <FaCalendarAlt />
              <span>2014 - 2019</span>
            </div>
          </div>

          <div className="timeline-middle">
            <div className="bg-green-600 w-3 h-3 rounded-full" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Career;
