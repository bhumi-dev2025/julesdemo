import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import './ListingsPage.css';

const ListingsPage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  return (
    <div className="listings-container">
      <h2 className="listings-title">All Properties</h2>
      <div className="listings-grid">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default ListingsPage;
