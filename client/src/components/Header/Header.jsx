import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography, IconButton, Container } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../../assets/img/pokemon.png';
import './Header.scss';

const Header = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '70px' }}>
          {/* Logo y Título */}
          <Box 
            component={Link} 
            to='/' 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              textDecoration: 'none',
              gap: 2
            }}
          >
            <img 
              src={Logo} 
              alt='pokemon icon' 
              style={{ width: '60px', height: 'auto' }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.2rem', md: '1.8rem' },
                background: 'linear-gradient(45deg, #DC0A2D 30%, #FF1C40 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: { xs: 'none', sm: 'block' }
              }}
            >
              Pokémon App
            </Typography>
          </Box>

          {/* SearchBar */}
          <Box sx={{ flex: 1, maxWidth: '500px', mx: 3 }}>
            <SearchBar />
          </Box>

          {/* Botón Crear */}
          <IconButton
            component={Link}
            to='/create'
            sx={{
              color: '#DC0A2D',
              '&:hover': {
                color: '#A00821',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            <AddCircleIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
