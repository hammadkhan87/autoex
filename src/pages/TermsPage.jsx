// src/pages/TermsPage.jsx
import React from 'react';

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">Welcome to CarTrade Pro. These terms govern your use of our platform.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Acceptance of Terms</h2>
      <p>By accessing or using the Service, you agree to be bound by these Terms.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Use of Service</h2>
      <p>You agree to use the service only for lawful purposes and in accordance with these Terms.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Disclaimer</h2>
      <p>The service is provided on an "as is" and "as available" basis.</p>
      <p className="mt-6 text-sm text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default TermsPage;