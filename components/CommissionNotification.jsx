import React from 'react';
import styles from '../styles/CommissionNotification.module.css';

const CommissionNotification = () => {
  return (
    <p className={styles.notification}>
      <strong>Note:</strong> We deduct a 5% commission on each uploaded item.
    </p>
  );
};

export default CommissionNotification;
