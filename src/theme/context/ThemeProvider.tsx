import React from 'react';
import deepmerge from 'deepmerge';

import { ThemeContext } from './Context';
import defaultTheme from '../Materials';
import Theme from '../Theme';

type Props = {
  children: React.ReactNode;
  theme: any;
};

export const ThemeProvider = ({ children, theme = {} }: Props) => {
  theme = deepmerge(defaultTheme, theme);
  const theming = Theme(theme);

  return (
    // @ts-ignore
    <ThemeContext.Provider value={theming}>{children}</ThemeContext.Provider>
  );
};
