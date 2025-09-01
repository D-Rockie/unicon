import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    bio: 'With over 15 years of experience in the recruitment industry, Alex leads our team with vision and passion.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Head of Recruitment',
    bio: 'Sarah specializes in tech recruitment and has placed hundreds of candidates in top tech companies.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'HR Consultant',
    bio: 'Michael brings expertise in HR strategy and talent management to help companies build strong teams.',
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'Recruitment Specialist',
    bio: 'Emily focuses on creative and marketing roles, connecting top talent with innovative companies.',
    image: 'https://randomuser.me/api/portraits/women/28.jpg'
  }
];

const milestones = [
  { year: '2010', title: 'Company Founded', description: 'Started with a vision to transform the recruitment industry.' },
  { year: '2013', title: 'First 100 Placements', description: 'Successfully placed our first 100 candidates in their dream jobs.' },
  { year: '2016', title: 'Expanded Nationally', description: 'Opened offices in 3 major cities across the country.' },
  { year: '2020', title: 'Tech Platform Launch', description: 'Launched our proprietary recruitment platform to better serve clients and candidates.' },
  { year: '2023', title: '1000+ Placements', description: 'Celebrated our 1000th successful candidate placement.' },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About <span className="gradient-text">Unique Connections</span></h1>
            <p className="lead">Bridging the gap between exceptional talent and forward-thinking companies since 2010.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story-content">
              <h2>Our Story</h2>
              <p>Founded in 2010, Unique Connections began with a simple yet powerful vision: to transform the way companies find talent and how professionals find their dream jobs. What started as a small recruitment agency has grown into a trusted partner for businesses and job seekers alike.</p>
              <p>Over the years, we've helped thousands of professionals take the next step in their careers and assisted hundreds of companies in building high-performing teams. Our commitment to excellence, integrity, and personalized service has been the cornerstone of our success.</p>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">13+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Candidates Placed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Companies Served</div>
                </div>
              </div>
            </div>
            <div className="about-story-image">
              <div className="image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Our team in action" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Integrity</h3>
              <p>We believe in doing what's right, even when no one is watching. Our reputation is built on trust and transparency.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We continuously seek better ways to connect talent with opportunity through technology and creative solutions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Passion</h3>
              <p>We're passionate about making a difference in people's careers and helping businesses thrive.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaboration</h3>
              <p>We believe in the power of teamwork and building strong, lasting relationships with our clients and candidates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The passionate professionals behind our success</p>
          </div>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-social">
                    <a href="#" aria-label={`Connect with ${member.name} on LinkedIn`}><i className="fab fa-linkedin"></i></a>
                    <a href="#" aria-label={`Email ${member.name}`}><i className="fas fa-envelope"></i></a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>Key milestones in our company's history</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to start your journey with us?</h2>
            <p>Whether you're looking for your next career move or seeking top talent for your team, we're here to help.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
              <Link to="/jobs" className="btn btn-outline">View Open Positions</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}