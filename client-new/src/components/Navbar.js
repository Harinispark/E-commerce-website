// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>  {/* Add link to Cart */}
            <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
