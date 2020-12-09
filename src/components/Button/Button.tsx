import * as React from 'react';
import {
  TouchableNativeFeedback,
  Text,
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';

import { withTheme } from '../../theme';

type Props = React.ComponentProps<typeof TouchableNativeFeedback> & {
  children: React.ReactNode;
  styles?: {
    container?: StyleProp<ViewStyle>;
    label?: StyleProp<TextStyle>;
    indicator?: StyleProp<ViewStyle>;
  };
  variant?: 'contained' | 'outlined' | 'transparent';
  color?: 'primary' | 'secondary' | 'success' | 'warn' | 'error';
  size?: 'medium' | 'small' | 'large';
  shape?: 'curve' | 'round' | 'plate';
  disabled?: boolean;
  loading?: boolean;
  wide?: boolean;
};

function Button(props: Props) {
  const {
    //@ts-ignore
    theme,
    children,
    styles,
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    shape = 'curve',
    disabled = false,
    loading = false,
    wide = false,
    ...rest
  } = props;

  const buttonStyles = theme.components.Button.styles;
  const buttonVariant = theme.components.Button.variant[variant];
  const buttonSize = theme.components.Button.size[size];
  const buttonShape = theme.components.Button.shape[shape];
  const buttonColor = theme.components.Button.color[color];

  // const Touchable: typeof TouchableOpacity | typeof TouchableNativeFeedback =
  //   variant === 'transparent' ? TouchableOpacity : TouchableNativeFeedback;

  const containerStyles: StyleProp<ViewStyle> = [
    { width: wide ? '100%' : null },
    { backgroundColor: buttonColor, borderColor: buttonColor },
    buttonStyles.container,
    buttonVariant.container,
    buttonSize.container,
    buttonShape,
    styles?.container,
  ];

  const labelStyles: StyleProp<TextStyle> = [
    { color: buttonColor },
    buttonStyles.label,
    buttonVariant.label,
    buttonSize.label,
    styles?.label,
  ];

  const indicatorStyles: StyleProp<ViewStyle> = [
    buttonSize.container,
    styles?.indicator,
  ];

  const Label = <Text style={labelStyles}>{children}</Text>;
  const Loader = (
    <ActivityIndicator
      style={[indicatorStyles]}
      color={buttonColor}
      size={buttonSize.indicator.size}
    />
  );

  const ripple =
    variant === 'contained' ? buttonVariant.label.color : buttonColor;

  return (
    <TouchableNativeFeedback
      disabled={disabled || loading}
      background={TouchableNativeFeedback.Ripple(ripple, false)}
      {...rest}
    >
      {loading ? Loader : <View style={containerStyles}>{Label}</View>}
    </TouchableNativeFeedback>
  );
}

// @ts-ignore
export default withTheme(Button) as typeof Button;

// TODO:
// - gray when disabled
// - fix round  border
