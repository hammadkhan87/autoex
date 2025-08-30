// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRoutes from './AppRoutes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Splashscreen from './components/common/Splashscreen';
import './App.css'; // For any global styles if needed beyond Tailwind

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading or splash screen duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust time or replace with actual auth check logic

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Splashscreen />;
  }

  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-6">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;