// src/components/Navbar.jsx
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const linkBase =
  'relative transition-opacity duration-200 hover:opacity-90';
const active =
  'after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-red-600';

const Navbar = () => (
  <nav
    className="
      fixed top-0 inset-x-0 z-50
      flex items-center justify-between
      px-6 py-3 md:px-10
      bg-black/10 backdrop-blur-lg border-b border-white/20
      shadow-lg
    "
  >
    {/* Logo (kept small and responsive) */}
    <Link to="/" className="flex items-center">
      <img
        src={logo}
        alt="Blood Share & Care"
        className="h-11 w-auto md:h-10 border-xl"
      />
    </Link>

    {/* Links */}
    <div className="flex gap-6 text-sm md:text-base font-medium text-black">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : ''}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/donors"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : ''}`
        }
      >
        Find Donor
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : ''}`
        }
      >
        Become Donor
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
