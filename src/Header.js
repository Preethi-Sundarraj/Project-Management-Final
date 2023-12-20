import React, { useState } from 'react';
import { FaRegBell } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import './Header.css';

const Header = ({ notificationMessages }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const clearNotifications = () => {
    // You can add logic here to clear notifications
    setShowNotifications(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h2 className="header-title">Project Management System</h2>
        <div className="header-icons">
          <FaRegBell className="header-icon bell-icon" onClick={toggleNotifications} />
          <CgProfile className="header-icon profile-icon" />
          <div className="notification-box" style={{ display: showNotifications ? 'block' : 'none' }}>
            {notificationMessages && notificationMessages.length > 0 ? (
              <div>
                <ul>
                  {notificationMessages.map((message, index) => (
                    <li key={index}>{message}</li>
                  ))}
                </ul>
                <button onClick={clearNotifications}>Clear Notifications</button>
              </div>
            ) : (
              <p>No notifications</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
