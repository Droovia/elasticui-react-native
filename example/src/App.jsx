import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from '@elasticui/react-native';

import Typography from './components/Typography';
import Button from './components/Button';

const customFonts = {
  regular: require('../assets/fonts/Poppins-Regular.ttf'),
  thin: require('../assets/fonts/Poppins-Light.ttf'),
  medium: require('../assets/fonts/Poppins-Medium.ttf'),
  bold: require('../assets/fonts/Poppins-Bold.ttf'),
  heavy: require('../assets/fonts/Poppins-Black.ttf'),
};

const Drawer = createDrawerNavigator();

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
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Typography">
              <Drawer.Screen name="Typography" component={Typography} />
              <Drawer.Screen name="Button" component={Button} />
            </Drawer.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      );
    } else {
      return <AppLoading />;
    }
  }
}
