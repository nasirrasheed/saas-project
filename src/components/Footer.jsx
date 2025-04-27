import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Install react-icons

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Company Links */}
        <div style={styles.section}>
          <h3 style={styles.title}>Company</h3>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/pricing" style={styles.link}>Pricing</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
          <Link to="/blog" style={styles.link}>Blog</Link>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h3 style={styles.title}>Quick Links</h3>
          <Link to="/faq" style={styles.link}>FAQ</Link>
          <a href="#" style={styles.link}>Privacy Policy</a>
          <a href="#" style={styles.link}>Terms of Service</a>
        </div>

        {/* Social Media */}
        <div style={styles.section}>
          <h3 style={styles.title}>Follow Us</h3>
          <div style={styles.icons}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} FreelanceFinance. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1F2937',
    color: '#D1D5DB',
    padding: '40px 20px 20px',
    marginTop: '50px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  section: {
    flex: '1 1 200px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '18px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  link: {
    display: 'block',
    color: '#D1D5DB',
    textDecoration: 'none',
    marginBottom: '8px',
    fontSize: '14px',
  },
  icons: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  icon: {
    color: '#D1D5DB',
    textDecoration: 'none',
  },
  bottom: {
    textAlign: 'center',
    marginTop: '30px',
    fontSize: '14px',
    color: '#9CA3AF',
  },
};

export default Footer;
