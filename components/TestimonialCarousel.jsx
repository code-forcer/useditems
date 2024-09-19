import { useEffect, useRef } from 'react';
import styles from '../styles/TestimonialCarousel.module.css';

const testimonials = [
  {
    text: "I saved a lot of money by buying second-hand books from UsedItem!",
    student: "Student A",
    image: "/testimony/test1.jpg", // Adjust to your image path
  },
  {
    text: "I easily sold my old phone and got cash within days.",
    student: "Student B",
    image: "/testimony/test2.jpg", // Adjust to your image path
    },
  {
    text: "I easily sold my old phone and got cash within days.",
    student: "Student c",
    image: "/testimony/test3.jpg", // Adjust to your image path
  },
  // Add more testimonials if needed
];

const TestimonialCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          top: 0,
          left: 200, // Adjust for smooth scrolling speed
          behavior: 'smooth',
        });
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className={styles.carouselContainer}><h1>Testimonials</h1>
      <div className={styles.carousel} ref={carouselRef}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <img src={testimonial.image} alt={testimonial.student} className={styles.studentImage} />
            <p className={styles.testimonialText}>{`"${testimonial.text}"`}</p>
            <p className={styles.studentName}>- {testimonial.student}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
