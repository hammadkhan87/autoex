// src/pages/DashboardPage.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDashboardStats } from '../features/dashboard/dashboardSlice';
import StatCard from '../components/specific/StatCard';

const DashboardPage = () => {
  const { user } = useSelector((state) => state.auth);
  const { stats, loading, error } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboardStats());
  }, [dispatch]);

  if (loading) return <div className="text-center py-10">Loading dashboard...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name || 'Dealer'}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard title="Cars for Sale" value={stats?.carsForSale || 0} />
        <StatCard title="Active Bids" value={stats?.activeBids || 0} />
        <StatCard title="Cars Sold" value={stats?.carsSold || 0} />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
        <p className="text-gray-600">Your recent transactions and activities will appear here.</p>
      </div>
    </div>
  );
};

export default DashboardPage;