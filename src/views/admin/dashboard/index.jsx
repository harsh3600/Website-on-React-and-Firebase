import { useDocumentTitle, useScrollTop } from 'hooks';
import React from 'react';

const Dashboard = () => {
  useDocumentTitle('Adminstrator');
  useScrollTop();

  return (
    <div className="loader">
      <h2>Welcome to admin dashboard</h2>
    </div>
  );
};

export default Dashboard;
