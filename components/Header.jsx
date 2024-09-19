import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);
  const [showPages, setShowPages] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('User not logged in');
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
        console.log('User not logged in');
      }
    };

    fetchUserData();
  }, [router]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/memes?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const togglePages = () => setShowPages(!showPages);

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Link href="/">
          <span className={styles.logo}>usedItem</span> 
          <span style={{ color: '#fff' }}>.com.<span style={{ color: '#0ea' }}>ng</span></span>
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li className={router.pathname === '/' ? styles.activeNavItem : ''}>
              <Link href="/">Home</Link>
            </li>
            <li className={router.pathname === '/about' ? styles.activeNavItem : ''}>
              <Link href="/about">About</Link>
            </li>
            <li className={router.pathname === '/memes' ? styles.activeNavItem : ''}>
              <Link href="/memes">Items</Link>
            </li>

            <li className={router.pathname === '/contact' ? styles.activeNavItem : ''}>
              <Link href="/contact">Contact</Link>
            </li>

            {/* FAQ Dropdown */}
            <li>
              <button className={styles.dropdownButton} onClick={togglePages}>
                Pages {showPages ? '-' : '-'}
              </button>
              {showPages && (
                <div className={styles.dropdownContent}>
                  <Link href="/localads"><span>+</span> Local Ads</Link><hr />
                  <Link href="/faq/"><span>+</span> FAQs</Link>
                </div>
              )}
            </li>

            {user ? (
              <Link href="/admin/dashboard" style={{ border: '1px solid #0ea4ff', padding: '2px', borderRadius: '5px', fontWeight: 'bold' }}>
                {user.name} | <span style={{ color: '#ff4' }}>{user.role}</span>
              </Link>
            ) : (
              <li style={{ border: '1px solid #0ea4ff', padding: '2px', borderRadius: '5px', fontWeight: 'bold' }} className={router.pathname === '/admin/register' ? styles.activeNavItem : ''}>
                <Link href="/admin/register">Get started</Link>
              </li>
            )}
          </ul>
        </nav>

        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            placeholder="Search Items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>Search</button>
        </form>
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
