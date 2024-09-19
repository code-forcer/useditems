import { useState, useEffect } from 'react';
import styles from '../styles/Carousel.module.css';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch slides every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // Change slide every 10 seconds (10,000ms)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.prevButton}>&#10094;</button>
      
      <div className={styles.slide}>
        <img src={slides[currentIndex].image} alt="Carousel Slide" className={styles.image} />
        <div className={styles.textOverlay}>
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
        </div>
      </div>

      <button onClick={nextSlide} className={styles.nextButton}>&#10095;</button>
    </div>
  );
};

export default Carousel;
