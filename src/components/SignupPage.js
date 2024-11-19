import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignupPage.css'; 

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    // Simple password matching validation
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.put('http://localhost:3000/.com/signup', {
        email,
        password
      });
      
      if (response.data.success) {
        // Redirect to login after successful signup
        setErrorMessage('Signup failed. Please try again.');
    } else {
        setErrorMessage(response.data.message);
    }
} catch (error) {
    setErrorMessage('Signup successfully.');
        navigate('/');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p style={{ color: 'black' }}>{errorMessage}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/">Login here</a></p>
    </div>
  );
}

export default SignupPage;