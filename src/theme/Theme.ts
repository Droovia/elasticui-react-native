import { scaler } from '../helpers';

import type defaultTheme from './Constant';
import { typographyStyles } from '../components';

export default function Theme(theme: typeof defaultTheme) {
  const platte = {
    primary: theme.platte.primary[theme.mode],
    secondary: theme.platte.secondary[theme.mode],
    foreground: theme.platte.foreground[theme.mode],
    background: theme.platte.background[theme.mode],
    success: theme.platte.success[theme.mode],
    warn: theme.platte.warn[theme.mode],
    error: theme.platte.error[theme.mode],
  };

  const font = {
    size: scaler.scale(theme.font.size),
  };

  const spacing = {
    margin: scaler.scale(theme.spacing.margin),
    padding: scaler.scale(theme.spacing.padding),
  };

  const Typography = typographyStyles({ platte, font });

  return {
    platte,
    font,
    spacing,
    Typography,
  };
}
