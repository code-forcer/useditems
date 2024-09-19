import styles from '../styles/Footer.module.css';
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
     
      <div className={styles.container}>
        <img src="/displays/3Copy.jpeg" style={{ width: '25%', borderRadius: '2px' }} alt="Exclusive Content" />
       <div style={{padding:'2px',textDecoration:'underline'}}>'A platform for Futarians'</div>
        <hr />
        <div className={styles.socialIcons}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaLinkedin />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaFacebookF />
          </a>
        </div>
        <p className={styles.footerText}>© 2024 <span style={{color:'#0ea4ff'}}>usedItems.com.ng </span> - All Rights Reserved, <a href="/policy" target="_blank" style={{color:'#0ea',textDecoration:'underline'}}>Our-policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
