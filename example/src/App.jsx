import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import { ThemeProvider } from '@elasticui/react-native';

import Typography from './components/Typography';

const customFonts = {
  regular: require('../assets/fonts/Poppins-Regular.ttf'),
  thin: require('../assets/fonts/Poppins-Light.ttf'),
  medium: require('../assets/fonts/Poppins-Medium.ttf'),
  bold: require('../assets/fonts/Poppins-Bold.ttf'),
  heavy: require('../assets/fonts/Poppins-Black.ttf'),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    const customTheme = {};

    if (this.state.fontsLoaded) {
      return (
        <ThemeProvider theme={customTheme}>
          <Typography />
        </ThemeProvider>
      );
    } else {
      return <AppLoading />;
    }
  }
}
