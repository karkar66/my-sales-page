import React from 'react';
import './Hero.css';
import agentPhoto from '/agent.jpg';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Alex Tan</h1>
          <p>Your trusted property agent in Singapore.</p>
        </div>
        <div className="hero-image">
          <img src={agentPhoto} alt="Alex Tan" />
        </div>
      </div>
    </section>
  );
}
