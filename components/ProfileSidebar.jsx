// components/ProfileSidebar.js
import React from 'react';
import styles from '../styles/ProfileSidebar.module.css';

const ProfileSidebar = ({ user }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.profileInfo}>
        <img src={user.avatarUrl || '/profile/3.jpeg'} alt="Profile" className={styles.profileImage} />
        <div className={styles.profileDetails}>
          <h2 className={styles.profileName}>{user.name}</h2>
          <p className={styles.profileEmail}><span>Email:</span> {user.email}</p>
          <p className={styles.profileRole}><span>Role:</span><img src="/radix/fire.svg" width={'30px'} alt="Fire Icon" />{user.role}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProfileSidebar;
