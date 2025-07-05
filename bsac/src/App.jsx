// App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DonorCard from './components/DonorCard';
import DonorForm from './components/DonorForm';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import HomePage from './pages/HomePage';
import FindDonorPage from './pages/FindDonorPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donors" element={<FindDonorPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        
      </Routes>
    </>
  );
};

export default App; // ✅ THIS LINE IS REQUIRED
