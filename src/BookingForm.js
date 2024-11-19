// // src/BookingForm.js
// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// function BookingForm() {
//   const { id } = useParams();
//   const [guestName, setGuestName] = useState('');
//   const navigate = useNavigate();

//   const handleBooking = (e) => {
//     e.preventDefault();
//     navigate('/confirmation', { state: { hotelId: id, guestName } });
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Booking Form</h2>
//       <form onSubmit={handleBooking}>
//         <div>
//           <label>Guest Name: </label>
//           <input
//             type="text"
//             value={guestName}
//             onChange={(e) => setGuestName(e.target.value)}
//             required
//           />
//         </div>
//         <div style={{ marginTop: '20px' }}>
//           <button type="submit">Confirm Booking</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default BookingForm;
