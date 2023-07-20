import React from 'react';
import AdminDashboard from './AdminDashboard';
import User from './User';

const Dashboard = () => {
    const isAdmin = true; 
    if (isAdmin) {
      return <AdminDashboard />;
    } else {
      return <User/>;
    }
  };

export default Dashboard;
