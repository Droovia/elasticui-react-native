import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from './Context';

// @ts-ignore
export const makeStyles = (styles) => {
  return () => {
    const theme = useContext(ThemeContext);
    return StyleSheet.create(styles(theme));
  };
};
