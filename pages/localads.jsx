import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/LocalAds.module.css';
import Header from '@/components/Header';
import Marquee from '@/components/Marquee';
import Footer from '@/components/Footer';

const LocalAds = () => {
  const [ads, setAds] = useState([]);
  const [newAd, setNewAd] = useState({ image: '', title: '', description: '', contact: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch ads from the database when the component loads
  useEffect(() => {
    async function fetchAds() {
      try {
        const response = await axios.get('/api/ads');
        setAds(response.data.data);
      } catch (error) {
        console.error('Error fetching ads:', error);
      }
    }
    fetchAds();
  }, []);

  const handleInputChange = (e) => {
    setNewAd({ ...newAd, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewAd({ ...newAd, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmitAd = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Validation
    if (!newAd.image || !newAd.title || !newAd.description || !newAd.contact) {
      setErrorMessage('All fields are required.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post('/api/ads', newAd);
      setAds([...ads, response.data.data]);
      setNewAd({ image: '', title: '', description: '', contact: '' }); // Clear form
    } catch (error) {
      console.error('Error submitting ad:', error);
      setErrorMessage('Error submitting ad. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <Marquee />
      <div className={styles.container}>
        <h1 className={styles.title}>Local Ads</h1>

        {/* Ad Submission Form */}
        <form className={styles.adForm} onSubmit={handleSubmitAd}>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}

          <div className={styles.inputGroup}>
            <label htmlFor="image">Upload Image:</label>
            <input
              className={styles.input}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              className={styles.input}
              value={newAd.title}
              onChange={handleInputChange}
              placeholder="Enter the title of the ad"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              className={styles.input}
              value={newAd.description}
              onChange={handleInputChange}
              placeholder="Describe your product or service"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="contact">Contact Info:</label>
            <input
              type="text"
              className={styles.input}
              name="contact"
              value={newAd.contact}
              onChange={handleInputChange}
              placeholder="Enter your contact details"
              required
            />
          </div>

          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? 'Posting Ad...' : 'Post Ad'}
          </button>
        </form>
<hr />
        {/* Display Ads */}
        <div className={styles.adsGrid}>
          {ads.length === 0 ? (
            <p>No ads posted yet. Be the first to post an ad!</p>
          ) : (
            ads.map((ad, index) => (
              <div key={index} className={styles.adCard}>
                <img src={ad.image} alt={ad.title} className={styles.adImage} />
                <h3 className={styles.adTitle}>{ad.title}</h3>
                <p className={styles.adDescription}>{ad.description}</p>
                <p className={styles.adContact}>Contact: {ad.contact}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LocalAds;
