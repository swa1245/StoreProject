import React, { useState } from 'react';
import api from '../services/api';

const AdminPanel = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleCreateStore = async (e) => {
    e.preventDefault();

    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    try {
      // Include Authorization header with the token
      await api.post(
        '/admin/create-store',
        { name, email, address },
        {
          headers: {
            Authorization: `Bearer ${token}` // Sending token in the header
          }
        }
      );
      alert('Store created successfully!');
    } catch (error) {
      console.error('Error creating store:', error);
    }
  };

  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Admin Panel</h2>
      <form onSubmit={handleCreateStore} className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">Store Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg w-full p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Store Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg w-full p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-lg font-semibold text-gray-700 mb-2">Store Address</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gray-300 rounded-lg w-full p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Create Store
        </button>
      </form>
    </section>
  );
};

export default AdminPanel;
