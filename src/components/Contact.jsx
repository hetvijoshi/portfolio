'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      component={motion.section}
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      sx={{
        py: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
      id="contact"
    >
      {/* Main content container */}
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <Typography
          variant="h2"
          component={motion.h2}
          variants={itemVariants}
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            mb: 2,
            textAlign: 'center',
          }}
        >
          Get in Touch
        </Typography>

        <Typography
          variant="body1"
          component={motion.p}
          variants={itemVariants}
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          I&apos;m always open to new opportunities and collaborations.
          Feel free to reach out!
        </Typography>

        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(76, 111, 255, 0.1)'
                  : 'rgba(76, 111, 255, 0.05)',
              px: 4,
              py: 2,
              borderRadius: 2,
              width: 'fit-content'
            }}
          >
            <EmailIcon sx={{ color: '#4C6FFF' }} />
            <Link
              href="mailto:hetvijoshi510@gmail.com"
              sx={{
                textDecoration: 'none',
                color: '#4C6FFF',
                fontWeight: 500,
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              hetvijoshi510@gmail.com
            </Link>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(76, 111, 255, 0.1)'
                  : 'rgba(76, 111, 255, 0.05)',
              px: 4,
              py: 2,
              borderRadius: 2,
              width: 'fit-content'
            }}
          >
            <PhoneIcon sx={{ color: '#4C6FFF' }} />
            <Link
              href="tel:+16824054820"
              sx={{
                textDecoration: 'none',
                color: '#4C6FFF',
                fontWeight: 500,
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              (682)-405-4820
            </Link>
          </Box>

          <Stack
            direction="row"
            spacing={3}
            sx={{
              mt: 2,
              '& a': {
                color: '#4C6FFF',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-2px)'
                }
              }
            }}
          >
            <Link
              href="https://www.linkedin.com/in/hetvi-joshi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link
              href="https://github.com/hetvijoshi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
