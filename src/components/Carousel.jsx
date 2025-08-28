import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setTimeout(goToNext, 5000); // Change slide every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);

  if (!items || items.length === 0) {
    return <div>Loading carousel...</div>;
  }

  return (
    <div className="carousel-container">
      <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item) => (
          <div className="carousel-item" key={item.id}>
            <img src={item.images[0]} alt={item.title} />
            <div className="carousel-caption">
              <h3>{item.title}</h3>
              <p>{item.description.substring(0, 100)}...</p>
              <Link to={`/listings/${item.id}`} className="carousel-button">View Details</Link>
            </div>
          </div>
        ))}
      </div>

      <button onClick={goToPrev} className="carousel-control prev">&#10094;</button>
      <button onClick={goToNext} className="carousel-control next">&#10095;</button>

      <div className="carousel-dots">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
