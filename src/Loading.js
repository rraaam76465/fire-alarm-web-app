// src/Loading.js
import React from 'react';
import './Loading.css'; // Add CSS for styling (next step)

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
