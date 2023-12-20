// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import HomePageDashboard from './HomePageDashboard';
import Header from './Header';
import Footer from './Footer';
import ProjectApproval from './ProjectApproval';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={<HomePageDashboard />} />
          <Route path="/project-approval" element={<ProjectApproval />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;



