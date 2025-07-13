import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import DonorCard from '../components/DonorCard';

const FindDonorPage = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDonors = async (filters = {}) => {
    setLoading(true);

    let query = '';
    if (filters.bloodGroup) query += `bloodGroup=${filters.bloodGroup}&`;
    if (filters.city) query += `city=${filters.city}`;

    try {
      const res = await fetch(`http://localhost:5000/api/donors?${query}`);
      const data = await res.json();
      setDonors(data);
    } catch (err) {
      console.error('Error fetching donors:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonors(); // Load all donors initially
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Find Blood Donors</h1>

      <SearchBar onSearch={fetchDonors} />

      {loading ? (
        <p className="text-gray-500 mt-6">Loading donors...</p>
      ) : donors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {donors.map((donor) => (
            <DonorCard key={donor._id} donor={donor} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-6">No matching donors found.</p>
      )}
    </div>
  );
};

export default FindDonorPage;
