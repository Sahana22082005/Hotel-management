// import React from 'react';
// import './HomePage.css';



// const HomePage = () => {
//   return (
//     <div className="home-container">
//       <h1>Welcome to the Home Page</h1>
//       <p>This is a basic homepage built with React.</p>
//       <button>Click Me</button>
//     </div>
//   );
// };

// export default HomePage;


import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';


const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page!!!</h1>
      <p>Best Place To Find And Explore That All You Need.</p>
      <button><Link to="/login">Go to Login</Link></button>
      <a href="/login">Go to Login Page</a>
     
    </div>
  );
};

export default HomePage;
