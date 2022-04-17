

import "../components/assets/css/footer.css";
import "../components/assets/css/about/about.css";
import React from 'react';

function About() {
  return (
    <div className="about-container">
      <div className="about-heading">
        <h1>The Dubai Builders</h1>
      </div>
      <div className="about-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque officia
        <br />
        voluptatem fugit maiores minima repellendus aperiam ipsum ad? Quam,
        <br />
        reprehenderit voluptates. Molestiae illo quia nostrum molestias harum
        unde distinctio minus.
      </div>

      <a href="/contact" className="contact-btn">
        Contact
      </a>
    </div>
  );
}

export default About;
