import React from 'react';
import { ThemeContext } from './Context';

export const withTheme = (Component: React.ElementType) => {
  return class extends React.Component {
    render() {
      const { props } = this;
      return (
        <ThemeContext.Consumer>
          {(theme) => <Component {...props} theme={theme} />}
        </ThemeContext.Consumer>
      );
    }
  };
};
