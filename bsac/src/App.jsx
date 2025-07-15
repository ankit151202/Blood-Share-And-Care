// App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DonorCard from './components/DonorCard';
import DonorForm from './components/DonorForm';
import SearchBar from './components/SearchBar';
import HomePage from '../src/pages/HomePage';
import FindDonorPage from './pages/FindDonorPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
const App = () => {
  return (
    <>
      <Navbar />
   
     
      
      { <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donors" element={<FindDonorPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        
      </Routes> }
        
     
      <Footer/>
    </>
  );
};

export default App; // ✅ THIS LINE IS REQUIRED
