// pages/meme.js

import React ,{useState,useEffect} from 'react';
import { useRouter } from 'next/router'; // Import useRouter for navigation
import Header from '../components/Header';
import clientPromise from '../lib/mongodb';
import styles from '../styles/Memes.module.css';
import Marquee from '@/components/Marquee';
import Footer from '@/components/Footer';

const MemeList = ({ memes }) => {
  const router = useRouter();

  const handleLike = async (memeId) => {
    try {
      const res = await fetch('/api/memes/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ memeId }),
      });

      if (res.ok) {
        window.location.reload(); // Reload to update like count
      }
    } catch (error) {
      console.error('Error liking meme:', error);
    }
  };

  const handleBuy = async (memeId) => {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage

    if (!token) {
      // If user is not logged in, redirect to login page
      router.push('/admin/login');
    } else {
      // If logged in, redirect to checkout page with the selected item ID
      router.push(`/checkout?itemId=${memeId}`);
    }
  };
 const [filteredMemes, setFilteredMemes] = useState(memes);
  const { query } = router.query;

  useEffect(() => {
    if (query) {
      const searchQuery = query.toLowerCase();
      const sortedMemes = memes
        .map((meme) => ({
          ...meme,
          isMatch: meme.title.toLowerCase().includes(searchQuery),
        }))
        .sort((a, b) => b.isMatch - a.isMatch);

      setFilteredMemes(sortedMemes);
    } else {
      setFilteredMemes(memes);
    }
  }, [query, memes]);
  return (
    <>
      <Header />
      <Marquee />
      <div className={styles.memesContainer}>
        <h1>Item Lists</h1>
        {memes.map((meme) => (
          <div className={styles.memeItem} key={meme._id}>
            <h3>
              <span style={{ color: '#0aef', textDecoration: 'underline' }}>Title:</span> {meme.title}
            </h3>
            <img className={styles.memeImage} src={meme.image} alt={meme.title} width="300" />
            <h4>
              <span style={{ color: '#ce1212', textDecoration: 'underline' }}>Item Description:</span> {meme.description || 'None'}.
            </h4>
            <h2>Price: &#8358;{meme.price}</h2>
            <hr />
            <p className={styles.likeSection}>{meme.likes || 0} 👍Likes</p>
            <button className={styles.likeButton} onClick={() => handleLike(meme._id)}>Like</button>
            <button className={styles.buyButton} onClick={() => handleBuy(meme._id)}>Buy</button> {/* Add Buy Button */}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const memes = await db.collection('useditems').find({}).toArray();

    return {
      props: {
        memes: JSON.parse(JSON.stringify(memes)),
      },
    };
  } catch (error) {
    console.error('Error fetching items:', error);
    return {
      props: {
        memes: [],
      },
    };
  }
}

export default MemeList;
