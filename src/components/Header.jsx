import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Import the Header.css file

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4">
      <nav className="max-w-5xl mx-auto flex justify-between">
        {/* Brand Link */}
        <Link to="/" className="text-2xl font-bold">FreelanceFinance</Link>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/blog" className="hover:underline" aria-label="Go to Blog">Blog</Link>
          <Link to="/pricing" className="hover:underline" aria-label="View Pricing">Pricing</Link>
          <Link to="/about" className="hover:underline" aria-label="About Us">About</Link>
          <Link to="/faq" className="hover:underline" aria-label="Frequently Asked Questions">FAQs</Link>
          <Link to="/contact" className="hover:underline" aria-label="Contact Us">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
