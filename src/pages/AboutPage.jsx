import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About RentHome</h1>
        <p>Your trusted partner in finding the perfect place to call home.</p>
      </div>
      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At RentHome, our mission is to simplify the rental process through technology, transparency, and trust. We believe that finding a home should be an exciting and stress-free experience. We connect renters with high-quality properties and provide landlords with the tools they need to manage their rentals effectively.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2024, RentHome started as a small project to address the common frustrations found in the rental market. Lengthy paperwork, hidden fees, and unreliable listings were all too common. We set out to build a platform that puts the user first, offering a curated selection of verified properties and a seamless online experience from search to signing.
          </p>
        </div>
        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Verified Listings:</strong> Every property on our platform is verified by our team to ensure quality and accuracy.</li>
            <li><strong>Transparent Pricing:</strong> No hidden fees. The price you see is the price you pay.</li>
            <li><strong>User-Friendly Interface:</strong> Our website is designed to be intuitive and easy to navigate, making your search for a new home as simple as possible.</li>
            <li><strong>Dedicated Support:</strong> Our customer support team is always here to help you with any questions or concerns.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
