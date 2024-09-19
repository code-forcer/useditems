import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Review.module.css';

export default function ReviewForm({ itemId }) {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [item, setItem] = useState(null); // State to hold item details

  // Fetch item details using itemId
  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(`/api/items/${itemId}`);
        setItem(response.data); // Store the item details in state
      } catch (error) {
        console.error('Failed to fetch item details:', error);
      }
    };

    if (itemId) {
      fetchItemDetails();
    }
  }, [itemId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!itemId) {
      setMessage('Item ID is missing.');
      return;
    }

    try {
      const response = await axios.post('/api/reviews', {
        reviewText,
        rating,
        itemId, // Send itemId with the review
      });
      if (response.status === 201) {
        setMessage('Review submitted successfully');
        setReviewText('');
        setRating(0);
      }
    } catch (error) {
      setMessage('Failed to submit review.');
    }
  };

  return (
    <div className={styles.reviewForm}>
      {/* Display item details including image */}
      {item && (
        <div className={styles.itemDetails}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} className={styles.itemImage} />
          <p>{item.description}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review"
          required
        />
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        >
          <option value="0">Select rating</option>
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>
        <button type="submit">Submit Review</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
