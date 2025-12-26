import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#0B1220', color: 'rgba(255,255,255,0.92)' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="row" spacing={1.25} alignItems="center">
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  flexShrink: 0,
                }}
              >
                <VolunteerActivismRoundedIcon sx={{ fontSize: 18, display: 'block' }} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 900, lineHeight: 1 }}>
                  Srinivasa Narasimha Charitable Trust
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  Caring for people. Strengthening communities.
                </Typography>
              </Box>
            </Stack>

            <Typography variant="body2" sx={{ mt: 2, color: 'rgba(255,255,255,0.7)' }}>
              We support underprivileged people across India through healthcare access, education and skills,
              mental well-being, women empowerment, and essentials support—with transparency, accountability, and compassion.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1.5 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link component={RouterLink} to="/about" color="inherit" underline="hover" sx={{ opacity: 0.8 }}>
                About Us
              </Link>
              <Link component={RouterLink} to="/programs" color="inherit" underline="hover" sx={{ opacity: 0.8 }}>
                Our Programs
              </Link>
              <Link
                component={RouterLink}
                to="/contact?message=Volunteering%20Request"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.8 }}
              >
                Volunteer
              </Link>
              <Link
                component={RouterLink}
                to="/contact?message=Donation%20Request"
                color="inherit"
                underline="hover"
                sx={{ opacity: 0.8 }}
              >
                Donate
              </Link>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1.5 }}>
              Contact
            </Typography>
            <Stack spacing={1.25} sx={{ color: 'rgba(255,255,255,0.75)' }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <PlaceOutlinedIcon fontSize="small" />
                <Typography variant="body2">D No: 2-1-950-16, Maheswar Nagar, 2, Yerraguntla 516309</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneOutlinedIcon fontSize="small" />
                <Typography variant="body2">+91 9573216619</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <MailOutlineOutlinedIcon fontSize="small" />
                <Typography variant="body2">srinivasanarasimhatrust@gmail.com</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.12)' }} />
        <Typography variant="body2" sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.62)' }}>
          © {new Date().getFullYear()} Srinivasa Narasimha Charitable Trust. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
