// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/common/ProtectedRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import AddCarPage from './pages/AddCarPage';
import CarListingPage from './pages/CarListingPage';
import CarDetailPage from './pages/CarDetailPage';
import ProfilePage from './pages/ProfilePage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import SupportPage from './pages/SupportPage';
import CookiesPage from './pages/CookiesPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
      <Route path="/add-car" element={<ProtectedRoute><AddCarPage /></ProtectedRoute>} />
      <Route path="/cars" element={<CarListingPage />} />
      <Route path="/cars/buy" element={<CarListingPage saleType="buy" />} />
      <Route path="/cars/sell" element={<CarListingPage saleType="sell" />} />
      <Route path="/car/:id" element={<CarDetailPage />} />
      <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      <Route path="/orders" element={<ProtectedRoute><OrderHistoryPage /></ProtectedRoute>} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/cookies" element={<CookiesPage />} />
      <Route path="*" element={<div className="text-center py-10">Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;