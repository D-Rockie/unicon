import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import '../styles/global.css';

export default function AppLayout() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="app-container">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav">
            <NavLink to="/" className="brand">
              <span className="gradient-text">Unique</span> Connections
            </NavLink>
            
            <button 
              className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                About Us
              </NavLink>
              <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>
                Services
              </NavLink>
              <NavLink to="/jobs" className={({ isActive }) => isActive ? 'active' : ''}>
                Job Listings
              </NavLink>
              <NavLink to="/contact" className="btn btn-outline">
                Contact Us
              </NavLink>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3><span className="gradient-text">Unique</span> Connections</h3>
              <p>Bridging talent with opportunity through innovative recruitment solutions.</p>
            </div>
            
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/jobs">Job Listings</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <p>Email: info@uniqueconnections.com</p>
              <p>Phone: (123) 456-7890</p>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Unique Connections. All rights reserved.</p>
            <div className="legal-links">
              <NavLink to="/privacy">Privacy Policy</NavLink>
              <span>|</span>
              <NavLink to="/terms">Terms of Service</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}