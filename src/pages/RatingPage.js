import React, { useEffect, useState } from 'react';
import api from '../services/api';

const RatingPage = () => {
  const [stores, setStores] = useState([]);
  const [ratings, setRatings] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStores = async () => {
      setLoading(true);
      try {
        const { data } = await api.get('/user/stores');
        setStores(data);

        // Initialize ratings state with existing ratings if available
        const userRatings = {};
        data.forEach(store => {
          userRatings[store._id] = ''; // Initialize as empty or with existing rating if available
        });
        setRatings(userRatings);
      } catch (error) {
        setError('Error fetching stores.');
        console.error('Error fetching stores:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  const handleRatingChange = (storeId, newRating) => {
    setRatings(prevRatings => ({ ...prevRatings, [storeId]: newRating }));
  };

  const submitRating = async (storeId) => {
   
    const token = localStorage.getItem('token');
    console.log('Token retrieved:', token);
    if (!token) {
      setError('No token found. Please log in.');
      return;
    }

    try {
        await api.post(
          '/user/submit-rating',
          { storeId, rating: ratings[storeId] },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert('Rating submitted successfully!');
    } catch (error) {
      setError('Error submitting rating.');
      console.error('Error submitting rating:', error.response?.data || error.message);
    }
  };

  if (loading) return <p>Loading stores...</p>;

  return (
    <section className="container mx-auto py-10">
      <h2 className="text-2xl font-bold">Rate Your Favorite Stores</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {stores.map((store) => (
          <li key={store._id} className="py-4 border-b flex items-center">
            <div className="flex-1">
              <p>{store.name} - Current Rating: {store.rating || 'No ratings yet'}</p>
            </div>
            <input
              type="number"
              min="1"
              max="5"
              value={ratings[store._id] || ''}
              onChange={(e) => handleRatingChange(store._id, e.target.value)}
              placeholder="Rate 1 to 5"
              className="border rounded p-1 w-16 mr-2"
            />
            <button
              onClick={() => submitRating(store._id)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Submit Rating
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RatingPage;
