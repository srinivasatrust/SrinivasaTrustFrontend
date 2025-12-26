import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const messageFromQuery = useMemo(() => (searchParams.get('message') ?? '').trim(), [searchParams]);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | { type: 'success' | 'error'; message: string }>(null);

  const emailJsConfig = useMemo(
    () => ({
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
    }),
    [],
  );

  useEffect(() => {
    if (!messageFromQuery) return;
    setForm((prev) => ({ ...prev, message: messageFromQuery }));
  }, [messageFromQuery]);

  const canUseEmailJs = Boolean(emailJsConfig.serviceId && emailJsConfig.templateId && emailJsConfig.publicKey);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!canUseEmailJs) {
      setSubmitStatus({
        type: 'error',
        message:
          'Email sending is not configured yet. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.',
      });
      return;
    }

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in your name and message.' });
      return;
    }

    try {
      setIsSending(true);
      await emailjs.send(
        emailJsConfig.serviceId!,
        emailJsConfig.templateId!,
        {
          name,
          message: `${email ? `Email: ${email}\n\n` : ''}${message}`,
        },
        { publicKey: emailJsConfig.publicKey! },
      );

      setSubmitStatus({ type: 'success', message: 'Message sent successfully. We will get back to you soon.' });
      setForm({ name: '', email: '', message: messageFromQuery || '' });
    } catch (err) {
      setSubmitStatus({ type: 'error', message: 'Could not send message right now. Please try again later.' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Stack spacing={1.5} sx={{ textAlign: { xs: 'left', md: 'center' }, mb: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 900 }}>
            Get in Touch
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            noWrap
            sx={{
              maxWidth: 900,
              mx: { md: 'auto' },
              overflow: 'visible',
              textOverflow: 'clip',
              fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.25rem' },
              lineHeight: 1.25,
            }}
          >
            Questions about our programs? Want to volunteer, donate, or collaborate? We’d love to hear from you.
          </Typography>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2.5}>
          <Card elevation={0} sx={{ flex: 1 }}>
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              <Typography variant="h5" sx={{ fontWeight: 900, mb: 2 }}>
                Contact information
              </Typography>

              <Stack spacing={2} sx={{ color: 'text.secondary' }}>
                <Stack direction="row" spacing={1.25} alignItems="flex-start">
                  <PlaceOutlinedIcon sx={{ mt: '2px', color: 'primary.main' }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: 'text.primary', fontWeight: 800 }}>
                      Our office
                    </Typography>
                    <Typography variant="body2">D No: 2-1-950-16, Maheswar Nagar, 2, Yerraguntla 516309</Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1.25} alignItems="flex-start">
                  <PhoneOutlinedIcon sx={{ mt: '2px', color: 'primary.main' }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: 'text.primary', fontWeight: 800 }}>
                      Phone
                    </Typography>
                    <Typography variant="body2">+91 9573216619</Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1.25} alignItems="flex-start">
                  <MailOutlineOutlinedIcon sx={{ mt: '2px', color: 'primary.main' }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: 'text.primary', fontWeight: 800 }}>
                      Email
                    </Typography>
                    <Typography variant="body2">srinivasanarasimhatrust@gmail.com</Typography>
                  </Box>
                </Stack>
              </Stack>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" sx={{ fontWeight: 900, mb: 1 }}>
                How you can help
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Donations help us reach more underprivileged people with essentials and support.
                Volunteering brings time and skills that strengthen our on-ground work.
                Partnering with us enables long-term, scalable programs through shared resources and expertise.
              </Typography>
            </CardContent>
          </Card>

          <Card elevation={0} sx={{ flex: 1 }}>
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              <Typography variant="h5" sx={{ fontWeight: 900, mb: 1 }}>
                Send us a message
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Tell us what you’re interested in—volunteering, donations, partnerships, or program queries.
              </Typography>

              {!canUseEmailJs ? (
                <Alert severity="warning" sx={{ mb: 2 }}>
                  Email sending is not configured yet.
                </Alert>
              ) : null}

              {submitStatus ? (
                <Alert severity={submitStatus.type} sx={{ mb: 2 }}>
                  {submitStatus.message}
                </Alert>
              ) : null}

              <Stack
                component="form"
                spacing={2}
                onSubmit={handleSubmit}
              >
                <TextField
                  label="Name"
                  fullWidth
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                />
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                />
                <TextField
                  label="Message"
                  multiline
                  minRows={4}
                  fullWidth
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                />
                <Button type="submit" variant="contained" size="large" disabled={isSending}>
                  {isSending ? 'Sending…' : 'Send message'}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
