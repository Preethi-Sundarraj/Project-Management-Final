// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = ({ companyName }) => {
  return (
    <footer>
      &copy; 2023 {companyName} | 
      <a href="/privacy-policy"> Privacy Policy</a> | 
      <a href="/terms-of-service"> Terms of Service</a> | 
      <a href="/channel-partner-terms"> Channel Partner Terms</a> | 
      Copyright &copy;2023 {companyName}. All rights reserved.
    </footer>
  );
};

export default Footer;



