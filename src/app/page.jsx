'use client';

import { Box, Container, ThemeProvider, CssBaseline } from '@mui/material';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import { theme } from '@/theme';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Box component="main">
        <Hero />
        <Container maxWidth="lg">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
