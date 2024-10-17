import React, { useState } from 'react';
import './SettingsPage.css'; 

const SettingsPage = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    document.body.className = e.target.value; 
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>

      {/* Profile Settings */}
      <section>
        <h2>Profile Settings</h2>
        <button>Edit Profile</button>
        <button>Change Password</button>
      </section>

      {/* Notifications */}
      <section>
        <h2>Notifications</h2>
        <label>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
          />
          Enable Notifications
        </label>
      </section>

      {/* Theme Settings */}
      <section>
        <h2>Theme</h2>
        <select value={theme} onChange={handleThemeChange}>
          <option value="light">Light Mode</option>
          <option value="dark">Dark Mode</option>
        </select>
      </section>

      {/* Emergency Contacts */}
      <section>
        <h2>Emergency Contacts</h2>
        <button>Add Emergency Contact</button>
        {/* Display list of emergency contacts here */}
      </section>

      {/* Help and Support */}
      <section>
        <h2>Help and Support</h2>
        <button>Contact Support</button>
        <button>FAQs</button>
      </section>

      {/* App Information */}
      <section>
        <h2>App Information</h2>
        <p>Version: 1.0.0</p>
        <button>Terms of Service</button>
        <button>Privacy Policy</button>
      </section>
    </div>
  );
};

export default SettingsPage;
