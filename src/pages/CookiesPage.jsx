// src/pages/CookiesPage.jsx
import React from 'react';

const CookiesPage = () => {
  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Cookie Policy</h1>
      <p className="mb-4">We use cookies to improve your experience on our website.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">What are Cookies?</h2>
      <p>Cookies are small text files stored on your device when you visit websites.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Cookies</h2>
      <p>We use cookies for essential functions, analytics, and marketing purposes.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Managing Cookies</h2>
      <p>You can manage or disable cookies in your browser settings.</p>
      <p className="mt-6 text-sm text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default CookiesPage;