// src/pages/SupportPage.jsx
import React from 'react';

const SupportPage = () => {
  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Support</h1>
      <p className="mb-4">Need help? We're here for you.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>Email: <a href="mailto:support@cartradepro.com" className="text-blue-600 hover:underline">support@cartradepro.com</a></p>
      <p>Phone: +31 20 123 4567 (Mon-Fri, 9am-5pm CET)</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Frequently Asked Questions</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>How do I register?</li>
        <li>How do I list a car for sale?</li>
        <li>How do I make an offer on a car?</li>
        <li>What are the fees?</li>
      </ul>
    </div>
  );
};

export default SupportPage;