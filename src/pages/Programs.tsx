import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const Programs = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Stack spacing={2.25} sx={{ maxWidth: 820, mx: { md: 'auto' }, textAlign: { xs: 'left', md: 'center' } }}>
          <Typography variant="h3" sx={{ fontWeight: 900 }}>
            Programs — Coming Soon
          </Typography>
          <Typography variant="h6" color="text.secondary">
            We’re preparing detailed information about our programs and how we deliver impact across India.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            If you’d like to volunteer, donate, or partner with us, please reach out via the Contact page.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} sx={{ pt: 1, justifyContent: { md: 'center' } }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardRoundedIcon />}
            >
              Contact us
            </Button>
            <Button component={RouterLink} to="/" variant="outlined" size="large">
              Back to Home
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Programs;
