// components/BookingForm.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { hotels } from '../data/hotels';
import './BookingForm.css';

function BookingForm() {
  const { id } = useParams();
  const hotel = hotels.find((h) => h.id === parseInt(id));
  const [guestName, setGuestName] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');
  const navigate = useNavigate();

  const handleBooking = (e) => {
    e.preventDefault();
    // Simulate booking success
    navigate(`/confirmation/${hotel.id}, { state: { guestName, hotel } }`);
  };

  if (!hotel) {
    return <div>Hotel not found!</div>;
  }

  return (
    <div className="booking-form">
      <h2>Booking at {hotel.name}</h2>
      <form onSubmit={handleBooking}>
        <label>Full Name:</label>
        <input
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          required
        /><br></br>
        <label>Payment Details:</label>
        <input
          type="text"
          value={paymentDetails}
          onChange={(e) => setPaymentDetails(e.target.value)}
          required
        />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;