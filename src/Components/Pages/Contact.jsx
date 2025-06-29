import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto mt-20 px-6 md:px-14 lg:px-0">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Contact Me</h2>
      <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">Get in touch</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Contact info */}
        <div className="flex flex-col justify-start gap-8 text-gray-700 dark:text-gray-300 w-full md:w-1/2">
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-green-600 w-6 h-6 mt-4" />
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Call Me</h3>
              <p>+880 1234 567890</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-green-600 w-6 h-6 mt-4" />
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Email Me</h3>
              <p>your.email@example.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-green-600 w-6 h-6 mt-4" />
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Location</h3>
              <p>Chattogram, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="w-full md:w-1/2 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">

          {/* name */}
            <div class="w-full md:w-1/2 p-4 rounded-xl bg-green-100">
            <label for="name" class="block text-sm  text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="enter your name"
              class="w-full bg-green-100 text-black"/>
          </div>

          {/* email */}
            <div class="w-full md:w-1/2 p-4 rounded-xl bg-green-100">
            <label for="email" class="block text-sm text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              class="w-full bg-green-100 focus:outline-none text-black"
            />
          </div>

          </div>

          {/* message */}
          <div class="w-full p-4 rounded-xl bg-green-100">
          <label for="message" class="block text-sm text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            id="message"
            rows="8"
            placeholder="Type your message here..."
            class="w-full bg-green-100 focus:outline-none text-black"></textarea>
        </div>

          <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition">
         <span>Send Message</span>
         <FaPaperPlane className="text-white" />
        </button>

        </div>
      </div>
    </div>
  );
};

export default Contact;
