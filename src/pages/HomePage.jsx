import React from 'react';
import { Link } from 'react-router-dom';
import JoinBetaForm from '../components/JoinBetaForm'; // Assuming this is another component for beta form
import './HomePage.css'; // Make sure your CSS file styles the page correctly
import useTitle from '../hooks/useTitle'; // <- Add this only once

function HomePage() {
  useTitle("Home - FreelanceFinance"); // <- Set the page title

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1>Manage Your Freelance Finances With Ease</h1>
        <p>Track income, expenses, taxes, and more — all in one simple, beautiful dashboard.</p>
        <Link to="/pricing" className="btn-primary">View Pricing</Link>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Freelancers Love Us</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Smart Invoicing</h3>
            <p>Create and send invoices that get you paid faster, with automated reminders.</p>
          </div>
          <div className="feature-card">
            <h3>Global Currency Support</h3>
            <p>Track expenses in any currency — we’ll handle the conversion.</p>
          </div>
          <div className="feature-card">
            <h3>Tax Simplified</h3>
            <p>Auto-categorize expenses and export your tax reports in one click.</p>
          </div>
        </div>
      </section>

      {/* Join Beta Section */}
      <section className="join-beta">
        <h2>Join the Beta</h2>
        <p>Be the first to access the full features of FreelanceFinance. It’s free during beta!</p>
        <JoinBetaForm /> {/* Form for collecting beta users */}
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Freelancers Are Saying</h2>
        <div className="testimonial-grid">
          <blockquote>
            <p>"FreelanceFinance made tax season stress-free. The dashboard is beautiful and useful!"</p>
            <footer>— Lena, Designer</footer>
          </blockquote>
          <blockquote>
            <p>"As a nomad, this helps me track expenses across currencies easily."</p>
            <footer>— Marco, Developer</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
