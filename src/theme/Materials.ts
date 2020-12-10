import { scaler } from '../helpers';

export default {
  mode: 'light' as 'light' | 'dark',
  platte: {
    primary: {
      light: '#1f5f8b',
      dark: '#0984e3',
    },
    secondary: {
      light: '#22a6b3',
      dark: '#22a6b3',
    },
    foreground: {
      light: '#000000',
      dark: '#ffffff',
    },
    background: {
      light: '#ffffff',
      dark: '#000000',
    },
    success: {
      light: '#00FF00',
      dark: '#00FF00',
    },
    warn: {
      light: '#FFFF00',
      dark: '#FFFF00',
    },
    error: {
      light: '#FF0000',
      dark: '#FF0000',
    },
    transparent: {
      light: 'transparent',
      dark: 'transparent',
    },
  },
  font: {
    size: scaler.scale(15),
    family: 'regular' as 'regular' | 'thin' | 'medium' | 'bold' | 'heavy',
  },
  spacing: {
    margin: scaler.scale(4),
    padding: scaler.scale(6),
  },
  border: {
    width: 1.5,
    radius: 3,
  },
};
