import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Stores from './pages/Stores';
import AdminPanel from './pages/AdminPanel';
import UserProfile from './pages/UserProfile';
import StoreOwnerDashboard from './pages/StoreOwnerDashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import RatingPage from './pages/RatingPage'; // Import the RatingPage component

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/owner-dashboard" element={<StoreOwnerDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/rate" element={<RatingPage />} /> {/* Add the route for RatingPage */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
