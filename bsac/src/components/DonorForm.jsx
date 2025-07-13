import React, { useState } from 'react';

const DonorForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    bloodGroup: '',
    phone: '',
    email: '',
    city: '',
    state: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make POST request to your backend API
    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setMessage('Donor registered successfully!');
        setFormData({
          fullName: '',
          age: '',
          bloodGroup: '',
          phone: '',
          email: '',
          city: '',
          state: '',
        });
      } else {
        setMessage(result.message || 'Registration failed!');
      }
    } catch (err) {
      setMessage('Something went wrong!');
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10 border border-gray-200">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Become a Blood Donor</h2>

      {message && (
        <div className="mb-4 p-2 rounded text-white bg-green-500">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />

        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
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
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mt-4 transition duration-200"
        >
          Register as Donor
        </button>
      </form>
    </div>
  );
};

export default DonorForm;
