// components/BookingConfirmation.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './BookingConfirmation.css';

function BookingConfirmation() {
  const { state } = useLocation();
  const { guestName, hotel } = state || {};

  if (!hotel || !guestName) {
    return (
      <div className="confirmation">
        <h2>Booking Confirmation</h2>
        {/* <p>Thank you, {guestName}, for booking at {hotel.name}!</p>
        <p>Location: {hotel.location}</p>
        <p>Price per Night: ${hotel.pricePerNight}</p> */}
        <h4>Your booking is confirmed. Enjoy your stay!</h4>
        <button onClick={() => window.print()} >Print Confirmation</button>
      </div>
    );
  }
  return <div>Invalid booking confirmation!</div>;
  
}

export default BookingConfirmation;