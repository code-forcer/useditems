import React, { useState } from 'react';
import styles from '../styles/FaqAccordion.module.css';

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if already open
    } else {
      setActiveIndex(index); // Open clicked one
    }
  };

  const faqs = [
    {
      question: "What is UsedItems.com.ng?",
      answer: "UsedItems.com.ng is an online marketplace for students and others to buy and sell used items safely and conveniently."
    },
    {
      question: "How do I register on UsedItems.com.ng?",
      answer: "You can register by clicking the 'Get Started' button on the homepage, filling in your details, and verifying your account via email."
    },
    {
      question: "How does the payment process work?",
      answer: "We use secure payment gateways such as Paystack. Payments are held in escrow until the buyer confirms receipt of the item."
    },
    {
      question: "What items can I sell on the platform?",
      answer: "You can sell various items such as electronics, books, gadgets, clothing, and furniture, as long as they meet our terms of service."
    },
    {
      question: "How do I ensure the safety of my transaction?",
      answer: "We provide escrow services and verification processes to ensure safety. Meet in public places for physical exchanges, and report issues within 48 hours."
    },
  ];

  return (
    <div className={styles.accordionContainer}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <div className={styles.accordion}>
        {faqs.map((faq, index) => (
          <div className={styles.accordionItem} key={index}>
            <div className={styles.accordionHeader} onClick={() => toggleAccordion(index)}>
              <h3 className={styles.accordionQuestion}>{faq.question}</h3>
              <span className={styles.accordionIcon}>
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className={styles.accordionContent}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
