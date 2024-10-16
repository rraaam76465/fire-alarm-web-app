import React, { useState } from 'react';
import './CallPage.css'; // Import the corresponding CSS

const CallPage = () => {
  const [firemanContact, setFiremanContact] = useState(null);
  const [loading, setLoading] = useState(false);

  const findNearestFireman = async () => {
    setLoading(true);
    try {
      // Replace this URL with your actual API endpoint
      const response = await fetch('https://api.example.com/nearest-fireman');
      const data = await response.json();
      
      // Assuming the API returns the contact number of the nearest fireman
      if (data && data.contact) {
        setFiremanContact(data.contact);
      } else {
        alert('No fireman available nearby.');
      }
    } catch (error) {
      console.error('Error fetching fireman data:', error);
      alert('Failed to fetch fireman data.');
    } finally {
      setLoading(false);
    }
  };

  const callFireman = () => {
    if (firemanContact) {
      window.open(`tel:${firemanContact}`);
    } else {
      alert('No fireman contact available. Please find a fireman first.');
    }
  };

  return (
    <div className="call-page">
      <h1>Call Nearest Fireman</h1>
      <button onClick={findNearestFireman} disabled={loading}>
        {loading ? 'Finding...' : 'Find Nearest Fireman'}
      </button>
      {firemanContact && (
        <div>
          <p>Nearest Fireman's Contact: {firemanContact}</p>
          <button onClick={callFireman}>Call Fireman</button>
        </div>
      )}
    </div>
  );
};

export default CallPage;
