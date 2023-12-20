//App.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importing the hook for navigation
import Header from './Header'; // Importing components
import Sidebar from './Sidebar';
import Footer from './Footer';
import './App.css'; // Importing CSS styles

function App() {
  const navigate = useNavigate(); // Initializing the navigation function
  
  // Function to handle navigation to the project-work route
  const handleProject = () => {
    navigate('/project-work'); // Navigate to '/project-work' when button clicked
  };

  return (
    <div className="App">
      {/* Header Component */}
      <Header />
      <div className="main-container">
        {/* Sidebar Component */}
        <Sidebar />
        <div>
          {/* Main Heading */}
          <h1 className="main-heading">Project Management</h1>
          {/* Button for Project Assignment */}
          <div className="button-container">
            <button className="assignment-button" onClick={handleProject}>
              Project Assignment
            </button>
          </div>
        </div>
      </div>
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;



