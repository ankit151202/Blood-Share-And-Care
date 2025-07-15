
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/logo.png'; 
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <>
    <section className="min-h-screen bg-white text-gray-800 flex flex-col justify-center items-center px-4 md:px-10 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-red-600">
            Blood Share & Care
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Join our life-saving community. Whether you're looking for blood or want to become a donor, we're here to connect and care. One donation can save three lives.
          </p>
            <div className="flex flex-wrap gap-4">
            <Link
              to="/donors"
              className="px-6 py-3 bg-red-600 text-white rounded-full font-medium shadow hover:bg-red-700 transition"
            >
              Find Donor
            </Link>
            <Link
              to="/register"
              className="px-6 py-3 bg-white border-2 border-red-600 text-red-600 rounded-full font-medium hover:bg-red-50 transition"
              >
              Become Donor
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Blood donation illustration"
            className="max-h-96 w-auto"
            />
        </div>
      </div>
    </section>
    
            <SearchBar/>
    
    </>
  );
};

export default HomePage;
