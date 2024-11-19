// // import React, { useState } from 'react';
// // import './RegistrationPage.css'; // Import the CSS file


// // const RegistrationPage = () => {
// //   const [formData, setFormData] = useState({
// //     username: '',
// //     email: '',
// //     password: '',
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Form submitted:', formData);
// //   };

// //   return (
// //     <div className="registration-container">
// //       <h1>Register</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div className="form-group">
// //           <label>Username:</label>
// //           <input
// //             type="text"
// //             name="username"
// //             value={formData.username}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label>Email:</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label>Password:</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <button type="submit" className="register-button">Register</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default RegistrationPage;


import React, { useState } from 'react';
import './RegistrationPage.css'; // Import the CSS file

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    Firstname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="registration-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label>LastNme:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div> */}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default RegistrationPage;
