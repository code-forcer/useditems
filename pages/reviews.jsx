// pages/reviews.jsx
import Header from '@/components/Header';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import styles from '../styles/Review.module.css';
import Marquee from '@/components/Marquee';
import Footer from '@/components/Footer';

export default function ReviewsPage({ itemId }) {
  return (
    <>
      <Header />
      <Marquee />
      <div className={styles.reviewContainer}>
        <h1><b>Item Reviews</b></h1>
        <ReviewForm itemId={itemId} />
        <ReviewList itemId={itemId} />
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { itemId } = context.query; // Get the itemId from the URL or context

  return {
    props: {
      itemId, // Pass itemId to the page component
    },
  };
}
