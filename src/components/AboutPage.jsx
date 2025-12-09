import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css"; 

function AboutPage() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About FLEUR</h1>
        <p>Crafting lasting floral memories with dried botanicals.</p>
      </header>

      <section className="about-story">
        <div className="story-text">
          <h3>Our Story</h3>
          <p>We started as a small atelier... (add your story).</p>
        </div>
        <div
          className="story-image"
          style={{ backgroundImage: "url('/mnt/data/Web Design.jpg')" }}
        />
      </section>

      <section id="services" className="about-services">
        <h2>Our Services</h2>
        <p>Full-service floral design & curated collections.</p>
        <div className="services-grid">
          <ServiceCard title="Custom Bouquets" href="/collections#custom" />
          <ServiceCard title="Event Styling" href="/collections#seasonal" />
          <ServiceCard title="Gift Bouquets" href="/collections#gift-ideas" />
          <ServiceCard title="Home Décor" href="/collections#pampas" />
        </div>
      </section>
    </div>
  );
}

// Example ServiceCard
function ServiceCard({ title, href }) {
  return (
    <article className="service-card">
      <Link to={href} className="service-link">
        <div className="service-image" style={{ backgroundImage: "url('/mnt/data/Web Design.jpg')" }} />
        <h4>{title}</h4>
      </Link>
    </article>
  );
}

export default AboutPage;
