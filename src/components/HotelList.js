// components/HotelList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { hotels } from '../data/hotels';
import './HotelList.css';

function HotelList() {
  return (
    <div className="hotel-list">
      <h1>Available Hotels</h1>
      <div className="hotels">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="hotel">
            <h2>{hotel.name}</h2>
            <h4>Location: {hotel.location}</h4>
            <h4>Price: ${hotel.pricePerNight} per night</h4>
            <h4>Rating: {hotel.rating}</h4>
            <Link to={`/hotel/${hotel.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelList;