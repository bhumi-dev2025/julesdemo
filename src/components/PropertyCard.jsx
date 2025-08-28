import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <Link to={`/listings/${property.id}`}>
        <img src={property.images[0]} alt={property.title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{property.title}</h3>
          <p className="card-address">{property.address}</p>
          <p className="card-price">₹{property.price} / month</p>
          <div className="card-details">
            <span>{property.bedrooms} Beds</span>
            <span>{property.bathrooms} Baths</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
