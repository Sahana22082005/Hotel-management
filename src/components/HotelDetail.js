// components/HotelDetail.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { hotels } from '../data/hotels';
import { reviews as reviewData } from '../data/reviews';
// import reviews from '../data/reviews';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import './HotelDetail.css';

function HotelDetail() {
  const { id } = useParams();
  const hotel = hotels.find((h) => h.id === parseInt(id));
  const [reviews, setReviews] = useState(reviewData[id] || []);

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  if (!hotel) {
    return <div>Hotel not found!</div>;
  }

  return (
    <div className="hotel-detail">
      <h1>{hotel.name}</h1>
      <h3>Location: {hotel.location}</h3>
      <h3>Available Rooms: {hotel.availableRooms}</h3>
      <h3>Price per Night: ${hotel.pricePerNight}</h3>
      <h3>Rating: {hotel.rating}</h3>

      <Link to={`/booking/${hotel.id}`}>
        <button>Book Now</button>
      </Link>

      <div className="reviews-section">
       <ReviewList reviews={reviews} />
        <ReviewForm hotelId={hotel.id} addReview={addReview} />
      </div>
    </div>
  );
}

export default HotelDetail;