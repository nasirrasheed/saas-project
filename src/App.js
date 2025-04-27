import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import BlogPostPage from './pages/BlogPostPage'; // For individual blog posts
import useTitle from './hooks/useTitle'; // Custom hook to set page title globally
import '@fortawesome/fontawesome-free/css/all.min.css'; // assuming AboutPage is in the components folder


function App() {
  // Default page title (you can use this for the home or root route)
  useTitle("FreelanceFinance");

  return (
    <Router>
      {/* Add the Header component here so it appears on all pages */}
      <Header /> 

      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />

        {/* About Page Route */}
        <Route path="/about" element={<AboutPage />} />

        {/* Blog Page Route */}
        <Route path="/blog" element={<BlogPage />} />

        {/* Blog Post Page Route (dynamic blog post ID) */}
        <Route path="/blog/:postId" element={<BlogPostPage />} />

        {/* Pricing Page Route */}
        <Route path="/pricing" element={<PricingPage />} />

        {/* Contact Page Route */}
        <Route path="/contact" element={<ContactPage />} />

        {/* FAQ Page Route */}
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
