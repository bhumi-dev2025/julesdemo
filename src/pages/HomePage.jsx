import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import './HomePage.css';

const HomePage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  // For the carousel, let's just show the first 3 properties as "featured"
  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="homepage-container">
      <Carousel items={featuredProperties} />
      <section className="intro-section">
        <h2>Find Your Next Home</h2>
        <p>
          Welcome to RentHome, the easiest way to find your next rental property.
          Browse our curated listings, view detailed information, and find the home that's right for you.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
