'use client';

import { Box } from '@mui/material';
import { motion } from 'framer-motion';

function DecorativeElements() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.6,
      }}
    >
      {/* Top Left Group */}
      <Box
        sx={{
          position: 'absolute',
          top: '8%',
          left: '5%',
          width: '120px',
          height: '120px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'rgba(76, 111, 255, 0.08)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 40,
            height: 2,
            background: 'rgba(76, 111, 255, 0.12)',
            transform: 'rotate(-45deg)',
            left: 45,
            top: 30,
          }}
        />
      </Box>

      {/* Top Right */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: 40,
          height: 40,
          transform: 'rotate(15deg)',
          background: 'rgba(76, 111, 255, 0.06)',
        }}
      />

      {/* Center Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '45%',
          left: '12%',
          width: 30,
          height: 2,
          background: 'rgba(76, 111, 255, 0.1)',
          transform: 'rotate(45deg)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          right: '15%',
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'rgba(76, 111, 255, 0.05)',
        }}
      />

      {/* Bottom Left */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: 35,
          height: 35,
          transform: 'rotate(30deg)',
          background: 'rgba(76, 111, 255, 0.07)',
        }}
      />

      {/* Bottom Right Group */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '12%',
          right: '5%',
          width: '100px',
          height: '100px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 50,
            height: 50,
            borderRadius: '50%',
            background: 'rgba(76, 111, 255, 0.08)',
            right: 0,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 45,
            height: 2,
            background: 'rgba(76, 111, 255, 0.12)',
            transform: 'rotate(45deg)',
            right: 40,
            bottom: 25,
          }}
        />
      </Box>

      {/* Additional scattered elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          left: '50%',
          width: 25,
          height: 25,
          borderRadius: '50%',
          background: 'rgba(76, 111, 255, 0.04)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          left: '30%',
          width: 20,
          height: 20,
          transform: 'rotate(45deg)',
          background: 'rgba(76, 111, 255, 0.05)',
        }}
      />
    </Box>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/portfolio/favicon.svg" />       
        {/* Preload critical assets */}
        <link 
          rel="preload" 
          href="/portfolio/images/my-profile.jpg" 
          as="image"
        />
      </head>
      <body>
        <Box 
          component="main"
          sx={{ 
            position: 'relative',
            minHeight: '100vh',
          }}
        >
          <DecorativeElements />
          {children}
        </Box>
      </body>
    </html>
  );
}
