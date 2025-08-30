// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CarTrade Pro</h3>
            <p className="text-gray-400 text-sm">Europe's growing B2B marketplace for used cars, connecting dealers efficiently.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-white text-sm">How It Works</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white text-sm">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-3">Contact & Newsletter</h4>
            <p className="text-gray-400 text-sm mb-2">Email: info@cartradepro.com</p>
            <div className="mt-2">
              <label htmlFor="newsletter-email" className="sr-only">Newsletter Email</label>
              <div className="flex">
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="Your email"
                  className="px-3 py-2 text-gray-800 rounded-l-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md text-white text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} CarTrade Pro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;