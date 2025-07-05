import { Box, Typography, Grid, Card, Chip, Container, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { School, LocationOn, CurrencyExchange, Assessment, EditNote } from '@mui/icons-material';
import { styles } from './styles/ProjectStyles';
import { useTheme } from '@mui/material/styles';

const projects = [
  {
    title: 'Automatic Essay Scoring',
    description: '📝 ML Pipeline with DeBERTa Transformer | 79% Accuracy | 75% Manual Grading Reduction',
    technologies: ['Python', 'Keras', 'TensorFlow', 'JAX', 'DeBERTa-v3', 'Streamlit', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/hetvijoshi/automatic-essay-scoring',
    emoji: '🎯',
    period: 'Jan 2025 – May 2025'
  },
  {
    title: 'Academiverse',
    description: '🎓 Modern Learning Platform | AI-Powered Quiz Generation with OpenAI | 50% Efficiency Boost',
    technologies: ['Spring Boot', 'Next.js', 'AWS RDS', 'AWS S3', 'OpenAI API', 'CircleCI', 'Microsoft Entra ID'],
    githubUrl: 'https://github.com/hetvijoshi/AcademiVerse',
    emoji: '🤖',
    period: '08/2024 – 11/2024'
  },
  {
    title: 'SpotCrime',
    description: '🚨 Real-time Crime Analytics | 40% Data Analysis Reduction | Interactive Heat Maps',
    technologies: ['Tableau Public', 'Next.js', 'Node.js', 'AWS RDS', 'Google App Engine'],
    githubUrl: 'https://github.com/hetvijoshi/SpotCrime',
    emoji: '🗺️',
    period: '10/2024 – 10/2024'
  },
  {
    title: 'GeoCompensate',
    description: '📍 Smart Attendance & Payroll System | 35% Faster Processing | 25% False clock-ins Reduction',
    technologies: ['React Native', 'Node.js', 'MongoDB Atlas', 'Google App Engine', 'Geolocation'],
    githubUrl: 'https://github.com/hetvijoshi/GeoCompensate',
    emoji: '⏰',
    period: '01/2024 – 03/2024'
  },
  {
    title: 'Dutch N Settle',
    description: '💰 Seamless Bill Splitting | Smart Expense Tracking | 30% Enhanced User Security',
    technologies: ['React', 'Node.js', 'MongoDB Atlas', 'Google OAuth', 'Pub/Sub', 'Google App Engine', 'Secret Manager', 'Cloud Functions', 'GitHub Actions'],
    githubUrl: 'https://github.com/hetvijoshi/DutchNSettle',
    emoji: '💸',
    period: '08/2023 – 12/2023'
  },
];

export default function Projects() {
  const theme = useTheme();
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
      sx={styles.section}
      id="projects"
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component={motion.h2}
          variants={itemVariants}
          sx={styles.title}
        >
          Featured Projects
        </Typography>

        <Typography
          variant="body1"
          component={motion.p}
          variants={itemVariants}
          sx={styles.subtitle}
        >
          A collection of projects that showcase my expertise in full-stack development
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                component={motion.div}
                variants={itemVariants}
                sx={styles.card}
              >
                <Box sx={{
                  ...styles.cardHeader,
                  ...styles.getGradient(theme, project.title)
                }}>
                  <Box sx={styles.iconContainer}>
                    {project.title === 'Automatic Essay Scoring' && (
                      <>
                        <EditNote sx={styles.essayScoringIcon} />
                        <Box sx={styles.essayScoringDecoration} />
                        <Box sx={styles.essayScoringGradient} />
                      </>
                    )}
                    {project.title === 'Academiverse' && (
                      <>
                        <School sx={styles.academiverseIcon} />
                        <Box sx={styles.academiverseDecoration} />
                      </>
                    )}
                    {project.title === 'SpotCrime' && (
                      <>
                        <Box sx={styles.spotcrimePattern} />
                        <Assessment sx={styles.spotcrimeAssessmentIcon} />
                        <LocationOn sx={styles.spotcrimeLocationIcon} />
                        <Box sx={styles.spotcrimeFrame} />
                        <Box sx={styles.spotcrimeGradient} />
                      </>
                    )}
                    {project.title === 'GeoCompensate' && (
                      <>
                        <LocationOn sx={styles.geoCompensateIcon} />
                        <Box sx={styles.geoCompensateGradient} />
                      </>
                    )}
                    {project.title === 'Dutch N Settle' && (
                      <>
                        <CurrencyExchange sx={styles.dutchSettleIcon} />
                        <Box sx={styles.dutchSettleOuterCircle} />
                        <Box sx={styles.dutchSettleInnerCircle} />
                      </>
                    )}
                  </Box>
                </Box>

                <Box sx={styles.cardContent}>
                  <Typography variant="h5" sx={styles.projectTitle}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={styles.description}>
                    {project.description}
                  </Typography>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    gap={1}
                    sx={styles.techStack}
                  >
                    {project.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        sx={styles.chip}
                      />
                    ))}
                  </Stack>
                </Box>

                <Stack
                  direction="row"
                  spacing={1}
                  sx={styles.cardActions}
                >
                  <IconButton
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    sx={styles.iconButton}
                  >
                    <GitHubIcon />
                  </IconButton>
                  {project.liveUrl && (
                    <IconButton
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      sx={styles.iconButton}
                    >
                      <LaunchIcon />
                    </IconButton>
                  )}
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
