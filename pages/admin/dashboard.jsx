import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/AdminAuth.module.css';
import Logout from '@/components/Logout';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import axios from 'axios';

import ProfileSidebar from '@/components/ProfileSidebar';
import KYCModal from '@/components/KYCModal';
import CommissionNotification from '@/components/CommissionNotification';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [itemTitle, setitemTitle] = useState('');
  const [itemDescription, setitemDescription] = useState('');
  const [itemPrice, setitemPrice] = useState('');
  const [itemImage, setitemImage] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const router = useRouter();

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!itemTitle || !itemImage) {
      setError('Please provide both a item title and an image.');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(itemImage);
    reader.onloadend = async () => {
      const base64Image = reader.result;

      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemTitle,
          itemDescription,
          itemPrice,
          itemImage: base64Image,
        }),
      });

      if (res.status === 201) {
        setSuccess('Item uploaded successfully!');
        setitemTitle('');
        setitemDescription('');
        setitemPrice('');
        setitemImage(null);
        fetchItems();
      } else {
        const data = await res.json();
        setError(data.error);
      }
    };

    reader.onerror = () => {
      setError('Failed to read the file.');
    };
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get('/api/items/items');
      setItems(response.data);
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`/api/items/${itemId}`);
      setSuccess('Item deleted successfully');
      fetchItems();
    } catch (error) {
      console.error('Failed to delete item:', error);
      setError('Failed to delete item');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    const fetchUserData = async () => {
      const response = await fetch('/api/getuserdetails', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);

        if (data.email === 'codeforcerdev@gmail.com') {
          fetchItems();
        }
      } else {
        localStorage.removeItem('token');
        router.push('/admin/login');
      }
    };

    fetchUserData();
  }, [router]);

  return (
    user && (
      <>
        <Header />
        <div className={styles.authContainer}>
         
          <div>
            <h1 className={styles.title}>Dashboard: Welcome, {user.name}</h1>
            <ProfileSidebar user={user} />
           
            <CommissionNotification />
           <h4 style={{fontWeight: 'bold', color: '#04ea', textDecoration: 'underline' }}>
              Your mini-dashboard
            </h4><br /><br />
            
            {/* Button to open KYC Modal */}
           <button className={styles.kycButton} onClick={handleOpenModal}>Complete KYC</button>
            {/* KYC Modal */}
            {isModalOpen && <KYCModal onClose={handleCloseModal} />}
            <br /><br /><hr />
            

            <form onSubmit={handleUpload} className={styles.authForm}>
              <input
                type="text"
                placeholder="Item Name"
                value={itemTitle}
                onChange={(e) => setitemTitle(e.target.value)}
                className={styles.authInput}
              />
              <textarea
                rows="5"
                cols="5"
                placeholder="Item Description"
                value={itemDescription}
                onChange={(e) => setitemDescription(e.target.value)}
                className={styles.authInput}
              />
              <input
                type="number"
                placeholder="Item Price"
                value={itemPrice}
                onChange={(e) => setitemPrice(e.target.value)}
                className={styles.authInput}
              />
              <h4>
                Item Image: <small>size in kbs</small>
              </h4>
              <input
                type="file"
                onChange={(e) => setitemImage(e.target.files[0])}
                className={styles.authInput}
                accept="image/*"
              />
              {error && <p className={styles.errorMessage}>{error}</p>}
              {success && <p className={styles.successMessage}>{success}</p>}
              <button type="submit" className={styles.authButton}>
                Submit
              </button>
            </form>

            {user.email === 'codeforcerdev@gmail.com' && (
              <div className={styles.adminSection}>
                <h2>All Items</h2>
                <ul className={styles.itemList}>
                  {items.map((item) => (
                    <li key={item._id} className={styles.itemCard}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <p>Price: &#8358;{item.price}</p>
                      <img src={item.image} alt={item.title} className={styles.itemImage} />
                      <button onClick={() => handleDelete(item._id)} className={styles.deleteButton}>
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <br />
            <Logout />
          </div>
        </div>
        <Footer />
      </>
    )
  );
}
