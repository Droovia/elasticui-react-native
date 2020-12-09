import * as React from 'react';
import { ThemeProvider } from '@elasticui/react-native';

import Typography from './components/Typography';

export default function App() {
  const customTheme = {};

  return (
    <ThemeProvider theme={customTheme}>
      <Typography />
    </ThemeProvider>
  );
}
