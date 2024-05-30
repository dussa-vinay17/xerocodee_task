import { Box, Button, Typography } from '@mui/material';
import { account } from '../lib/appwrite';
import Layout from '../components/Layout';

export default function OAuthLogin() {
  const handleGoogleLogin = () => {
    account.createOAuth2Session('google', 'http://localhost:3000/success', 'http://localhost:3000/failure');
  };

  const handleGitHubLogin = () => {
    account.createOAuth2Session('github', 'http://localhost:3000/success', 'http://localhost:3000/failure');
  };

  return (
    <Layout>
      <Box
        sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography component="h1" variant="h5">
          OAuth Login
        </Typography>
        <Button
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleGoogleLogin}
        >
          Login with Google
        </Button>
        <Button
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleGitHubLogin}
        >
          Login with GitHub
        </Button>
      </Box>
    </Layout>
  );
}
