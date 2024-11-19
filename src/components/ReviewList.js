// components/ReviewList.js
import React from 'react';
import './ReviewList.css';

function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      <h3>Guest Reviews</h3>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="review">
            <strong>{review.user}</strong> <span>({review.rating} stars)</span>
            <p>{review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}

export default ReviewList;