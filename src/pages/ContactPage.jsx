import React from 'react';
import useTitle from '../hooks/useTitle'; // <- Add this
import { motion } from 'framer-motion'; // Import framer-motion for animations
import './css/ContactPage.css';  // Import the stylesheet at the top

export default function ContactPage() {
  useTitle("Contact Us - FreelanceFinance"); // <- Set the page title

  // Animation variants for form and text
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
  };

  return (
    <div className="contact-page-container">
      <motion.h1 
        className="text-3xl font-bold mb-4 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        Contact Us
      </motion.h1>

      <motion.p 
        className="text-gray-700 mb-6 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        Have a question, feature request, or just want to say hi? Drop us a message.
      </motion.p>

      <motion.form 
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={formVariants}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>
        </div>
        <div>
          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
        </div>
        <div className="text-center">
          <motion.button
            className="bg-blue-700 text-white px-8 py-3 rounded hover:bg-blue-800 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}
