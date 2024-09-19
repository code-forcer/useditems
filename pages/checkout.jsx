// pages/checkout.js

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Checkout.module.css'; 
import Marquee from '@/components/Marquee';

const Checkout = () => {
  const [item, setItem] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [matricNumber, setMatricNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); // Add phone number
  const [useDispatchRider, setUseDispatchRider] = useState(false);
  const [confirmStolenGoods, setConfirmStolenGoods] = useState(false);
 const [totalPrice, setTotalPrice] = useState(0);
const router = useRouter();
const { itemId } = router.query;

useEffect(() => {
  const fetchItem = async () => {
    try {
      const response = await axios.get(`/api/items/${itemId}`);
      const fetchedItem = response.data;

      setItem(fetchedItem);
      setTotalPrice(Number(fetchedItem.price)); // Ensure price is treated as a number
    } catch (error) {
      console.error('Error fetching item:', error);
    }
  };

  if (itemId) fetchItem();
}, [itemId]);

// Update total price when dispatch rider is toggled
useEffect(() => {
  if (item) {
    const dispatchFee = useDispatchRider ? 300 : 0;
    setTotalPrice(Number(item.price) + Number(dispatchFee)); // Ensure both are treated as numbers
  }
}, [useDispatchRider, item]);


  const handlePayment = () => {
    if (typeof window.PaystackPop === 'undefined') {
      console.error('PaystackPop is not loaded.');
      return;
    }

    const handler = window.PaystackPop.setup({
      key: 'pk_test_b33ea331aba173e76776c77aa94bca5d30e2e910', // Replace with your Paystack public key
      email: email,
      amount: totalPrice * 100, // Amount in kobo
      currency: 'NGN',
      callback: (response) => {
        alert('Payment successful. Transaction reference: ' + response.reference);
        saveTransaction(response.reference); // Save transaction after successful payment
      },
      onClose: () => {
        alert('Payment closed. Please try again.');
      },
    });

    handler.openIframe();
  };

  const saveTransaction = async (transactionReference) => {
    try {
      // Send the collected information to the backend to save
      const response = await axios.post('/api/transactions', {
        name,
        email,
        address,
        matricNumber,
        phoneNumber, // Include the phone number
        itemId,
        price: totalPrice,
        dispatchRider: useDispatchRider,
        transactionReference,
      });
      console.log('Transaction saved:', response.data);
    } catch (error) {
      console.error('Error saving transaction:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && address && matricNumber && phoneNumber && confirmStolenGoods) {
      handlePayment(); // Proceed to payment if all required fields are filled
    } else {
      alert('Please fill in all required fields and confirm the item is not stolen.');
    }
  };

  return (
    <>
      <Header />
      <Marquee />
      <div className={styles.checkoutContainer}>
        <h1 style={{ color: '#ce1212' }}>Checkout</h1>
        {item && (
          <>
            <h2>Buying: {item.title}</h2>
            <h3>
              Price: <span style={{ color: '#0ea4ff', fontWeight: 'bold' }}>&#8358;{item.price}</span>
            </h3>
            <img
              src={item.image}
              style={{ width: '100px', borderBottom: '2px solid #0ea4ff', borderRadius: '5px' }}
              alt="Item Image"
            />
          </>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
          />
          <input
            type="text"
            value={matricNumber}
            onChange={(e) => setMatricNumber(e.target.value)}
            placeholder="Matric Number"
            required
          />
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number" // Add phone number field
            required
          />

          {/* Dispatch rider option */}
          <label className={styles.checkoutOptions}>
            <input
              type="checkbox"
              required 
              checked={useDispatchRider}
              onChange={() => setUseDispatchRider(!useDispatchRider)}
            />
            <h1>Use Dispatch Rider (₦300)</h1>
          </label>

          {/* Confirm item is not stolen */}
          <label className={styles.checkoutOptions}>
            <input
              type="checkbox"
              checked={confirmStolenGoods}
              onChange={() => setConfirmStolenGoods(!confirmStolenGoods)}
              required
            />
           <h1>I confirm that this item is not a stolen good.</h1>
          </label>

          <h3>Total Price: <span style={{ color: '#28a745' }}>&#8358;{totalPrice}</span></h3>

          <button type="submit">Proceed to Payment</button>
        </form>
      </div>

      <div style={{ textAlign: 'center', padding: '10px' }}>
        <br />
        <img src="/comicwebimages/payment.png" alt="Payment Methods" />
      </div>
      <br />
      <Footer />
      {/* Add the Paystack script */}
      <Script src="https://js.paystack.co/v1/inline.js" strategy="beforeInteractive" />
    </>
  );
};

export default Checkout;
