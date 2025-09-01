import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const stats = [
  { value: '1000+', label: 'Candidates Placed' },
  { value: '200+', label: 'Companies Served' },
  { value: '95%', label: 'Success Rate' },
  { value: '24/7', label: 'Support' },
];

const services = [
  {
    icon: 'fa-briefcase',
    title: 'Permanent Staffing',
    description: 'Find the perfect long-term employees for your business with our comprehensive staffing solutions.'
  },
  {
    icon: 'fa-clock',
    title: 'Temporary Staffing',
    description: 'Flexible staffing solutions to meet your short-term and seasonal workforce needs.'
  },
  {
    icon: 'fa-search',
    title: 'Executive Search',
    description: 'Connect with top-tier executive talent to lead your organization to success.'
  },
  {
    icon: 'fa-building',
    title: 'HR Consulting',
    description: 'Expert HR services to optimize your workforce and improve organizational performance.'
  },
];

const testimonials = [
  {
    quote: "Unique Connections helped us find the perfect candidate for our senior developer position. Their process was efficient and professional.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp"
  },
  {
    quote: "The team at Unique Connections truly understands the job market. They matched me with a company that aligns perfectly with my career goals.",
    author: "Michael Chen",
    role: "Senior Developer"
  },
  {
    quote: "Outstanding service! They found us three excellent candidates within a week when we were in a tight spot.",
    author: "Emily Rodriguez",
    role: "HR Director, InnovateX"
  }
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Connecting <span className="gradient-text">Talent</span> with <span className="gradient-text">Opportunity</span></h1>
            <p className="hero-subtitle">Your trusted partner in recruitment and staffing solutions. We bridge the gap between exceptional talent and leading companies.</p>
            <div className="hero-cta">
              <Link to="/jobs" className="btn btn-primary">Browse Jobs</Link>
              <Link to="/contact" className="btn btn-outline">Hire Talent</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-shape"></div>
            <div className="hero-illustration">
              <img 
                src="https://img.freepik.com/free-vector/recruiting-professionals-studying-candidate-profiles_1262-21427.jpg" 
                alt="Recruitment illustration" 
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive recruitment solutions tailored to your needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card card">
                <div className="service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="learn-more">
                  Learn more <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to find your next opportunity?</h2>
            <p>Join thousands of professionals who found their dream jobs through Unique Connections.</p>
            <div className="cta-buttons">
              <Link to="/jobs" className="btn btn-primary">Browse Jobs</Link>
              <Link to="/contact" className="btn btn-outline">Submit Resume</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Success stories from our candidates and partners</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card card">
                <div className="testimonial-quote">"{testimonial.quote}"</div>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.author}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Trusted By Leading Companies</h2>
          </div>
          <div className="partners-grid">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="partner-logo">
                <div className="logo-placeholder">Company {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 