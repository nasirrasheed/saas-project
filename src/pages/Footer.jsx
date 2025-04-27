// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold text-white">
              Freelancer Finance
            </Link>
            <p className="text-sm mt-2">Helping freelancers master their money.</p>
          </div>

          <div className="flex space-x-8">
            <div className="flex flex-col space-y-2">
              <Link to="/features" className="hover:underline">Features</Link>
              <Link to="/pricing" className="hover:underline">Pricing</Link>
              <Link to="/blog" className="hover:underline">Blog</Link>
            </div>

            <div className="flex flex-col space-y-2">
              <Link to="/about" className="hover:underline">About Us</Link>
              <Link to="/faqs" className="hover:underline">FAQs</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </div>
          </div>
        </div>

        <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Freelancer Finance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
