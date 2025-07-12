import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex items-center space-x-3">
          <img src="/bsac-logo.png" alt="BSAC Logo" className="h-10 w-10" />
          <span className="text-xl font-bold tracking-wide">
            Blood Share & Care
          </span>
        </div>
        <ul className="flex space-x-6 font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-200 transition duration-200">Home</Link>
          </li>
          <li>
            <Link to="/donors" className="hover:text-yellow-200 transition duration-200">Find Donors</Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-yellow-200 transition duration-200">Become a Donor</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-200 transition duration-200">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
