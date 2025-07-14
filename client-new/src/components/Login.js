import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => { 
    e.preventDefault();
    
    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/login', loginData); 
      console.log("Login successful:", response.data);
      
      // Store JWT token in local storage
      localStorage.setItem('token', response.data.token);

      // Redirect to the dashboard or home page after login
      navigate('/dashboard');
    } catch (error)  {
      console.error("Login error:", error);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Don't have an account? <a href="/register">Register here</a></p>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
