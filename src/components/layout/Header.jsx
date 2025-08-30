// src/components/layout/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
// Make sure your logo file is in the correct path
import logo from '../../assets/images/logo-placeholder.png'; // Or your actual logo path

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        {/* Adjusted padding and height for better spacing */}
        <div className="flex justify-between items-center py-3"> 
          <div className="flex items-center flex-shrink-0">
            {/* Larger logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="CarTrade Pro Logo" className="h-12 md:h-14 w-auto mr-3" /> {/* Increased size */}
              <span className="text-xl md:text-2xl font-bold tracking-tight hidden sm:block">CarTrade Pro</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-1"> {/* Reduced space between nav items */}
            <Link to="/cars" className="text-white hover:bg-blue-600 px-3 md:px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Cars</Link>
            {isAuthenticated && (
              <Link to="/dashboard" className="text-white hover:bg-blue-600 px-3 md:px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Dashboard</Link>
            )}
            {/* Add more main nav items if needed */}
          </nav>

          <div className="flex items-center space-x-2 md:space-x-3"> {/* Adjusted spacing */}
            {isAuthenticated ? (
              <>
                <span className="text-white text-xs md:text-sm hidden md:inline-block truncate max-w-[100px]">Hi, {user?.name || 'Dealer'}</span>
                <Link
                  to="/profile"
                  className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-md text-xs md:text-sm font-medium transition duration-150 ease-in-out"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-md text-xs md:text-sm font-medium transition duration-150 ease-in-out"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white hover:text-blue-200 px-3 py-1.5 rounded-md text-sm font-medium">Login</Link>
                <Link
                  to="/register"
                  className="bg-white text-blue-700 hover:bg-gray-100 px-3 py-1.5 rounded-md text-sm font-medium transition duration-150 ease-in-out shadow-sm"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;