import * as React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';

import { withTheme } from '../../theme';

type Props = React.ComponentProps<
  typeof TouchableOpacity | typeof TouchableNativeFeedback
> & {
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
  disabled?: Boolean;
  loading?: Boolean;
  wide?: Boolean;
};

function Button(props: Props) {
  const {
    // @ts-ignore
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

  const buttonStyles = theme.component.Button.styles;
  const buttonVariant = theme.component.Button.variant[variant];
  const buttonSize = theme.component.Button.size[size];
  console.log(
    '🚀 ~ file: Button.tsx ~ line 50 ~ Button ~ buttonSize',
    typeof buttonSize.indicator.size
  );
  const buttonShape = theme.component.Button.shape[shape];
  const buttonColor = theme.component.Button.color[color];

  const Touchable: typeof TouchableOpacity | typeof TouchableNativeFeedback =
    variant === 'transparent' ? TouchableOpacity : TouchableNativeFeedback;

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

  return (
    // @ts-ignore
    <Touchable disabled={disabled || loading} {...rest}>
      {loading ? Loader : <View style={containerStyles}>{Label}</View>}
    </Touchable>
  );
}

// @ts-ignore
export default withTheme(Button);
