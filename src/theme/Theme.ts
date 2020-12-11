import { color } from '../helpers';

import { typographyStyles, buttonStyles } from '../components';

// @ts-ignore
export default function Theme(theme) {
  theme.platte = {
    primary: color.modePlatte(theme.mode, theme.platte.primary),
    secondary: color.modePlatte(theme.mode, theme.platte.secondary),
    success: color.modePlatte(theme.mode, theme.platte.success),
    warn: color.modePlatte(theme.mode, theme.platte.warn),
    error: color.modePlatte(theme.mode, theme.platte.error),
    background: color.modePlatte(theme.mode, theme.platte.background),
    foreground: color.modePlatte(theme.mode, theme.platte.foreground),
    transparent: color.modePlatte(theme.mode, theme.platte.transparent),
  };

  theme.components = {
    Button: buttonStyles(theme),
    Typography: typographyStyles(theme),
  };

  return theme;
}
