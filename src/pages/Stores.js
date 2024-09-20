import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Stores = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStores = async () => {
      setLoading(true);
      setError(null);

      // Retrieve token from localStorage
      const token = localStorage.getItem('token');

      try {
        // Send Authorization header if token is required
        const { data } = await api.get('/user/stores', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStores(data);
      } catch (error) {
        setError('Error fetching stores. Please try again later.');
        console.error('Error fetching stores:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  if (loading) {
    return <p className="text-center text-lg text-gray-600">Loading stores...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-600">{error}</p>;
  }

  return (
    <section className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Stores</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map((store) => (
          <li key={store._id} className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 hover:bg-gray-100 transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-800">{store.name}</h3>
            <p className="text-gray-600">Rating: {store.rating}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stores;
