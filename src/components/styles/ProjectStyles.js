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
          ${projectTitle === 'Cloud-Native Application Platform' ? '#006064 0%, #00796b 100%' :
          projectTitle === 'Automatic Essay Scoring' ? '#1a365d 0%, #2d3748 100%' :
          projectTitle === 'Academiverse' ? '#4a148c 0%, #311b92 100%' :
          projectTitle === 'SpotCrime' ? '#b71c1c 0%, #880e4f 100%' :
          projectTitle === 'GeoCompensate' ? '#1a237e 0%, #0d47a1 100%' :
          '#004d40 0%, #006064 100%'})`
      : `linear-gradient(135deg, 
          ${projectTitle === 'Cloud-Native Application Platform' ? '#80deea 0%, #80cbc4 100%' :
          projectTitle === 'Automatic Essay Scoring' ? '#63b3ed 0%, #90cdf4 100%' :
          projectTitle === 'Academiverse' ? '#e1bee7 0%, #b39ddb 100%' :
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
  essayScoringIcon: {
    fontSize: 70,
    color: 'rgba(255, 255, 255, 0.8)',
    zIndex: 2,
    filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))',
  },
  essayScoringDecoration: {
    position: 'absolute',
    width: '75%',
    height: '65%',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    transform: 'rotate(-8deg)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '20%',
      left: '15%',
      width: '70%',
      height: '3px',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '2px',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '40%',
      left: '15%',
      width: '60%',
      height: '3px',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '2px',
    },
  },
  essayScoringGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)',
    zIndex: 1,
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
  cloudAppIcon: {
    fontSize: 80,
    color: 'rgba(255, 255, 255, 0.9)',
    zIndex: 2,
    filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))',
  },
  cloudAppPattern: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 100%)',
    zIndex: 1,
  },
  cloudAppDecoration: {
    position: 'absolute',
    width: '70%',
    height: '70%',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    zIndex: 1,
  },
  cloudAppGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
    zIndex: 0,
  },
}; 