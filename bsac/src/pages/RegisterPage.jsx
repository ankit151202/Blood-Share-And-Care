import React from 'react';
import DonorForm from '../components/DonorForm';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Register as a Blood Donor</h1>
        <p className="text-gray-600 mb-6">
          Fill out the form below to become a registered blood donor. Your details will be visible to people who need blood in your area.
        </p>
        <DonorForm />
      </div>
    </div>
  );
};

export default RegisterPage;
