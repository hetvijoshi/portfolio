export const styles = {
  section: {
    py: 8,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: { xs: '2rem', md: '3rem' },
    fontWeight: 700,
    mb: 2,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    mb: 6,
    color: 'text.secondary',
    maxWidth: '600px',
    mx: 'auto'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: (theme) =>
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.05)'
        : 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease-in-out',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: (theme) =>
        theme.palette.mode === 'dark'
          ? '0 8px 30px rgba(0,0,0,0.3)'
          : '0 8px 30px rgba(0,0,0,0.1)',
    },
  },
  cardHeader: {
    height: 200,
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  getGradient: (theme, projectTitle) => ({
    background: theme.palette.mode === 'dark'
      ? `linear-gradient(135deg, 
          ${projectTitle === 'Academiverse' ? '#4a148c 0%, #311b92 100%' :
          projectTitle === 'SpotCrime' ? '#b71c1c 0%, #880e4f 100%' :
          projectTitle === 'GeoCompensate' ? '#1a237e 0%, #0d47a1 100%' :
          '#004d40 0%, #006064 100%'})`
      : `linear-gradient(135deg, 
          ${projectTitle === 'Academiverse' ? '#e1bee7 0%, #b39ddb 100%' :
          projectTitle === 'SpotCrime' ? '#ffcdd2 0%, #f8bbd0 100%' :
          projectTitle === 'GeoCompensate' ? '#c5cae9 0%, #bbdefb 100%' :
          '#b2dfdb 0%, #b2ebf2 100%'})`
  }),
  cardContent: {
    p: 3,
    flexGrow: 1
  },
  projectTitle: {
    fontWeight: 600,
    mb: 2
  },
  description: {
    mb: 2,
    color: 'text.secondary'
  },
  techStack: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  chip: {
    bgcolor: 'action.hover',
    color: 'text.secondary'
  },
  cardActions: {
    p: 2,
    borderTop: 1,
    borderColor: 'divider'
  },
  iconButton: {
    '&:hover': {
      color: 'primary.main'
    }
  },
  iconContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  academiverseIcon: {
    fontSize: 60,
    color: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    transform: 'rotate(-15deg) translateX(-20px)',
  },
  academiverseDecoration: {
    position: 'absolute',
    width: '80%',
    height: '60%',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '10px',
    transform: 'rotate(15deg)',
  },
  spotcrimePattern: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
  },
  spotcrimeAssessmentIcon: {
    fontSize: 80,
    color: 'rgba(255, 255, 255, 0.6)',
    zIndex: 1,
  },
  spotcrimeLocationIcon: {
    fontSize: 45,
    color: 'rgba(255, 255, 255, 0.9)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))',
  },
  spotcrimeFrame: {
    position: 'absolute',
    width: '70%',
    height: '70%',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    transform: 'rotate(-10deg)',
  },
  spotcrimeGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at center, transparent 30%, rgba(255,255,255,0.1) 70%)',
  },
  geoCompensateIcon: {
    fontSize: 80,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  geoCompensateGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at center, transparent 30%, rgba(255,255,255,0.1) 70%)',
  },
  dutchSettleIcon: {
    fontSize: 70,
    color: 'rgba(255, 255, 255, 0.8)',
    zIndex: 1,
  },
  dutchSettleOuterCircle: {
    position: 'absolute',
    width: '80%',
    height: '80%',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
  },
  dutchSettleInnerCircle: {
    position: 'absolute',
    width: '60%',
    height: '60%',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
  },
}; 