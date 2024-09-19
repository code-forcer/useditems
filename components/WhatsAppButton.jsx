// components/WhatsAppButton.js

import styles from '../styles/WhatsAppButton.module.css';
import { FaWhatsapp } from 'react-icons/fa';
const WhatsAppButton = () => {
  const phoneNumber = "+2348105209452"; // Replace with your WhatsApp number, including country code
  const message = "Hey Hello!, I'm from UsedItems.com.ng, I have a question."; // Optional default message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.whatsappButton}
    >
     <FaWhatsapp/>
    </a>
  );
};

export default WhatsAppButton;
