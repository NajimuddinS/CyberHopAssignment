import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import RightContent from './RightContent';

const DashboardLayout = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-900">
      {/* Sidebar */}
        <Sidebar />

      {/* Main Content */}
        <MainContent />

      {/* Right Content */}
        <RightContent />
    </div>
  );
};

export default DashboardLayout;

