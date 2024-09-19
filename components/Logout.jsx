import { useRouter } from 'next/router';

export default function Logout() {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the token from localStorage or cookies
    localStorage.removeItem('token');
    router.push('/admin/login'); // Redirect to login page after logout
  };

  return <button onClick={handleLogout} style={{backgroundColor: '#e74c3c',
  color: '#fff',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s'}}>Logout</button>;
}
