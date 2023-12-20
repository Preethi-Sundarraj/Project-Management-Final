// Router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePageDashboard from './HomePageDashboard';
import ProjectApproval from './ProjectApproval';

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          
         
        </Route>
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default RouterComponent;
