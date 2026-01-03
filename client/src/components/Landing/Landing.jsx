//First component APP
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Typography, Container, Fade } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import './Landing.scss';

const Landing = () => {
  return (
    <Box className='containerBase'>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            gap: 4,
            mt: -15
          }}
        >
          <Fade in timeout={1000}>
            <Box>
              <CatchingPokemonIcon 
                sx={{ 
                  fontSize: { xs: 80, md: 120 },
                  color: '#DC0A2D',
                  mb: 3,
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                  animation: 'bounce 2s infinite'
                }}
              />
              <Typography 
                variant="h1" 
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                  fontWeight: 900,
                  color: '#fff',
                  textShadow: '4px 4px 0px #DC0A2D, 8px 8px 12px rgba(0,0,0,0.3)',
                  mb: 2,
                  letterSpacing: '0.05em'
                }}
              >
                Pokémon App
              </Typography>
              <Typography 
                variant="h5"
                sx={{
                  color: '#333',
                  fontWeight: 600,
                  mb: 5,
                  fontSize: { xs: '1rem', md: '1.5rem' },
                  textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
                }}
              >
                Discover and explore the Pokémon world
              </Typography>
            </Box>
          </Fade>

          <Fade in timeout={1500}>
            <Button
              component={Link}
              to='/home'
              variant="contained"
              size="large"
              startIcon={<CatchingPokemonIcon />}
              sx={{
                px: 6,
                py: 2,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                fontWeight: 'bold',
                textTransform: 'uppercase',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #DC0A2D 0%, #A00821 100%)',
                color: '#fff',
                border: 'none',
                boxShadow: '0 8px 20px rgba(220, 10, 45, 0.4)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #fff 0%, #f5f5f5 100%)',
                  color: '#DC0A2D',
                  boxShadow: '0 12px 30px rgba(220, 10, 45, 0.6)',
                }
              }}
            >
              Start Adventure!
            </Button>
          </Fade>
        </Box>
      </Container>
      
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </Box>
  );
};

export default Landing;
