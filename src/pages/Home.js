import React from 'react';
// import 'animate.css';

const Home = () => {
  // Check if the user is authenticated
  const token = localStorage.getItem('token');

  return (
    <section className="container mx-auto py-16 px-4 bg-gradient-to-r  min-h-screen flex items-center justify-center">
      <div className="relative text-center animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-6xl uppercase font-semibold text-gray-900 mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to the Store Rating App
        </h1>
        <p className="text-xl text-gray-700 mb-6 animate__animated animate__fadeIn animate__delay-2s font-serif">
          Discover, Rate, and Review your favorite stores!
        </p>

        {/* Conditionally render based on authentication */}
        {token ? (
          <a
            href="/stores"
            className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s"
          >
            Explore Stores
          </a>
        ) : (
          <div className="animate__animated animate__fadeIn animate__delay-3s">
            <p  className="text-lg text-gray-800 mb-4 font-serif">
              No stores available at the moment. Please{' '}
              <a href="/signup" className="text-blue-600 font-semibold">
                sign up
              </a>{' '}
              to get started!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
