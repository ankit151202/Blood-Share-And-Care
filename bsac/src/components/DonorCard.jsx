import React from 'react';

const DonorCard = ({ donor }) => {
  if (!donor) return null;

  const { fullName, bloodGroup, phone, email, city, state } = donor;

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 border border-gray-200 hover:shadow-xl transition duration-300 w-full max-w-md">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-red-600">{fullName}</h2>
        <span className="px-3 py-1 text-white bg-red-500 rounded-full text-sm font-semibold">
          {bloodGroup}
        </span>
      </div>
      <div className="text-gray-700 text-sm space-y-1">
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Location:</strong> {city}, {state}</p>
      </div>
    </div>
  );
};

export default DonorCard;
