import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-buttons">
        <a
          href="https://wa.me/6591234567"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp"
        >
          WhatsApp Me
        </a>
        <a href="mailto:alex.tan@example.com" className="email">
          alex.tan@example.com
        </a>
        <a href="tel:+6591234567" className="phone">
          +65 9123 4567
        </a>
      </div>
    </section>
  );
}
