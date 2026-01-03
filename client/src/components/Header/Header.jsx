import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography, IconButton, Container } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../../assets/img/pokemon.png';
import { useTheme } from '../../hooks/useTheme';
import './Header.scss';

const Header = ({ onSearch }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'var(--header-bg)',
        boxShadow: '0 2px 12px var(--shadow)',
        transition: 'all 0.3s ease',
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
            <SearchBar onSearch={onSearch} />
          </Box>

          {/* Botones de acción */}
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {/* Botón Theme */}
            <IconButton
              onClick={toggleTheme}
              disableRipple
              sx={{
                color: 'var(--text-primary)',
                backgroundColor: 'transparent',
                '&:hover': {
                  transform: 'scale(1.1)',
                  backgroundColor: 'var(--bg-secondary)',
                },
                '&:active': {
                  backgroundColor: 'var(--bg-secondary)',
                },
                '&:focus': {
                  backgroundColor: 'transparent',
                },
                transition: 'all 0.2s ease',
              }}
            >
              {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>

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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
