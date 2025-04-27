import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme') === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const location = useLocation();
  const menuRef = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, isMobile]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const linkClasses = (path) =>
    location.pathname === path
      ? "mobile-link active-mobile-link"
      : "mobile-link";

  const desktopLinkClasses = (path) =>
    location.pathname === path
      ? "desktop-link active-desktop-link"
      : "desktop-link";

  return (
    <header className="header">
      <nav className="nav-container">
        {/* Brand */}
        <Link to="/" className="brand">FreelanceFinance</Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Link to="/blog" className={desktopLinkClasses("/blog")}>Blog</Link>
          <Link to="/pricing" className={desktopLinkClasses("/pricing")}>Pricing</Link>
          <Link to="/about" className={desktopLinkClasses("/about")}>About</Link>
          <Link to="/faq" className={desktopLinkClasses("/faq")}>FAQs</Link>
          <Link to="/contact" className={desktopLinkClasses("/contact")}>Contact</Link>
        </div>

        {/* Actions */}
        <div className="actions" ref={menuRef}>
          {/* Dark mode toggle */}
          <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode" className="theme-toggle">
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="menu-toggle">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Overlay */}
        <AnimatePresence>
          {isOpen && isMobile && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overlay"
              />
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.4 }}
                className="mobile-fullscreen-menu"
              >
                {/* Close Button inside Menu */}
                <button onClick={closeMenu} className="close-menu-btn" aria-label="Close Menu">
                  <X size={28} />
                </button>

                {/* Navigation links */}
                <Link onClick={closeMenu} to="/blog" className={linkClasses("/blog")}>Blog</Link>
                <Link onClick={closeMenu} to="/pricing" className={linkClasses("/pricing")}>Pricing</Link>
                <Link onClick={closeMenu} to="/about" className={linkClasses("/about")}>About</Link>
                <Link onClick={closeMenu} to="/faq" className={linkClasses("/faq")}>FAQs</Link>
                <Link onClick={closeMenu} to="/contact" className={linkClasses("/contact")}>Contact</Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
