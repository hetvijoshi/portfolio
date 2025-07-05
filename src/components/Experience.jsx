import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WorkIcon from '@mui/icons-material/Work';
import Link from '@mui/material/Link';

const experiences = [
  {
    title: 'Research Volunteer - Explainable AI for Medical Diagnosis',
    company: 'University of Texas at Arlington',
    companyUrl: 'https://www.uta.edu/',
    period: 'June 2025 – Present',
    achievements: [
      'Engineered XAI evaluation framework with 4 custom metrics (Relative Stability, Maximum Sensitivity, Infidelity, Complexity) on Wisconsin Breast Cancer dataset, establishing medical ML interpretability benchmarks.',
      'Developed comparative analysis of XAI models (SHAP, LIME, EBM) with SVC classifier for Parkinson\'s disease prediction, optimizing explanation techniques for neurological disorder classification.',
      'Implemented statistical validation protocols for heterogeneous medical datasets, enhancing feature reliability and prognostic model trustworthiness across healthcare applications.'
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Aubergine Solutions',
    companyUrl: 'https://www.auberginesolutions.com/',
    period: '12/2020 – 07/2023',
    achievements: [
      'Built microservices resume screening platform using event-driven architecture with AWS Lambda, SQS, DynamoDB; auto-scaling system that processes 150+ resumes daily with 93% accuracy, reducing infrastructure costs by 40%.',
      'Created fault-tolerant API gateway with Express.js, implementing circuit breaker patterns, rate limiting, JWT authentication; handles 230K+ monthly requests with 99.8% uptime and zero breaches.',
      'Led Redis caching optimization using distributed cache-aside pattern, reducing API response times by 63% (230ms to 85ms) for 10K+ daily users.',
      'Integrated secure payment processing with PCI-compliant microservices and Stripe APIs, implementing idempotent transactions processing $50K+ daily revenue at 99.9% success rate.',
      'Implemented enterprise security framework for Django with Apache hardening, OAuth 2.0, RBAC; achieved SOC 2 compliance, reduced security incidents by 30%.'
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
