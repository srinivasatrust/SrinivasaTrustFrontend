import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';

const About = () => {
  const objectiveGroups: Array<{
    title: string;
    icon: React.ReactNode;
    items: string[];
  }> = [
    {
      title: 'Health & well-being',
      icon: <LocalHospitalRoundedIcon />,
      items: [
        'Facilitate healthcare access via hospitals, medical camps, and preventive health awareness for the underprivileged.',
        'Organize mental health workshops to address depression and strengthen emotional well-being.',
      ],
    },
    {
      title: 'Youth & holistic development',
      icon: <PsychologyRoundedIcon />,
      items: [
        'Conduct youth seminars and interactive sessions on health management, positive habits, skills, and personal growth.',
      ],
    },
    {
      title: 'Education, protection & skills',
      icon: <SchoolRoundedIcon />,
      items: [
        'Provide education, life skills, vocational training, and awareness for underprivileged children and vulnerable groups.',
        'Protect children and vulnerable groups from abuse, neglect, and exploitation through awareness and support.',
      ],
    },
    {
      title: 'Essentials & inclusion',
      icon: <VolunteerActivismRoundedIcon />,
      items: [
        'Support marginalized communities, including economically weaker sections, senior citizens, and differently-abled persons.',
        'Provide food distribution without discrimination, and support essential needs like clothing and shelter.',
        'Coordinate basic-need assistance and community support through local partners when required.',
      ],
    },
    {
      title: 'Empowerment',
      icon: <VolunteerActivismRoundedIcon />,
      items: [
        'Promote women empowerment through self-help groups, skill training, and entrepreneurship opportunities.',
      ],
    },
    {
      title: 'Partnerships & public welfare',
      icon: <HandshakeRoundedIcon />,
      items: [
        'Collaborate with government bodies, NGOs, and agencies to implement social welfare projects.',
        'Undertake any other charitable activity permitted under law for public welfare advancement.',
      ],
    },
  ];

  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Stack spacing={2} sx={{ textAlign: { xs: 'left', md: 'center' } }}>
          <Typography variant="h3" sx={{ fontWeight: 900 }}>
            About Srinivasa Narasimha Charitable Trust
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: 900,
              mx: { md: 'auto' },
              whiteSpace: { xs: 'normal', md: 'nowrap' },
            }}
          >
            A public charitable trust working across India with transparency, integrity, compassion, and collaboration.
          </Typography>
          <Stack direction="row" spacing={1} justifyContent={{ md: 'center' }} flexWrap="wrap" useFlexGap>
            <Chip label="Integrity" color="primary" variant="outlined" />
            <Chip label="Transparency" color="primary" variant="outlined" />
            <Chip label="Compassion" color="primary" variant="outlined" />
            <Chip label="Collaboration" color="primary" variant="outlined" />
          </Stack>
        </Stack>

        <Stack spacing={2} sx={{ mt: 5 }}>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 980, mx: { md: 'auto' } }}>
            We support underprivileged communities in India through health, education, essentials support, and empowerment.
            Our work is guided by clear objectives and a commitment to dignity and long-term impact.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 980, mx: { md: 'auto' } }}>
            We believe trust is the currency of social change. We aim to track the use of funds, publish progress updates, and continuously
            improve programs through learning and evaluation.
          </Typography>
        </Stack>

        <Divider sx={{ my: 6 }} />

        <Stack spacing={1.25} sx={{ mb: 3 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.16em', fontWeight: 900 }}>
            Our objectives
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 900 }}>
            What we aim to achieve
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 980 }}>
            These objectives guide our work across health, education, essentials, empowerment, and partnerships.
          </Typography>
        </Stack>

        <Stack spacing={2.5}>
          {objectiveGroups.map((group) => (
            <Card key={group.title} elevation={0}>
              <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems={{ sm: 'center' }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 999,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'rgba(225, 29, 72, 0.10)',
                      color: 'primary.main',
                      flexShrink: 0,
                    }}
                  >
                    {group.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 900 }}>
                    {group.title}
                  </Typography>
                </Stack>

                <Stack component="ul" spacing={1} sx={{ mt: 1.75, pl: 2.25, mb: 0, color: 'text.secondary' }}>
                  {group.items.map((text) => (
                    <Typography component="li" variant="body2" key={text}>
                      {text}
                    </Typography>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>

        <Divider sx={{ my: 6 }} />

        <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} alignItems={{ md: 'center' }} justifyContent="space-between">
          <Stack spacing={0.5}>
            <Typography variant="h5" sx={{ fontWeight: 900 }}>
              Want to support our objectives?
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Donate, volunteer, or partner with us to scale impact.
            </Typography>
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25}>
            <Button
              component={RouterLink}
              to="/contact?message=Donation%20Request"
              variant="contained"
              startIcon={<VolunteerActivismRoundedIcon />}
            >
              Donate
            </Button>
            <Button component={RouterLink} to="/contact" variant="outlined" endIcon={<ArrowForwardRoundedIcon />}>
              Contact us
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
