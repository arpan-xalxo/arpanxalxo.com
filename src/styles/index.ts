import { purple, grey } from '@mui/material/colors';

export const GLOBAL_STYLES = {
  body: {
    margin: 4,
    backgroundColor: '#00001a', // Very dark purple background color
    color: '#f5f5f5', // Lighter shade of white for better contrast
    fontFamily: 'Poppins, sans-serif',
  },
  '.page-title': {
    color: '#310066', // Darker shade of purple
  },
  '.page-subtitle': {
    color: grey[400], // Darker grey color
  },
  a: {
    textDecoration: 'underline',
    textDecorationColor: purple[900], // Darker shade of purple
    color: purple[900], // Darker shade of purple
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1.8',
    letterSpacing: '0.00938em',
  },
};
