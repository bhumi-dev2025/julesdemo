import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './DetailsPage.css';

const DetailsPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const { requireAuth } = useAuth();

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const selectedProperty = data.find(p => p.id === parseInt(id));
        setProperty(selectedProperty);
      })
      .catch(error => console.error('Error fetching property details:', error));
  }, [id]);

  const handleBooking = () => {
    if (requireAuth()) {
      // If authentication is successful, proceed with booking logic
      alert('This is where the real booking process would begin!');
    }
  };

  if (!property) {
    return <div>Loading property details...</div>;
  }

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>{property.title}</h1>
        <p className="address">{property.address}</p>
      </div>
      <div className="image-gallery">
        {property.images.map((image, index) => (
          <img key={index} src={image} alt={`${property.title} - view ${index + 1}`} />
        ))}
      </div>
      <div className="details-content">
        <div className="main-content">
          <h2>Description</h2>
          <p>{property.description}</p>
          <h2>Amenities</h2>
          <ul className="amenities-list">
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
          <h2>Location (Placeholder)</h2>
          <div className="map-placeholder">
            <img src="https://i.imgur.com/5g2SVEp.png" alt="Map placeholder" />
          </div>
          <h2>Reviews (Placeholder)</h2>
          <div className="reviews-placeholder">
            <p>"A wonderful place to stay! Very clean and modern. ⭐️⭐️⭐️⭐️⭐️" - Jane D.</p>
            <p>"Great location and friendly owner. Would recommend. ⭐️⭐️⭐️⭐️" - John S.</p>
          </div>
        </div>
        <div className="sidebar">
          <div className="booking-box">
            <h3>₹{property.price} / month</h3>
            <p><strong>{property.bedrooms}</strong> Beds | <strong>{property.bathrooms}</strong> Baths</p>
            <button onClick={handleBooking} className="book-now-button">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
