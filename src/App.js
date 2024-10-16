import React from 'react';
import './App.css';
import profilePic from './assets/Profiletest.png';
import addDeviceImg from './assets/add-device.png';
import homeIcon from './assets/home.png'; 
import callIcon from './assets/call.png'; 
import settingsIcon from './assets/settings.png';
import profileIcon from './assets/profile.png';
import notificationImg from './assets/notification.png'; 
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="user-info">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="user-details">
            <h2>Hi Alexis!</h2>
            <p>Saturday, 31 August</p>
          </div>
        </div>
        <div className="notification-icon">
          <img src={notificationImg} alt="Notification" className="notification-img" />
        </div>
      </header>

      {/* Temperature & Status Section */}
      <section className="status-section">
        <div className="temperature-box">
          <h1>30°C</h1>
          <p>Excellent</p>
        </div>
        <div className="status-details">
          <p>400 ppm CO2</p>
          <p>0.05 mg/m³ Smoke</p>
        </div>
      </section>

      {/* Tab Navigation */}
      <nav className="tabs">
        <ul>
          <li className="active">All Devices</li>
          <li>Living Room</li>
          <li>Bedroom</li>
          <li>Kitchen</li>
        </ul>
      </nav>

      {/* Card Layout Section */}
      <section className="card-section">
        <div className="card system-health">
          <h3>System Health</h3>
          <p>Sensor Status: Operational</p>
          <p>Network Status: Operational</p>
          <p>Last Maintenance: August 15, 2024</p>
        </div>
        <div className="card recent-alerts">
          <h3>Recent Alerts</h3>
          <p>2024-08-30 14:23 - Smoke detected in Kitchen</p>
          <p>2024-08-30 11:08 - Heat sensor triggered in Living Room</p>
        </div>
        
        {/* Map Integration */}
        <div className="card map">
          <h3>Map</h3>
          <LoadScript googleMapsApiKey="AIzaSyDgTWegcRBPGd4075qdpTprZeVuSkPH_wU">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={10}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
        <div className="card add-device">
          <img src={addDeviceImg} alt="Add Device" className="add-device-img" />
          <h4>Add Device</h4>
        </div>
      </section>

      {/* Bottom Navigation */}
      <footer className="bottom-nav">
        <ul>
          <li>
            <span role="img" aria-label="home">
              <img src={homeIcon} alt="Home" />
            </span>
            <p>Dashboard</p>
          </li>
          <li>
            <span role="img" aria-label="call">
              <img src={callIcon} alt="Call" />
            </span>
            <p>Call</p>
          </li>
          <li>
            <span role="img" aria-label="settings">
              <img src={settingsIcon} alt="Settings" />
            </span>
            <p>Settings</p>
          </li>
          <li>
            <span role="img" aria-label="profile">
              <img src={profileIcon} alt="Profile" />
            </span>
            <p>Profile</p>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
