import { Box, Typography, Grid, Paper, Chip, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { aboutStyles } from './styles/AboutStyles';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of Texas at Arlington',
    location: 'Arlington, Texas',
    period: '08/2023 – 05/2025',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
    gpa: '3.88/4.0'
  },
  {
    degree: 'Bachelor of Technology in Computer Engineering',
    school: 'Dharmsinh Desai University',
    location: 'Gujarat, India',
    period: '07/2017 – 05/2021',
    gradient: 'linear-gradient(135deg, #4158D0 0%, #C850C0 100%)',
    gpa: '3.56/4.0'
  },
];

const skills = [
  {
    category: 'Programming Languages',
    items: ['C#', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'Python'],
    icon: <CodeIcon sx={{ fontSize: 40, color: '#8B5CF6' }} />,
    gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
  },
  {
    category: 'Databases',
    items: ['MS SQL Server', 'Postgres', 'MongoDB', 'MySQL', 'ElasticSearch'],
    icon: <StorageIcon sx={{ fontSize: 40, color: '#0EA5E9' }} />,
    gradient: 'linear-gradient(135deg, #14B8A6 0%, #0EA5E9 100%)',
  },
  {
    category: 'Cloud & DevOps',
    items: ['OpenAI API', 'Microsoft Entra ID', 'AWS ', 'Terraform', 'Google Cloud', 'Docker', 'Kubernetes', 'CircleCI', 'Github Actions'],
    icon: <CloudIcon sx={{ fontSize: 40, color: '#EC4899' }} />,
    gradient: 'linear-gradient(135deg, #F43F5E 0%, #EC4899 100%)',
  },
  {
    category: 'Web & Mobile Technologies',
    items: ['Spring Boot', 'ASP.NET', 'ASP.NET Core', 'Node.js', 'Django', 'Next.js', 'React', 'React Native', 'Angular'],
    icon: <WebIcon sx={{ fontSize: 40, color: '#059669' }} />,
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  },
  {
    category: 'Tools',
    items: ['Jira', 'Confluence', 'GitLab', 'GitHub', 'Bitbucket', 'Postman', 'Figma', 'Strapi'],
    icon: <BuildIcon sx={{ fontSize: 40, color: '#D97706' }} />,
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
  },
];

export default function About() {
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
          I am a Master&apos;s student in Computer Science at the University of Texas at Arlington,
          with a strong foundation in software engineering, cloud computing, and web technologies.
          I bring over 2 years of professional experience in delivering scalable, secure solutions
          across various industries.
        </Typography>

        <Typography
          variant="h3"
          sx={aboutStyles.sectionTitle}
        >
          Education
        </Typography>

        <Grid container spacing={3} sx={aboutStyles.educationGrid}>
          {education.map((edu, index) => (
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
                      sx={aboutStyles.infoText}
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
          {skills.map((skill, index) => (
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
                  {skill.icon}
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
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
