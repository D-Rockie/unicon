import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Reach out to us for any inquiries or to learn more about our services.</p>
        </div>
      </section>

      <div className="container">
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <div>
                <h3>Email</h3>
                <a href="mailto:careers@unique-connections.com">careers@unique-connections.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <FaPhone className="icon" />
              <div>
                <h3>Phone</h3>
                <span>+1 (555) 987-6543</span>
                <span>International: +1 (555) 123-4567</span>
              </div>
            </div>
            
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Location</h3>
                <address>
                  Unique Connections<br />
                  123 Market Street, Suite 500<br />
                  San Francisco, CA 94103<br />
                  United States
                </address>
              </div>
            </div>
            
            <div className="contact-item business-hours">
              <div className="business-hours-content">
                <h3>Business Hours</h3>
                <div className="hours-grid">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="social-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="https://linkedin.com/company/unique-connections" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/uniqueconnects" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://facebook.com/uniqueconnections" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
