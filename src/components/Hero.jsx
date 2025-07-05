import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import resumeData from '../data/resumeData.json';

export default function Hero() {
  const { personal } = resumeData;

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 0 }
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '40%',
          height: '90%',
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(79, 70, 229, 0.1) 100%)',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '35%',
          height: '80%',
          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)',
          borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Box
            sx={{
              flex: 1,
              order: { xs: 2, md: 1 },
            }}
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#2563eb',
                  fontWeight: 600,
                  mb: 2,
                  letterSpacing: '0.1em',
                }}
              >
                {personal.subtitle}
              </Typography>
            </motion.div>

            <Typography
              variant="h1"
              component={motion.h1}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(to right, #1a202c, #4a5568)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.02em',
              }}
            >
              {personal.name}
            </Typography>
            
            <Typography
              variant="h2"
              component={motion.h2}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 500,
                mb: 3,
                color: 'text.secondary',
              }}
            >
              {personal.title}
            </Typography>

            <Typography
              variant="body1"
              component={motion.p}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                maxWidth: '600px',
                mb: 4,
                color: 'text.secondary',
                lineHeight: 1.6,
              }}
            >
              {personal.description}
            </Typography>

            <Box
              component={motion.div}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                alignItems: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 2 }}>
                  <Button
                    href={personal.socialLinks.linkedin}
                    target="_blank"
                    startIcon={<LinkedInIcon />}
                    sx={{
                      borderRadius: '50px',
                      padding: '10px 24px',
                      background: '#2563eb',
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      textTransform: 'none',
                      '&:hover': {
                        background: '#1d4ed8',
                      }
                    }}
                  >
                    LinkedIn
                  </Button>

                  <Button
                    href={personal.socialLinks.github}
                    target="_blank"
                    startIcon={<GitHubIcon />}
                    sx={{
                      borderRadius: '50px',
                      padding: '10px 24px',
                      border: '1px solid #2563eb',
                      color: '#2563eb',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      textTransform: 'none',
                      '&:hover': {
                        background: 'rgba(37, 99, 235, 0.05)',
                      }
                    }}
                  >
                    GitHub
                  </Button>
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                  <Button
                    href={personal.socialLinks.linkedin}
                    target="_blank"
                    startIcon={<LinkedInIcon />}
                    sx={{
                      borderRadius: '50px',
                      padding: '10px 24px',
                      background: '#2563eb',
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      textTransform: 'none',
                      '&:hover': {
                        background: '#1d4ed8',
                      }
                    }}
                  >
                    Connect on LinkedIn
                  </Button>

                  <Button
                    href={personal.socialLinks.github}
                    target="_blank"
                    startIcon={<GitHubIcon />}
                    sx={{
                      borderRadius: '50px',
                      padding: '10px 24px',
                      border: '1px solid #2563eb',
                      color: '#2563eb',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      textTransform: 'none',
                      '&:hover': {
                        background: 'rgba(37, 99, 235, 0.05)',
                      }
                    }}
                  >
                    View on GitHub
                  </Button>
                </Box>
              </Box>

              <Button
                component={motion.a}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                href={personal.socialLinks.resume}
                download
                startIcon={<DownloadIcon className="download-icon" />}
                sx={{
                  borderRadius: '50px',
                  padding: '10px 24px',
                  border: '1px solid #2563eb',
                  color: '#2563eb',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  '&:hover': {
                    background: 'rgba(37, 99, 235, 0.05)',
                    '& .download-icon': {
                      transform: 'translateY(2px)',
                    }
                  }
                }}
              >
                Resume
              </Button>
            </Box>
          </Box>

          <Box
            component={motion.div}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            sx={{
              order: { xs: 1, md: 2 },
              position: 'relative',
              width: { xs: '200px', md: '380px' },
              height: { xs: '200px', md: '380px' },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  padding: '4px',
                  background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }
              }}
            >
              <Image
                src={personal.profileImage}
                alt={personal.name}
                fill
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center 40%',
                }}
                priority
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
