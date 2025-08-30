// src/pages/PrivacyPage.jsx
import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p>We collect information you provide during registration, such as your name, email, company, and VAT number.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <p>We use your information to create and manage your account, facilitate transactions, and communicate with you.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
      <p>We implement industry-standard security measures to protect your data.</p>
      <p className="mt-6 text-sm text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default PrivacyPage;