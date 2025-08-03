import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [form, setForm] = useState({ fullName: '', phone: '', bloodGroup: '', city: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/donors', form)
      .then(() => setMessage('Donor registered successfully'))
      .catch(() => setMessage('Error registering donor'));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Become a Donor</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="fullName" placeholder="Full Name" className="w-full p-2 border" onChange={handleChange} />
        <input name="phone" placeholder="Phone" className="w-full p-2 border" onChange={handleChange} />
        <input name="bloodGroup" placeholder="Blood Group" className="w-full p-2 border" onChange={handleChange} />
        <input name="city" placeholder="City" className="w-full p-2 border" onChange={handleChange} />
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">Submit</button>
        {message && <p className="text-green-600 mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default RegisterPage;