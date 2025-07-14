// client-new/src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ProductListing from './pages/ProductListing';
import ProductPage from './pages/ProductPage';
import { CartProvider } from './context/CartContext';
import Register from './components/Register';
import CartPage from './pages/CartPage'; 
function App() {
  // Check if a user is authenticated by verifying if a JWT token exists in localStorage
  const isAuthenticated = () => {
      return localStorage.getItem('token') !== null;
  };

  return (
      <CartProvider>
          <Router>
              <Navbar /> {/* Navbar will be displayed on all pages */}
              <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<><Home /> <ProductListing /></>} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/cart" element={<CartPage />} />
                  {/* Protected Route for Dashboard */}
                  <Route 
                      path="/dashboard" 
                      element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} 
                  />

                  {/* Product Pages */}
                  <Route path="/product/:id" element={<ProductPage />} />

                  {/* Redirect any unknown routes to the Home page */}
                  <Route path="*" element={<Navigate to="/" />} />
              </Routes>
          </Router>
      </CartProvider>
  );
}

export default App;