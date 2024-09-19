import Header from '../components/Header';
import ComicList from '../components/ComicList';
import Carousel from '../components/Carousel';
import Marquee from '@/components/Marquee';
import styles from '../styles/Home.module.css';
import Footer from '@/components/Footer';
import GetAppSection from '@/components/GetAppSection';
import PopularItemsSection from '@/components/PopularItemsSection';
import DisplayAd from '@/components/DisplayAd';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import WhatsAppButton from '@/components/WhatsAppButton';
import FaqAccordion from '@/components/FaqAccordion';
const Home = () => {
  const slides = [
  {
    image: '/bannerarea/lamp3.avif',
    title: 'Welcome to UsedItem',
    description: 'Buy and sell second-hand items on campus easily.',
  },
  {
    image: '/displays/2.jpeg',
    title: 'Affordable Prices',
    description: 'Get the best deals for quality second-hand items.',
  },
  {
    image: '/bannerarea/lamp3.avif',
    title: 'Fast Transactions',
    description: 'Sell your unused items and get paid quickly.',
  },
];
  const ads = [
  {
    tags: ['Out Soon', 'New Release'],
    title: 'Amazing Product',
    description: 'Get ready for our upcoming amazing product. Stay tuned!',
    imageUrl: '/displays/2.jpeg',
  },
  {
    tags: ['Limited Time', 'Discount'],
    title: 'Special Offer',
    description: 'Don’t miss out on our limited-time special offer!',
    imageUrl:'/displays/1.jpeg',
    },
    {
    tags: ['Soon', 'Soon'],
    title: 'Special Offer',
    description: 'Don’t miss out!',
    imageUrl:'/displays/3.jpeg',
  },
];
  return (
    <div>
      <Header />
      <main style={{ fontFamily: "'Oswald', system-ui", color: '#0ea4ff', padding: '20px' }}>
        <Marquee/>
        {/* imported Section */}
<div className={styles.homepageContainer}>
  <section className={styles.heroSection}>
    <div className={styles.heroText}>
      <h1>Welcome to UsedItems.com.ng</h1>
      <p>Your Trusted Marketplace for Quality Used Items, the go-to marketplace for students at the Federal University of Technology Akure (FUTA) looking to buy or sell used items at unbeatable prices. We understand the unique needs of our campus community, and we're here to help you find great deals on everything from textbooks to electronics, furniture, and more.</p>
      <a href="/admin/register" className={styles.ctaButton}>Start Selling now <img src="/radix/fire.svg" width={'20px'} alt="" srcset="" /></a>
    </div>
    <div className={styles.heroImage}>
      <img src="/displays/3.jpeg" alt="Used items marketplace" />
    </div>
  </section>
     {/* Carousel */}
        <Carousel slides={slides} />

        {/* Popular Comics */}
          <h2 style={{
            fontFamily: "'Oswald', system-ui", padding: '5px', textAlign: 'center', fontWeight:'bold',
    color: '#0ea4ff',textDecoration: 'underline'}}><u>Recent Items</u></h2>
          <img src="/radix/thick-arrow-right.svg" width={'20px'} alt="" srcset="" />
          <ComicList/>
    <br />
  <section className={styles.featuresSection}>
    <h2>Why Choose Us?</h2>
    <div className={styles.features}>
      <div className={styles.featureItem}>
        <img src="/displays/download.png" alt="Affordable prices" />
        <h3>Affordable Prices</h3>
        <p>Find and sell quality items at student-friendly prices.</p>
      </div>
      <div className={styles.featureItem}>
        <img src="/displays/download2.png" alt="Trustworthy platform" />
        <h3>Trustworthy Platform</h3>
        <p>Safe and legitimate transactions with police attestation.</p>
      </div>
      <div className={styles.featureItem}>
        <img src="/displays/download3.png" alt="Customer-centric policies" />
        <h3>Customer-Centric Policies</h3>
        <p>Refunds available if the item doesn’t meet expectations.</p>
      </div>
    </div>
  </section>
          {/* Pagination */}
          <PopularItemsSection/>
          {/* ends here */}
          {/* whatapp icon link */}
          <WhatsAppButton/>
          {/* Display ads */}
          <DisplayAd ads={ads}/>
          {/* ends display ads */}
          <FaqAccordion/>
          {/* Testimonial */}
           <img src="/radix/thick-arrow-right.svg" width={'20px'} alt="" srcset="" />
        <TestimonialCarousel/>
        {/* Get AppSection */}
        <GetAppSection/>
        {/* Ends here */}
          <div style={{ textAlign: 'center',padding:'10px' }}
          >
            <img src="/comicwebimages/payment.png" alt="" srcset="" />
            </div>
          <section className={styles.callToActionSection}>
            <h2><b>Ready to Sell Your Used Items?</b></h2>
            <p>Join the UsedItem.com community today and start listing your items!</p>
            <a href="/admin/register" className={styles.ctaButton}>Get Started</a>
          </section>
  <Footer/>
</div>

        {/* ends here */}
      </main>
    </div>
  );
};

export default Home;
