import React from 'react';
import styles from '../styles/Faq.module.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Marquee from '@/components/Marquee';

const Faq = () => {
    return (
        <>
            <Header />
            <Marquee/>
    <div className={styles.faqContainer}>
      <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>

      <div className={styles.faqItem}>
        <h2 className={styles.faqQuestion}>1. What is UsedItems.com.ng?</h2>
        <p className={styles.faqAnswer}>
          UsedItems.com.ng is an online marketplace that allows users, especially students, to sell and buy used items. Our platform provides a secure and reliable environment for selling second-hand goods, with features like buyer protection, seller verification, and safe payments.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h2 className={styles.faqQuestion}>2. How do I register on UsedItems.com.ng?</h2>
        <p className={styles.faqAnswer}>
          To register, click on the 'Get Started' button on the homepage or the registration link in the header. Fill in your name, email, phone number, and other necessary details. Once completed, an email will be sent to verify your account, and you're ready to start buying or selling.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h2 className={styles.faqQuestion}>3. How does the payment process work?</h2>
        <p className={styles.faqAnswer}>
          We use secure payment gateways such as Paystack for processing payments. Buyers make payments directly through the platform, and we hold the funds in escrow until the item has been delivered and confirmed by the buyer. This ensures the safety of both parties.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h2 className={styles.faqQuestion}>4. What items can I sell on UsedItems.com.ng?</h2>
        <p className={styles.faqAnswer}>
          You can sell any used item that complies with our terms of service. This includes electronics, books, gadgets, clothing, furniture, and more. However, illegal or restricted items such as weapons or counterfeit goods are strictly prohibited.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h2 className={styles.faqQuestion}>5. How do I ensure the safety of my transaction?</h2>
        <p className={styles.faqAnswer}>
          We prioritize the safety of our users by using escrow services and verified user accounts. Both buyers and sellers must follow our guidelines, and we encourage buyers to inspect items before finalizing transactions. We also recommend meeting in safe, public places for physical item exchanges.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h2 className={styles.faqQuestion}>6. What should I do if I received a defective item?</h2>
        <p className={styles.faqAnswer}>
          If you receive a defective or unsatisfactory item, you can report the issue within 48 hours of receiving the item. We will investigate and take appropriate action, which may include issuing a refund or allowing you to return the item.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h2 className={styles.faqQuestion}>7. What is the commission fee for selling items?</h2>
        <p className={styles.faqAnswer}>
          UsedItems.com.ng charges a 5% commission on each sale. This fee is deducted from the final price once the transaction is completed. The commission helps maintain the platform and ensure the quality of service.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h2 className={styles.faqQuestion}>8. How do I contact customer support?</h2>
        <p className={styles.faqAnswer}>
          You can reach our customer support team via the 'Contact Us' page, or send an email to support@useditems.com.ng. We are available 24/7 to assist you with any inquiries or issues.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h2 className={styles.faqQuestion}>9. Is there a refund policy?</h2>
        <p className={styles.faqAnswer}>
          Yes, we offer a refund policy. If the item you purchased does not meet your expectations or is significantly different from the listing, you can apply for a refund within 48 hours of receiving the item. Please check our Refund Policy for more details.
        </p>
      </div>

      <div className={styles.faqItem}>
        <h2 className={styles.faqQuestion}>10. Can I edit or remove my listing?</h2>
        <p className={styles.faqAnswer}>
          Yes, you can edit or remove your listing at any time by going to your dashboard and navigating to your active listings. From there, you can make changes or remove the listing if the item has been sold or is no longer available.
        </p>
      </div>
            </div>
            <Footer/>
    </>
  );
};

export default Faq;
