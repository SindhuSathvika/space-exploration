import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-2xl">Space Exploration</h1>
      <div className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/missions">Missions</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
