import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/KYCModal.module.css';

const KYCModal = ({ onClose }) => {
  const [kycData, setKycData] = useState({
    name: '',
    matricNumber: '',
    phoneNumber: '',
    ninDocument: '',
    profileImage: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setKycData({
      ...kycData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setKycData({ ...kycData, profileImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleDocumentChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setKycData({ ...kycData, ninDocument: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Validate form
    if (!kycData.name || !kycData.matricNumber || !kycData.phoneNumber || !kycData.ninDocument || !kycData.profileImage) {
      setErrorMessage('All fields are required.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post('/api/kyc', kycData);
      alert('KYC Verification submitted successfully!');
      onClose();
    } catch (error) {
      console.error('KYC Verification submitted successfully!:', error);
      setErrorMessage('KYC Verification submitted successfully!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>KYC Verification</h2>

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              name="name"
              value={kycData.name}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="matricNumber">Matric Number:</label>
            <input
              type="text"
              name="matricNumber"
              value={kycData.matricNumber}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={kycData.phoneNumber}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="profileImage">Profile Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="ninDocument">Upload NIN Document:</label>
            <input
              type="file"
              accept="application/pdf,image/*"
              onChange={handleDocumentChange}
              required
              className={styles.input}
            />
          </div>

          <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

export default KYCModal;
