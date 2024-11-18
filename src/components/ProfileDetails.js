import React from "react";
import {
  FaUserCircle,
  FaSearch,
  FaBellSlash,
  FaImages,
  FaVideo,
  FaFileAlt,
} from "react-icons/fa";
import "./styles/profileDetails.css";

const ProfileDetails = ({ userName,  userStatus }) => {
console.log("use status is and name is", userStatus, userName); 
  return (
    <div className="profile-details">
      <h4 className="section-title text-center">Profile Information</h4>
      <div className="info-item-profile">
        <FaUserCircle size={150} className="info-icon" />
      </div>
      <div className="info-item text-center">
        <strong>{userName}</strong>
      </div>
      <div className="info-item text-center">
        {userStatus === "active" ? (
          <span className="text-warning fw-medium">Online</span>
        ) : (
          <span className="text-danger fw-medium">Offline</span>
        )}
      </div>

      {/* Top Action Icons */}
      <div className="action-icons">
        <div className="icon-item">
          <FaUserCircle size={24} />
          <span>Profile</span>
        </div>
        <div className="icon-item">
          <FaBellSlash size={24} />
          <span>Mute</span>
        </div>
        <div className="icon-item">
          <FaSearch size={24} />
          <span>Search</span>
        </div>
      </div>

      {/* Media, Files, and Links Section */}
      <h5 className="section-title">Media, Files & Links</h5>
      <div className="media-links">
        <button className="capsule-button">
          <FaImages className="capsule-icon" />
          Photos
        </button>
        <button className="capsule-button">
          <FaVideo className="capsule-icon" />
          Videos
        </button>
        <button className="capsule-button">
          <FaFileAlt className="capsule-icon" />
          Files
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
