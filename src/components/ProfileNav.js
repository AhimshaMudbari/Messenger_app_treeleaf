import React from 'react';
import { FaVideo, FaPhoneAlt, FaUserCircle, FaCircle } from 'react-icons/fa';
import './styles/profileNav.css';

const ProfileNav = ({ userId, userStatus, userName }) => {
  return (
    <div className="profile-nav border-bottom">
      <div className="d-flex align-items-center mb-3">
        <FaUserCircle size={40} className="mr-3" />
        <div>
          <strong>{userName}</strong>
          <div>
            {userStatus === 'active' ? (
              <span className="text-warning fw-medium"> Online</span>
            ) : (
              <span className="text-danger fw-medium"> Offline</span>
            )}
          </div>
        </div>
      </div>
      <div className='d-flex gap-2'>
        <button className="btn btn-outline-success"><FaPhoneAlt /></button>
        <button className="btn btn-outline-primary mr-2"><FaVideo /></button>
      </div>
    </div>
  );
};

export default ProfileNav;
