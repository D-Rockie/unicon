import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Permanent Recruitment',
    description: 'We connect top talent with leading companies for long-term employment opportunities that match both skills and company culture.',
    features: [
      'Comprehensive candidate screening',
      'Skills and culture fit assessment',
      'Interview coordination',
      'Offer negotiation support'
    ],
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    title: 'Contract Staffing',
    description: 'Flexible staffing solutions to meet your project needs with qualified professionals on a temporary or contract basis.',
    features: [
      'Quick talent deployment',
      'Flexible contract terms',
      'Specialized skill matching',
      'Seamless onboarding'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009c5fdc0a1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    title: 'Executive Search',
    description: 'Specialized recruitment of C-level and senior management professionals for your organization.',
    features: [
      'Confidential search process',
      'Extensive industry network',
      'Thorough vetting',
      'Market intelligence'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    title: 'Campus Recruitment',
    description: 'Connecting companies with fresh talent through campus hiring programs and career fairs.',
    features: [
      'University partnerships',
      'Pre-screened candidates',
      'Assessment centers',
      'Graduate programs'
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 5,
    title: 'RPO Solutions',
    description: 'End-to-end recruitment process outsourcing to streamline your hiring and reduce time-to-hire.',
    features: [
      'Customizable solutions',
      'Scalable recruitment',
      'Technology integration',
      'Performance metrics'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 6,
    title: 'HR Consulting',
    description: 'Strategic HR consulting services to optimize your workforce and organizational structure.',
    features: [
      'Talent strategy',
      'Workforce planning',
      'Compensation analysis',
      'Employee engagement'
    ],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
];

const steps = [
  {
    number: 1,
    title: 'Needs Assessment',
    description: 'We start by understanding your specific hiring needs and requirements.'
  },
  {
    number: 2,
    title: 'Talent Sourcing',
    description: 'Our team sources and screens candidates using multiple channels.'
  },
  {
    number: 3,
    title: 'Interviews & Assessment',
    description: 'We conduct thorough interviews and skill assessments.'
  },
  {
    number: 4,
    title: 'Offer & Onboarding',
    description: 'We assist with offer negotiation and ensure smooth onboarding.'
  }
];

export default function Services() {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Comprehensive Recruitment Services</h1>
          <p>Delivering exceptional talent acquisition solutions tailored to your business needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Discover how we can help you build your dream team</p>
          </div>
          
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>Simple and effective recruitment process</p>
          </div>
          
          <div className="steps">
            {steps.map(step => (
              <div key={step.number} className="step">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to find your next great hire?</h2>
            <p>Get in touch with our recruitment specialists today to discuss your hiring needs.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/jobs" className="btn btn-outline">Browse Jobs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}