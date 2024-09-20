import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
// import 'animate.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8 || password.length > 16) {
      setErrorMessage('Password must be between 8 and 16 characters.');
      return;
    }
    try {
      await api.post('/auth/signup', { name, email, address, password });
      navigate('/login'); // Redirect to login after successful signup
    } catch (error) {
      setErrorMessage('Signup failed, please try again.');
    }
  };

  return (
    <section className="container mx-auto py-16 px-4 min-h-screen bg-gradient-to-r  flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl transform transition-transform duration-300 ease-in-out hover:shadow-xl">
        <h2 className="text-3xl font-serif font-bold mb-6 text-gray-800 text-center">Sign Up</h2>
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg w-full p-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg w-full p-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border border-gray-300 rounded-lg w-full p-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg w-full p-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out w-full"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
