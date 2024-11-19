// components/RoomAvailability.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { hotels } from '../data/hotels';
import './RoomAvailability.css';

function RoomAvailability() {
  const { id } = useParams();
  const hotel = hotels.find((h) => h.id === parseInt(id));

  if (!hotel) {
    return <div>Hotel not found!</div>;
  }

  return (
    <div className="availability">
      <h2>{hotel.name}</h2>
      <p>Location: {hotel.location}</p>
      <p>Available Rooms: {hotel.availableRooms}</p>
      <p>Price per Night: ${hotel.pricePerNight}</p>

      {hotel.availableRooms > 0 ? (
        <Link to={`/booking/${hotel.id}`}>
          <button>Book Now</button>
        </Link>
      ) : (
        <p>No rooms available</p>
      )}
    </div>
  );
}

export default RoomAvailability;