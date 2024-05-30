import { Container, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container>
      <Typography variant="h1">Welcome to the Home Page</Typography>
      <Link href="/login" passHref>
        <Button variant="contained" color="primary">Login</Button>
      </Link>
    </Container>
  );
}