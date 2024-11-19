// // src/components/LoginSignup.js

// import React, { useState } from 'react';

// const LoginSignup = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       // Handle login logic
//       console.log("Logging in with", formData);
//     } else {
//       // Handle signup logic
//       console.log("Signing up with", formData);
//     }
//   };

//   return (
//     <div className="login-signup-container">
//       <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
//       <form onSubmit={handleSubmit}>
//         {!isLogin && (
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required={!isLogin}
//             />
//           </div>
//         )}
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
//       </form>
//       <p>
//         {isLogin ? "Don't have an account?" : 'Already have an account?'}
//         <button type="button" onClick={toggleForm}>
//           {isLogin ? 'Sign Up' : 'Login'}
//         </button>
//       </p>
//     </div>
//   );
// };

// export default LoginSignup;
{/* <Route path="/login" element={<AuthPage />} /> 
          <Route path="/signup" element={<AuthPage />} /> */}

          