import { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { User } from '../models/user';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await User.get();
        setUser(userData);
      } catch (error) {
        console.error(error.message);
        router.push('/login');
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    try {
      await User.deleteSession();
      router.push('/login');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container>
      <Typography variant="h1">Dashboard</Typography>
      {user ? (
        <>
          <Typography variant="h2">Welcome, {user.name}</Typography>
          <Button variant="contained" color="primary" onClick={handleLogout}>
            Logout
          </Button>
        </>
      ) : (
        <Typography variant="h2">Loading...</Typography>
      )}
    </Container>
  );
}