// src/pages/about.js
import Footer from '@/components/Footer';
import Header from '../components/Header';
import styles from '../styles/About.module.css';
import Marquee from '@/components/Marquee';

export default function About() {
  return (
    <>
          <Header />
          <Marquee/>
          <div className={styles.container}>
              
     <center><div className={styles.imgcent}> <img src="/displays/3Copy.jpeg" alt="Exclusive Content" /><br/>'A platform for Futarians'</div></center>
              <section className={styles.aboutUsSection}>
    <h1 className={styles.aboutTitle}>About Us</h1>
    <p className={styles.aboutText}>
        Welcome to <span className={styles.bold}>UsedItem.com</span>, the go-to marketplace for students at the Federal University of Technology Akure (FUTA) looking to buy or sell used items at unbeatable prices. We understand the unique needs of our campus community, and we're here to help you find great deals on everything from textbooks to electronics, furniture, and more.
    </p>

    <h2 className={styles.aboutSubheading}>Why Choose Us?</h2>
    <ul className={styles.aboutList}>
        <li className={styles.aboutListItem}><span className={styles.bold}>Affordable Prices:</span> Our platform is designed to help you save money by connecting you with sellers offering quality used items at student-friendly prices.</li>
        <li className={styles.aboutListItem}><span className={styles.bold}>Trustworthy Platform:</span> With glowing reviews from our users and a commitment to transparency, <span className={styles.bold}>UsedItem.com</span> is a trusted platform you can rely on. We've gone the extra mile by securing police attestation, ensuring that every transaction is safe and legitimate.</li>
        <li className={styles.aboutListItem}><span className={styles.bold}>Customer-Centric Policies:</span> We stand by our commitment to customer satisfaction. Our site policy includes a refund option in case the item you purchase doesn't meet your expectations. We believe in fair transactions, and our team is always here to assist you.</li>
    </ul>

    <h2 className={styles.aboutSubheading}>Our Mission</h2>
    <p className={styles.aboutText}>
        At <span className={styles.bold}>UsedItem.com</span>, our mission is to create a reliable and convenient platform where students can easily buy and sell their used items without hassle. We're not just a marketplace; we're a community that supports sustainable living by giving a second life to pre-loved items.
    </p>

    <h2 className={styles.aboutSubheading}>Join Us Today</h2>
    <p className={styles.aboutText}>
        Whether you're looking to declutter your space or find a great deal on something you need, <span className={styles.bold}>UsedItem.com</span> is the perfect place to start. Join our growing community of students who are saving money and making sustainable choices.
    </p>

    <h2 className={styles.aboutSubheading}>Have Questions?</h2>
    <p className={styles.aboutText}>
        We're here to help! If you have any questions or need assistance, don't hesitate to reach out to us. Together, let's make buying and selling used items simple, secure, and satisfying.
    </p>
</section>

          </div>
          <Footer/>
      </>
  );
}
