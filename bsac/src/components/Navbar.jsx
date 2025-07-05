import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-red-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
    <Link to="/" className="text-2xl font-bold">BSAC</Link>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/donors" className="hover:underline">Find Donor</Link>
      <Link to="/register" className="hover:underline">Become Donor</Link>
    </div>
  </nav>
);

export default Navbar;
