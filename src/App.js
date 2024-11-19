// import React from "react";
// // import { Navigate } from "react-router-dom";
// // import LoginPage from "./components/LoginPage";
// // import './App.css';
// // import counterApplication from "./components/counterApplication";
// // import Practice from "./Practice.js";
// function App() {
//   return (
//     <div className="App">
//    <counterApplication/>
      
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <h1>Hello world</h1>
//       </header> */}
//     </div>
//   );
// }

// export default App;

// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import HotelList from './components/HotelList';
// import RoomAvailability from './components/RoomAvailability';
// import BookingForm from './components/BookingForm';
// import BookingConfirmation from './components/BookingConfirmation';
// import AuthPage from './components/AuthPage';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Routes>
//           <Route path="/" element={<HotelList />} />
//           <Route path="/availability/:id" element={<RoomAvailability />} />
//           <Route path="/booking/:id" element={<BookingForm />} />
//           <Route path="/confirmation/:id" element={<BookingConfirmation />} />
//           <Route path="/auth" element={<AuthPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import HotelList from './components/HotelList';
// import HotelDetail from './components/HotelDetail';
// import BookingForm from './components/BookingForm';
// import BookingConfirmation from './components/BookingConfirmation';
// import AuthPage from './components/AuthPage';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Routes>
//           <Route path="/" element={<HotelList />} />
//           <Route path="/hotel/:id" element={<HotelDetail />} />
//           <Route path="/booking/:id" element={<BookingForm />} />
//           <Route path="/confirmation/:id" element={<BookingConfirmation />} />
//           <Route path="/auth" element={<AuthPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import HotelList from './components/HotelList';
import HotelDetail from './components/HotelDetail';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';
import RoomAvailability from './components/RoomAvailability';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HotelList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/hotel/:id" element={<HotelDetail />} />
          <Route path="/booking/:id" element={<BookingForm />} />
          <Route path="/confirmation/:id" element={<BookingConfirmation />} />
          <Route path="/availability/:id" element={<RoomAvailability/>} />
           
        </Routes>
      </div>
    </Router>
  );
}

export default App;

