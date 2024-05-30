import { Container, CssBaseline } from '@mui/material';

export default function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        {children}
      </Container>
    </>
  );
}
