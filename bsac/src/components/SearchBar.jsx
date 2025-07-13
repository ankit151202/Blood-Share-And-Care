import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    bloodGroup: '',
    city: '',
  });

  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(filters); // Pass filters to parent component
  };

  return (
    <form onSubmit={handleSearch} className="bg-white p-4 shadow-md rounded-lg flex flex-col sm:flex-row items-center gap-4 mb-6">
      <select
        name="bloodGroup"
        value={filters.bloodGroup}
        onChange={handleChange}
        className="border px-4 py-2 rounded w-full sm:w-48"
      >
        <option value="">Select Blood Group</option>
        <option value="A+">A+</option>
        <option value="A−">A−</option>
        <option value="B+">B+</option>
        <option value="B−">B−</option>
        <option value="O+">O+</option>
        <option value="O−">O−</option>
        <option value="AB+">AB+</option>
        <option value="AB−">AB−</option>
      </select>

      <input
        type="text"
        name="city"
        value={filters.city}
        onChange={handleChange}
        placeholder="Enter City"
        className="border px-4 py-2 rounded w-full sm:w-64"
      />

      <button
        type="submit"
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
