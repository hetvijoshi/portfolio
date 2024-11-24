import { Box } from '@mui/material';

export default function Background() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        background: '#ffffff',
        overflow: 'hidden',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.15,
          animation: 'move 25s infinite alternate',
        },
        '&::before': {
          background: 'linear-gradient(135deg, #635bff, #4c45e4)',
          top: '-10%',
          left: '-10%',
        },
        '&::after': {
          background: 'linear-gradient(135deg, #4f46e5, #2563eb)',
          bottom: '-10%',
          right: '-10%',
          animationDelay: '-5s',
        },
        '@keyframes move': {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '100%': {
            transform: 'translate(50px, 50px)',
          },
        }
      }}
    >
      {/* Additional abstract shapes */}
      <Box
        sx={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
          filter: 'blur(80px)',
          opacity: 0.1,
          top: '40%',
          left: '30%',
          animation: 'float 20s infinite alternate',
          '@keyframes float': {
            '0%': {
              transform: 'translate(0, 0) scale(1)',
            },
            '100%': {
              transform: 'translate(-30px, 30px) scale(1.1)',
            },
          }
        }}
      />
    </Box>
  );
} 