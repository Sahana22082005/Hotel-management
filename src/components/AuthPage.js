// // components/AuthPage.js
// import React, { useState } from 'react';
// import './AuthPage.css';

// function AuthPage() {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="auth-container">
//       <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
//       <form>
//         {!isLogin && (
//           <>
//             <label>Full Name:</label>
//             <input type="text" name="name" required />
//           </>
//         )}
//         <label>Email:</label>
//         <input type="email" name="email" required />
//         <label>Password:</label>
//         <input type="password" name="password" required />
//         <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
//       </form>
//       <p>
//         {isLogin ? "Don't have an account?" : 'Already have an account?'}
//         <span className="toggle-link" onClick={toggleForm}>
//           {isLogin ? ' Sign Up' : ' Login'}
//         </span>
//       </p>
//     </div>
//   );
// }

// export default AuthPage;
// import React, { useState } from 'react';
// import './AuthPage.css';

// function AuthPage() {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to handle form submission
//     if (isLogin) {
//       console.log('Login form submitted');
//       // Login logic here
//     } else {
//       console.log('Sign-up form submitted');
//       // Sign-up logic here
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
//       <form onSubmit={handleSubmit}>
//         {!isLogin && (
//           <>
//             <label>Full Name:</label>
//             <input type="text" name="name" required />
//           </>
//         )}
//         <label>Email:</label>
//         <input type="email" name="email" required />
//         <label>Password:</label>
//         <input type="password" name="password" required />
//         <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
//       </form>
//       <p>
//         {isLogin ? "Don't have an account?" : 'Already have an account?'}
//         <span className="toggle-link" onClick={toggleForm}>
//           {isLogin ? ' Sign Up' : ' Login'}
//         </span>
//       </p>
//     </div>
//   );
// }

// export default AuthPage;
// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './AuthPage.css';

// function AuthPage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const isLogin = location.pathname === '/login'; // Toggle based on route
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic for login or signup
//     if (isLogin) {
//       console.log('Login form submitted');
//       // Perform login logic
//     } else {
//       console.log('Sign-up form submitted');
//       // Perform signup logic
//     }
//     navigate('/'); // Navigate to home after login/signup
//   };

//   return (
//     <div className="auth-container">
//       <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
//       <form onSubmit={handleSubmit}>
//         {!isLogin && (
//           <>
//             <label>Full Name:</label>
//             <input type="text" name="name" required />
//           </>
//         )}
//         <label>Email:</label>
//         <input type="email" name="email" required />
//         <label>Password:</label>
//         <input type="password" name="password" required />
//         <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
//       </form>
//       <p>
//         {isLogin ? "Don't have an account?" : 'Already have an account?'}
//         <span
//           className="toggle-link"
//           onClick={() => navigate(isLogin ? '/signup' : '/login')}
//         >
//           {isLogin ? ' Sign Up' : ' Login'}
//         </span>
//       </p>
//     </div>
//   );
// }

// export default AuthPage;
// components/AuthPage.js
import React, { useState } from 'react';
import './AuthPage.css';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);  // Toggle between login and sign up
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic
      console.log("Logging in with:", { email, password });
    } else {
      // Handle sign up logic
      console.log("Signing up with:", { name, email, password });
    }
    // Clear inputs after submit
    setEmail('');
    setPassword('');
    setName('');
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={!isLogin}
            />
          </>
        )}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <span className="toggle-link" onClick={toggleForm}>
          {isLogin ? ' Sign Up' : ' Login'}
        </span>
      </p>
    </div>
  );
}

export default AuthPage;