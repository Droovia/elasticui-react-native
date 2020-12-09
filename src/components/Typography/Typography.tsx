import * as React from 'react';
import { Text as NativeText, TextStyle, StyleProp } from 'react-native';

import { withTheme } from '../../theme';

type Props = React.ComponentProps<typeof NativeText> & {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  variant?: 'default' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warn' | 'error';
  family?: 'regular' | 'thin' | 'medium' | 'bold' | 'heavy';
};

function Typography(props: Props) {
  const {
    theme,
    children,
    style,
    variant = 'default',
    color = 'default',
    family = 'regular',
  } = props;

  console.log(theme.Typography.color[color]);

  const styling: StyleProp<TextStyle> = {
    fontSize: theme.Typography.variant[variant],
    color: theme.Typography.color[color],
    fontFamily: family,
  };

  return <NativeText style={[styling, style]}>{children}</NativeText>;
}

export default withTheme(Typography) as typeof Typography;

// TODO:
// support italic
