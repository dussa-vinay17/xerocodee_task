import { Container, Typography, Button } from '@mui/material';
import { useEffect } from 'react';
import { User } from '../models/user';

export default function Login() {
  const handleLogin = async (provider) => {
    try {
      await User.createOAuth2Session(provider);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container>
      <Typography variant="h1">Login Page</Typography>
      <Button variant="contained" color="primary" onClick={() => handleLogin('google')}>
        Login with Google
      </Button>
      <Button variant="contained" color="primary" onClick={() => handleLogin('github')}>
        Login with GitHub
      </Button>
    </Container>
  );
}