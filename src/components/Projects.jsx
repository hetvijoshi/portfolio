import { Box, Typography, Grid, Card, Chip, Container, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { School, LocationOn, CurrencyExchange, Assessment, EditNote } from '@mui/icons-material';
import { styles } from './styles/ProjectStyles';
import { useTheme } from '@mui/material/styles';
import resumeData from '../data/resumeData.json';

const getProjectIcon = (iconName) => {
  switch (iconName) {
    case 'EditNote':
      return EditNote;
    case 'School':
      return School;
    case 'Assessment':
      return Assessment;
    case 'LocationOn':
      return LocationOn;
    case 'CurrencyExchange':
      return CurrencyExchange;
    default:
      return School;
  }
};

export default function Projects() {
  const { projects } = resumeData;
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
