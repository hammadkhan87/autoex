// src/components/common/Splashscreen.jsx
import React from 'react';
import logo from '../../assets/images/logo-placeholder.png';

const Splashscreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-800 to-indigo-900 flex items-center justify-center z-50">
      <div className="text-center">
        <img src={logo} alt="Car Marketplace Logo" className="mx-auto h-20 w-auto mb-6 opacity-90" />
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">CarTrade Pro</h1>
        <p className="text-blue-200 text-lg mb-8">Connecting European Dealers</p>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Splashscreen;