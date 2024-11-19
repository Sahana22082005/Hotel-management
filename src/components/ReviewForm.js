// components/ReviewForm.js
import React, { useState } from 'react';
import './ReviewForm.css';

function ReviewForm({ hotelId, addReview }) {
  const [user, setUser] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview({ user, rating, comment });
    setUser('');
    setRating(1);
    setComment('');
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input 
        type="text" 
        value={user} 
        onChange={(e) => setUser(e.target.value)} 
        required 
      />
      <label>Rating:</label>
      <select value={rating} onChange={(e) => setRating(e.target.value)} required>
        {[1, 2, 3, 4, 5].map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <label>Comment:</label>
      <textarea 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
        required 
      />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;