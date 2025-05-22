import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WorkIcon from '@mui/icons-material/Work';
import Link from '@mui/material/Link';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Aubergine Solutions',
    companyUrl: 'https://www.auberginesolutions.com/',
    period: '12/2020 – 07/2023',
    achievements: [
      'Created resume screening tool with AWS Lambda and Node.js, processing 150+ resumes daily with 93% accuracy.'
      , 'Developed RESTful APIs using Express.js with JWT authentication, handling 230K+ monthly requests with 99.8% uptime.'
      , 'Enhanced API performance by implementing Redis caching, reducing response times by 63% from 230ms to 85ms.'
      , 'Integrated third-party payment gateways (Stripe) with Node.js backend, processing 1,200+ transactions daily.'
      ,'Migrated a client website to Strapi CMS with React.js, reducing page load time by 32% and increasing conversion rate by 17%.'
      ,'Strengthened Django application by implementing Apache server hardening, securing configuration files and HTTP headers, resulting in 30% reduction in security vulnerabilities.'
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
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
      sx={{ py: 8 }}
      id="experience"
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component={motion.h2}
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            mb: 6,
            textAlign: 'center',
          }}
        >
          Professional Experience
        </Typography>

        {experiences.map((exp, index) => (
          <Box
            key={index}
            component={motion.div}
            variants={itemVariants}
            sx={{
              p: 3,
              mb: 4,
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #E6E1F9',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.3s ease-in-out',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                border: '1px solid #C7BEF6',
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.5rem', md: '2rem' },
                mb: 1,
                color: '#1a365d',
              }}
            >
              {exp.title}
            </Typography>

            <Link
              href={exp.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  mb: 2,
                  color: '#4C6FFF',
                }}
              >
                {exp.company}
              </Typography>
            </Link>

            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(76, 111, 255, 0.05)',
                px: 3,
                py: 1,
                borderRadius: 2,
                mb: 3
              }}
            >
              <WorkIcon sx={{ mr: 1, color: '#4C6FFF' }} />
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  color: 'text.secondary'
                }}
              >
                {exp.period}
              </Typography>
            </Box>

            <Box component="ul" sx={{ m: 0, pl: 3 }}>
              {exp.achievements.map((achievement, i) => (
                <Typography
                  component="li"
                  key={i}
                  variant="body1"
                  sx={{
                    mb: 2,
                    lineHeight: 1.6,
                    '&::marker': {
                      color: '#4C6FFF'
                    }
                  }}
                >
                  {achievement}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
