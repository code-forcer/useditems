import React from 'react';
import styles from '../styles/PolicyPage.module.css'; 
import Header from '@/components/Header';
import Marquee from '@/components/Marquee';
import Footer from '@/components/Footer';

const PolicyPage = () => {
  return (
    <>
      <Header />
      <Marquee/>
    <div className={styles.policyContainer}>
      <h1>Terms and condition policy</h1>
      <p>
        Welcome to UsedItem.com. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. By accessing or using our website, you agree to the collection and use of information in accordance with this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We collect information from you when you register on our site, place an order, subscribe to our newsletter, or fill out a form. When ordering or registering on our site, you may be asked to enter your name, email address, phone number, or credit card information. You may, however, visit our site anonymously.
      </p>

      <h2>2. How We Use Your Information</h2>
     
        Any of the information we collect from you may be used in one of the following ways:
        <ul>
          <li>To personalize your experience (your information helps us better respond to your individual needs).</li>
          <li>To process transactions.</li>
          <li>To send periodic emails for updates and promotions.</li>
          <li>To improve customer service (your information helps us more effectively respond to your customer service requests and support needs).</li>
        </ul>
     

      <h2>3. How We Protect Your Information</h2>
      <p>
        We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
      </p>

      <h2>4. Information Disclosure</h2>
      <p>
        We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
      </p>

      <h2>5. Third-Party Links</h2>
      <p>
        Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites.
      </p>

      <h2>6. Changes to Our Privacy Policy</h2>
      <p>
        If we decide to change our privacy policy, we will post those changes on this page.
      </p>

      <h2>7. Contacting Us</h2>
      <p>
        If there are any questions regarding this privacy policy, you may contact us using the information below:
      </p>
      <p>
        Email: <a href="mailto:support@useditems.com.ng"><span style={{color:'#0ea4ff',textDecoration:'underline'}}>support@usedItems.com.ng</span></a>
      </p>

      <h1>Terms of Service</h1>
      <p>
        By using our website, you agree to the following terms and conditions. Please read these terms carefully before using our service.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. Also, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
      </p>

      <h2>2. Modifications to the Service and Prices</h2>
      <p>
        Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the service (or any part or content thereof) without notice at any time.
      </p>

      <h2>3. User Account</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password.
      </p>

      <h2>4. Prohibited Uses</h2>
      <p>
        In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content for any unlawful purpose, to solicit others to perform or participate in any unlawful acts, or to violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        In no event shall UsedItem.com, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
      </p>

      <h2>6. Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
      </p>

      <h2>7. Changes to Terms of Service</h2>
      <p>
        We reserve the right to update, change, or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes.
      </p>

      <h2>8. Contact Information</h2>
      <p>
        Questions about the Terms of Service should be sent to us at <a href="mailto:support@useditems.com.ng"><span style={{color:'#0ea4ff',textDecoration:'underline'}}>support@usedItems.com.ng</span></a>.
      </p>
      </div>
      <Footer/>
      </>
  );
};

export default PolicyPage;
