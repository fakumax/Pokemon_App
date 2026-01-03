import { createTheme } from '@mui/material/styles';

export const pokemonTheme = createTheme({
  palette: {
    primary: {
      main: '#DC0A2D', // Rojo Pokéball
      dark: '#A00821',
      light: '#FF1C40',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffffff', // Blanco
      dark: '#f5f5f5',
      contrastText: '#DC0A2D',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Flexo-Demi',
      'Segoe UI',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      letterSpacing: '0.02em',
    },
    button: {
      fontWeight: 700,
      letterSpacing: '0.1em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'uppercase',
          fontWeight: 'bold',
        },
      },
    },
  },
});
