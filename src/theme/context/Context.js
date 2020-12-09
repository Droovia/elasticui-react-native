import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import deepmerge from 'deepmerge';
import defaultTheme from '../Constant';
import Theme from '../Theme';

const ThemeContext = React.createContext();

export function ThemeProvider({ children, theme = {} }) {
  theme = deepmerge(defaultTheme, theme);
  const theming = Theme(theme);

  return (
    <ThemeContext.Provider value={theming}>{children}</ThemeContext.Provider>
  );
}

export function withTheme(Component) {
  return class extends React.Component {
    render() {
      const { props } = this;
      return (
        <ThemeContext.Consumer>
          {(theme) => (
            <Component {...props} theme={{ ...defaultTheme, ...theme }} />
          )}
        </ThemeContext.Consumer>
      );
    }
  };
}

export const useTheme = () => useContext(ThemeContext);

export const makeStyle = (styles) => {
  console.log('🚀 ~ file: Context.js ~ line 36 ~ makeStyle ~ styles', styles);
  return () => {
    const theme = useContext(ThemeContext);
    return StyleSheet.create(styles(theme));
  };
};
