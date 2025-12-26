import { useMemo, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = useMemo(
    () => [
      { label: 'Home', to: '/' },
      { label: 'About Us', to: '/about' },
      { label: 'Programs', to: '/programs' },
      { label: 'Contact', to: '/contact' },
    ],
    [],
  );

  const isActive = (to: string) => (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to));

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(255,255,255,0.86)',
        color: 'text.primary',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72, gap: 2 }}>
          <Stack
            component={RouterLink}
            to="/"
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 999,
                display: 'grid',
                placeItems: 'center',
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                boxShadow: '0 10px 24px rgba(225, 29, 72, 0.25)',
              }}
            >
              <VolunteerActivismRoundedIcon fontSize="small" />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 900, lineHeight: 1 }}>
                Srinivasa Narasimha Charitable Trust
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1 }}>
                Caring for people. Strengthening communities.
              </Typography>
            </Box>
          </Stack>

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={RouterLink}
                to={item.to}
                color={isActive(item.to) ? 'primary' : 'inherit'}
                sx={{
                  px: 1.5,
                  bgcolor: isActive(item.to) ? 'rgba(225, 29, 72, 0.08)' : 'transparent',
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Button
            component={RouterLink}
            to="/contact?message=Donation%20Request"
            variant="contained"
            color="primary"
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          >
            Donate
          </Button>

          <IconButton
            onClick={() => setIsOpen(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ width: 320 }} role="presentation">
          <Box sx={{ px: 2, py: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
              Menu
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Explore and get involved.
            </Typography>
          </Box>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton
                  component={RouterLink}
                  to={item.to}
                  selected={isActive(item.to)}
                  onClick={() => setIsOpen(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ p: 2 }}>
            <Button
              component={RouterLink}
              to="/contact?message=Donation%20Request"
              variant="contained"
              fullWidth
              onClick={() => setIsOpen(false)}
            >
              Donate
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
