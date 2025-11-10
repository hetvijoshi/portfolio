import { Box, Typography, Grid, Paper, Chip, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import GoogleIcon from '@mui/icons-material/Google';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { aboutStyles } from './styles/AboutStyles';
import resumeData from '../data/resumeData.json';

const getIconComponent = (iconName, color) => {
  const iconProps = { sx: { fontSize: 40, color } };
  
  switch (iconName) {
    case 'CodeIcon':
      return <CodeIcon {...iconProps} />;
    case 'WebIcon':
      return <WebIcon {...iconProps} />;
    case 'PsychologyIcon':
      return <PsychologyIcon {...iconProps} />;
    case 'StorageIcon':
      return <StorageIcon {...iconProps} />;
    case 'CloudIcon':
      return <CloudIcon {...iconProps} />;
    case 'GoogleIcon':
      return <GoogleIcon {...iconProps} />;
    case 'BuildIcon':
      return <BuildIcon {...iconProps} />;
    default:
      return <CodeIcon {...iconProps} />;
  }
};

export default function About() {
  const { about } = resumeData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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
      sx={aboutStyles.section}
      id="about"
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component={motion.h2}
          sx={aboutStyles.mainTitle}
        >
          About Me
        </Typography>

        <Typography
          variant="body1"
          component={motion.p}
          sx={aboutStyles.description}
        >
          {about.description.split('3 years of experience').map((part, index) => 
            index === 0 ? (
              <span key={index}>{part}</span>
            ) : (
              <span key={index}>
                <Box component="span" sx={{
                  backgroundColor: 'rgba(139, 92, 246, 0.15)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontWeight: 700,
                }}>{"3 years of experience"}</Box>
                {part}
              </span>
            )
          )}
        </Typography>

        <Typography
          variant="h3"
          sx={aboutStyles.sectionTitle}
        >
          Education
        </Typography>

        <Grid container spacing={3} sx={aboutStyles.educationGrid}>
          {about.education.map((edu, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                component={motion.div}
                variants={containerVariants}
                elevation={0}
                sx={aboutStyles.educationPaper}
              >
                <Box sx={{
                  ...aboutStyles.decorativeCircle(edu.gradient),
                  ...aboutStyles.decorativeCircles.topRight
                }} />
                <Box sx={{
                  ...aboutStyles.decorativeCircle(edu.gradient),
                  ...aboutStyles.decorativeCircles.bottomRight
                }} />
                <Box sx={{
                  ...aboutStyles.decorativeCircle(edu.gradient),
                  ...aboutStyles.decorativeCircles.topRightSmall
                }} />
                <Box sx={{
                  ...aboutStyles.decorativeCircle(edu.gradient),
                  ...aboutStyles.decorativeCircles.bottomRightMedium
                }} />

                <Box sx={{ position: 'relative' }}>
                  <Typography
                    variant="h6"
                    sx={aboutStyles.degreeTitle}
                  >
                    {edu.degree}
                  </Typography>

                  <Box sx={aboutStyles.infoContainer}>
                    <SchoolIcon
                      sx={aboutStyles.icon}
                    />
                    <Typography
                      variant="body1"
                      sx={aboutStyles.schoolText}
                    >
                      {edu.school}
                    </Typography>
                  </Box>

                  <Box sx={aboutStyles.infoContainer}>
                    <LocationOnIcon
                      sx={aboutStyles.icon}
                    />
                    <Typography
                      variant="body2"
                      sx={aboutStyles.infoText}
                    >
                      {edu.location}
                    </Typography>
                  </Box>

                  <Box sx={aboutStyles.infoContainer}>
                    <CalendarTodayIcon
                      sx={aboutStyles.icon}
                    />
                    <Typography
                      variant="body2"
                      sx={aboutStyles.infoText}
                    >
                      {edu.period}
                    </Typography>
                  </Box>

                  <Box sx={aboutStyles.infoContainer}>
                    <SchoolIcon
                      sx={aboutStyles.icon}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        ...aboutStyles.infoText,
                        backgroundColor: 'rgba(139, 92, 246, 0.15)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontWeight: 600,
                      }}
                    >
                      GPA: {edu.gpa}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="h3"
          sx={aboutStyles.sectionTitle}
        >
          Technical Proficiencies
        </Typography>

        <Grid container spacing={3}>
          {about.skills.map((skill, index) => {
            const gradientMatch = skill.gradient.match(/#([A-Fa-f0-9]{6})/);
            const iconColor = gradientMatch ? `#${gradientMatch[1]}` : '#8B5CF6';
            
            return (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Paper
                component={motion.div}
                variants={containerVariants}
                elevation={0}
                sx={aboutStyles.skillPaper}
              >
                <Box
                  sx={{
                    ...aboutStyles.skillHeader,
                    background: skill.gradient,
                  }}
                />
                <Box sx={aboutStyles.skillIconContainer}>
                  {getIconComponent(skill.icon, iconColor)}
                </Box>
                <Typography variant="h6" sx={aboutStyles.skillTitle}>
                  {skill.category}
                </Typography>
                <Box sx={aboutStyles.skillChipsContainer}>
                  {skill.items.map((item, itemIndex) => (
                    <Chip
                      key={itemIndex}
                      label={item}
                      sx={aboutStyles.skillChip}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
