import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const token = localStorage.getItem('token');

  // Helper function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className=" text-blue-600 bg-yellow-50 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold">
          <Link to="/" className={`transition font-mono capitalize duration-300 ease-in-out ${isActive('/') ? 'text-red-600' : 'hover:text-red-600'}`}>
            Store Rating App
          </Link>
        </h1>
        <nav className="flex items-center space-x-4 capitalize">
          <Link 
            to="/stores" 
            className={`transition duration-300 ease-in-out ${isActive('/stores') ? 'text-red-600  font-semibold' : 'hover:text-red-600 '}`}
          >
            Stores
          </Link>
          <Link 
            to="/admin" 
            className={`transition duration-300 ease-in-out ${isActive('/admin') ? 'text-red-600  font-semibold' : 'hover:text-red-600 '}`}
          >
            Admin Panel
          </Link>
          <Link 
            to="/profile" 
            className={`transition duration-300 ease-in-out ${isActive('/profile') ? 'text-red-600 font-semibold' : 'hover:text-red-600 '}`}
          >
            Profile
          </Link>
          {token ? (
            <>
              <Link 
                to="/rate" 
                className={`transition duration-300 ease-in-out ${isActive('/rate') ? 'text-red-600  font-semibold' : 'hover:text-red-600 '}`}
              >
                Rate Stores
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  window.location.reload(); // Reload to reflect changes
                }}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className={`transition duration-300 ease-in-out ${isActive('/login') ? 'text-red-600 font-semibold' : 'hover:text-red-600 '}`}
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className={`transition duration-300 ease-in-out ${isActive('/signup') ? 'text-red-600  font-semibold' : 'hover:text-red-600 0'}`}
              >
                Signup
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
