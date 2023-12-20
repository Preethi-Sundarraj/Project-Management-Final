// HomePageDashboard.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import './HomePageDashboard.css'; // Import the CSS file

const HomePageDashboard = () => {
  return (
    <Container className="home-page-container">
      <Typography variant="h3" component="h2" className="home-page-title">
        Welcome to the Project Management System !!
      </Typography>

      {/* Add your content for the home page dashboard */}
      <div>
        {/* Your other content goes here */}
      </div>
    </Container>
  );
};

export default HomePageDashboard;
