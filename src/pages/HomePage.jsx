import React from 'react';
// import { Link } from 'react-router-dom';
import JoinBetaForm from '../components/JoinBetaForm';
import './css/HomePage.css';
import useTitle from '../hooks/useTitle';
import { motion } from 'framer-motion';

function HomePage() {
  useTitle("Home - FreelanceFinance");

  return (
    <div className="homepage space-y-20">
      {/* Hero Section */}
      <motion.section
        className="hero text-center p-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4">Manage Your Freelance Finances With Ease</h1>
        <p className="text-lg text-gray-700 mb-6">Track income, expenses, taxes, and more — all in one simple, beautiful dashboard.</p>
        {/* Wrap the Link inside motion.a for animation */}
        <motion.a
          href="/pricing" // Use href here instead of Link for a correct motion element
          className="btn-primary inline-block"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(59,130,246,0.8)" }}
          whileTap={{ scale: 0.95 }}
        >
          View Pricing
        </motion.a>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="features p-8 bg-gray-50 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} // Ensures that animation happens once when section is in view
      >
        <h2 className="text-3xl font-bold text-center mb-8">Why Freelancers Love Us</h2>
        <div className="feature-grid grid md:grid-cols-3 gap-6">
          {[ 
            { title: "Smart Invoicing", desc: "Create and send invoices that get you paid faster, with automated reminders." },
            { title: "Global Currency Support", desc: "Track expenses in any currency — we’ll handle the conversion." },
            { title: "Tax Simplified", desc: "Auto-categorize expenses and export your tax reports in one click." }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card p-6 bg-white shadow-md rounded-md text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Join Beta Section */}
      <motion.section
        className="join-beta p-8 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Join the Beta</h2>
        <p className="text-lg mb-6 text-gray-700">Be the first to access the full features of FreelanceFinance. It’s free during beta!</p>
        <JoinBetaForm />
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="testimonials p-8 bg-gray-100 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">What Freelancers Are Saying</h2>
        <div className="testimonial-grid grid md:grid-cols-2 gap-8">
          {[ 
            { quote: `"FreelanceFinance made tax season stress-free. The dashboard is beautiful and useful!"`, author: "— Lena, Designer" },
            { quote: `"As a nomad, this helps me track expenses across currencies easily."`, author: "— Marco, Developer" }
          ].map((testimonial, index) => (
            <motion.blockquote
              key={index}
              className="p-6 bg-white shadow-md rounded-md"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-gray-700 italic">{testimonial.quote}</p>
              <footer className="text-right mt-4 font-semibold">{testimonial.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default HomePage;
