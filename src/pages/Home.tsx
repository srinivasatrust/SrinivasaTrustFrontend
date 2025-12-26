import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import WomanRoundedIcon from '@mui/icons-material/WomanRounded';

const Home = () => {
  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          color: 'common.white',
          overflow: 'hidden',
          py: { xs: 8, md: 12 },
          backgroundImage:
            'linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(225,29,72,0.55) 100%), url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={2.5}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Chip
                    label="Transparent • Accountable • Human-centered"
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.14)',
                      color: 'rgba(255,255,255,0.92)',
                      border: '1px solid rgba(255,255,255,0.18)',
                      fontWeight: 700,
                    }}
                  />
                </Stack>

                <Typography variant="h2" sx={{ fontWeight: 900, letterSpacing: '-0.02em' }}>
                  Serving with Purpose,
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    {' '}
                    Changing Lives
                  </Box>
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.82)', maxWidth: 720 }}>
                  Across India, we support underprivileged people through Holistic healthcare, education and skills,
                  mental well-being, youth development, women empowerment, and essentials support.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ pt: 1 }}>
                  <Button component={RouterLink} to="/contact?message=Donation%20Request" variant="contained" size="large">
                    Donate now
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/about"
                    variant="outlined"
                    size="large"
                    endIcon={<ArrowForwardRoundedIcon />}
                    sx={{ borderColor: 'rgba(255,255,255,0.7)', color: 'rgba(255,255,255,0.92)' }}
                  >
                    Learn more
                  </Button>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ pt: 3, opacity: 0.95 }}>
                  <Stack spacing={0.25}>
                    <Typography variant="h5" sx={{ fontWeight: 900 }}>
                      1000+
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)' }}>
                      Lives impacted
                    </Typography>
                  </Stack>
                  <Stack spacing={0.25}>
                    <Typography variant="h5" sx={{ fontWeight: 900 }}>
                      100%
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)' }}>
                      Commitment to trust
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  bgcolor: 'rgba(255,255,255,0.10)',
                  border: '1px solid rgba(255,255,255,0.16)',
                  borderRadius: 4,
                  p: 3,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.14em' }}>
                  Trust pledge
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 900, mt: 0.5 }}>
                  Transparent by design.
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.82)', mt: 1.25 }}>
                  We share updates on activities, milestones, and outcomes so supporters can see real impact.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/about"
                  variant="text"
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={{ mt: 2, color: 'rgba(255,255,255,0.92)' }}
                >
                  How we build trust
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Impact Stats */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Stack spacing={1} sx={{ mb: 3 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.16em', fontWeight: 900 }}>
            What we do
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 900 }}>
            Our objectives in action
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900 }}>
            Our work is guided by clear objectives—supporting health and well-being, strengthening education and skills,
            empowering women and youth, and supporting essentials for vulnerable communities.
          </Typography>
        </Stack>

        <Grid container spacing={2.5} sx={{ mb: 2.5, justifyContent: { xs: 'flex-start', md: 'center' } }}>
          {[
            {
              icon: <LocalHospitalRoundedIcon />,
              title: 'Healthcare access',
              body: 'Hospitals, medical camps, preventive awareness, and support for the underprivileged.',
            },
            {
              icon: <PsychologyRoundedIcon />,
              title: 'Mental health',
              body: 'Workshops that address depression and strengthen emotional well-being.',
            },
            {
              icon: <SchoolRoundedIcon />,
              title: 'Education & skills',
              body: 'Life skills, vocational training, and learning support for underprivileged students.',
            },
            {
              icon: <VolunteerActivismRoundedIcon />,
              title: 'Essentials support',
              body: 'Food distribution, clothing support, and basic-need assistance for underprivileged people.',
            },
            {
              icon: <WomanRoundedIcon />,
              title: 'Women empowerment',
              body: 'Self-help groups, skill training, and entrepreneurship opportunities.',
            },
          ].map((item) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card elevation={0} sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" spacing={1.25} alignItems="center">
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 999,
                        display: 'grid',
                        placeItems: 'center',
                        bgcolor: 'rgba(14, 165, 233, 0.10)',
                        color: 'secondary.main',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                      {item.title}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
                    {item.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2.5} sx={{ justifyContent: { xs: 'flex-start', md: 'center' } }}>
          {[
            {
              icon: <GroupsRoundedIcon />,
              value: '1000+',
              label: 'Lives impacted',
              description: 'Delivered help through locally-led programs and partnerships.',
            },
            {
              icon: <VerifiedRoundedIcon />,
              value: '100%',
              label: 'Commitment to trust',
              description: 'Clear reporting, ethical sourcing, and continuous learning.',
            },
          ].map((stat) => (
            <Grid key={stat.label} size={{ xs: 12, md: 4 }}>
              <Card elevation={0} sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" spacing={1.25} alignItems="center">
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 999,
                        display: 'grid',
                        placeItems: 'center',
                        bgcolor: 'rgba(225, 29, 72, 0.10)',
                        color: 'primary.main',
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Box>
                      <Typography variant="h4" sx={{ fontWeight: 900, lineHeight: 1.1 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
                    {stat.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Mission */}
      <Box sx={{ bgcolor: 'rgba(2, 6, 23, 0.03)', py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Stack spacing={1} sx={{ textAlign: 'center', alignItems: 'center' }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.16em', fontWeight: 900 }}>
              Our mission
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 900 }}>
              Why we exist
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              sx={{ maxWidth: 880, mx: 'auto', width: '100%' }}
            >
              To bridge the gap between resources and needs—so every person can thrive with dignity.
            </Typography>
          </Stack>

          <Grid container spacing={4} alignItems="center" sx={{ mt: { xs: 2, md: 4 } }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                alt="Community meeting"
                sx={{
                  width: '100%',
                  height: { xs: 260, sm: 340, md: 420 },
                  objectFit: 'cover',
                  borderRadius: 4,
                  boxShadow: '0 18px 48px rgba(2, 6, 23, 0.15)',
                  border: '1px solid rgba(15, 23, 42, 0.08)',
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.25}>
                <Card elevation={0}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                      Community Empowerment
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 0.75 }}>
                      We collaborate with local communities to understand needs and deliver practical, sustainable support.
                    </Typography>
                  </CardContent>
                </Card>

                <Card elevation={0}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                      Serving India with compassion and accountability
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 0.75 }}>
                      We operate across India to support health, education, and well-being—guided by care, transparency, and accountability.
                    </Typography>
                  </CardContent>
                </Card>

                <Box>
                  <Button component={RouterLink} to="/about" variant="text" endIcon={<ArrowForwardRoundedIcon />}>
                    Read more about our story
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
