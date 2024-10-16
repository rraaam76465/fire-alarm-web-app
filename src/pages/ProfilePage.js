import React from 'react';
import './ProfilePage.css'; // Ensure you have styles defined in this file

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <h1>Profile</h1>

      {/* Profile Information */}
      <section>
        <h2>Your Information</h2>
        <p>Name: Alexis</p>
        <p>Email: alexis@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>

      {/* Change Password */}
      <section>
        <h2>Change Password</h2>
        <button>Change Password</button>
      </section>

      {/* Emergency Contacts */}
      <section>
        <h2>Emergency Contacts</h2>
        <button>Add Emergency Contact</button>
        {/* Display list of emergency contacts here */}
      </section>
    </div>
  );
};

export default ProfilePage;
