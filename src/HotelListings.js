// // src/HotelListings.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// function HotelListings() {
//   const hotels = [
//     { id: 1, name: 'Hotel Sunshine' },
//     { id: 2, name: 'Mountain View Resort' },
//   ];

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Hotel Listings</h2>
//       <ul>
//         {hotels.map((hotel) => (
//           <li key={hotel.id}>
//             <Link to={`/hotel/${hotel.id}`}>{hotel.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default HotelListings;
