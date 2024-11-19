// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   // LOGIN: Handle user login by verifying credentials
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(`http://localhost:3001/users`);
      
//       const user = response.data.find(
//         (u) => u.email === email && u.password === password
//       );

//       if (user) {
//         navigate('/dashboard');
//       } else {
//         setErrorMessage('Login failed. Please check your credentials.');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setErrorMessage('An error occurred. Please try again later.');
//     }
//   };

//   // REGISTER: Add a new user to the database (POST)
//   const handleRegister = async () => {
//     const newUser = { email, password };
//     try {
//       await axios.post('http://localhost:3001/users', newUser);
//       alert('User registered successfully!');
//     } catch (error) {
//       console.error('Error during registration:', error);
//       setErrorMessage('An error occurred during registration.');
//     }
//   };

//   // UPDATE: Update user information (PUT)
//   const handleUpdateUser = async (userId) => {
//     const updatedUser = { email, password };
//     try {
//       await axios.put(`http://localhost:3001/users/${userId}`, updatedUser);
//       alert('User updated successfully!');
//     } catch (error) {
//       console.error('Error updating user:', error);
//       setErrorMessage('An error occurred while updating user information.');
//     }
//   };

//   // DELETE: Delete a user from the database (DELETE)
//   const handleDeleteUser = async (userId) => {
//     try {
//       await axios.delete(`http://localhost:3001/users/${userId}`);
//       alert('User deleted successfully!');
//     } catch (error) {
//       console.error('Error deleting user:', error);
//       setErrorMessage('An error occurred while deleting the user.');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//         <button type="submit">Login</button>
//       </form>

//       <button onClick={handleRegister}>Register</button>

//       <div>
//         <h3>Admin Actions (for demonstration purposes)</h3>
//         <button onClick={() => handleUpdateUser(1)}>Update User</button>
//         <button onClick={() => handleDeleteUser(1)}>Delete User</button>
//       </div>

//       <p>Don't have an account? <a href="/signup">Sign up here</a></p>
//     </div>
//   );
// }

// export default LoginPage;

import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  // POST request to add a new user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { email, username, password };
      await axios.post('http://localhost:5000/users', newUser);
      alert('User added successfully');
    } catch (error) {
      console.error('Error adding user', error);
    }
  };

  // GET request to fetch user data
  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

  // PUT request to update user data
  const updateUser = async (userId) => {
    try {
      const updatedUser = { email, username, password };
      await axios.put(`http://localhost:5000/users/${userId}`, updatedUser);
      alert('User updated successfully');
    } catch (error) {
      console.error('Error updating user', error);
    }
  };

  // DELETE request to delete a user
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/users/${userId}`);
      alert('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Buttons for other operations */}
      <div>
        <button onClick={getUsers}>Get Users</button>
        <button onClick={() => updateUser(1)}>Update User with ID 1</button>
        <button onClick={() => deleteUser(1)}>Delete User with ID 1</button>
      </div>
    </div>
  );
};

export default LoginPage;