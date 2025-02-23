import { Box } from '@mui/material';

export default function DecorativeElements({ 
  variant = 'default',
  primaryColor = 'rgba(76, 111, 255, 0.1)',
  secondaryColor = 'rgba(76, 111, 255, 0.15)',
  scale = 1,
}) {
  const variants = {
    default: {
      topLeft: true,
      topRight: true,
      bottomLeft: true,
      bottomRight: true,
      center: true,
    },
    minimal: {
      topLeft: true,
      bottomRight: true,
      center: false,
    },
    scattered: {
      topLeft: true,
      topRight: true,
      centerLeft: true,
      centerRight: true,
      bottomLeft: true,
      bottomRight: true,
    }
  };

  const currentVariant = variants[variant];

  return (
    <>
      {currentVariant.topLeft && (
        <Box
          sx={{
            position: 'absolute',
            top: '8%',
            left: '5%',
            width: 120 * scale,
            height: 120 * scale,
            zIndex: 0,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: 60 * scale,
              height: 60 * scale,
              borderRadius: '50%',
              background: primaryColor,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: 40 * scale,
              height: 2,
              background: secondaryColor,
              transform: 'rotate(-45deg)',
              left: 45 * scale,
              top: 30 * scale,
            }}
          />
        </Box>
      )}

      {currentVariant.topRight && (
        <Box
          sx={{
            position: 'absolute',
            top: '12%',
            right: '8%',
            width: 40 * scale,
            height: 40 * scale,
            transform: 'rotate(15deg)',
            background: primaryColor,
            zIndex: 0,
          }}
        />
      )}

      {currentVariant.center && (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '20%',
              width: 30 * scale,
              height: 2,
              background: secondaryColor,
              transform: 'rotate(45deg)',
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '45%',
              right: '25%',
              width: 40 * scale,
              height: 40 * scale,
              borderRadius: '50%',
              background: primaryColor,
              opacity: 0.6,
              zIndex: 0,
            }}
          />
        </>
      )}

      {currentVariant.bottomLeft && (
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            left: '10%',
            width: 35 * scale,
            height: 35 * scale,
            transform: 'rotate(30deg)',
            background: primaryColor,
            zIndex: 0,
          }}
        />
      )}

      {currentVariant.bottomRight && (
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: 100 * scale,
            height: 100 * scale,
            zIndex: 0,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: 50 * scale,
              height: 50 * scale,
              borderRadius: '50%',
              background: primaryColor,
              right: 0,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: 45 * scale,
              height: 2,
              background: secondaryColor,
              transform: 'rotate(45deg)',
              right: 40 * scale,
              bottom: 25 * scale,
            }}
          />
        </Box>
      )}
    </>
  );
} 