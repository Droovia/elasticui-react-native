import {
  StyleProp,
  TextStyle,
  ViewStyle,
  Platform,
  ActivityIndicatorProps,
} from 'react-native';

interface ButtonStyles {
  font: {
    size: number;
  };
  spacing: {
    margin: number;
    padding: number;
  };
  platte: {
    foreground: string;
    primary: string;
    secondary: string;
    success: string;
    warn: string;
    error: string;
    transparent: string;
    background: string;
  };
  border: {
    width: number;
    radius: number;
  };
}

export const buttonStyles = ({
  font,
  spacing,
  platte,
  border,
}: ButtonStyles) => {
  return {
    variant: {
      contained: {
        container: {} as StyleProp<ViewStyle>,
        label: {
          color: platte.background,
        } as StyleProp<TextStyle>,
      },
      outlined: {
        container: {
          backgroundColor: platte.transparent,
        } as StyleProp<ViewStyle>,
        label: {} as StyleProp<TextStyle>,
      },
      transparent: {
        container: {
          backgroundColor: platte.transparent,
          borderColor: platte.transparent,
        } as StyleProp<ViewStyle>,
        label: {} as StyleProp<TextStyle>,
      },
    },
    size: {
      small: {
        container: {
          margin: spacing.margin,
          paddingVertical: spacing.padding * 0.5,
          paddingHorizontal: spacing.padding * 2,
        } as StyleProp<ViewStyle>,
        label: {
          fontSize: font.size * 0.8,
        } as StyleProp<TextStyle>,
        indicator: {
          size: Platform.OS === 'android' ? font.size * 1.5 : 'small',
        } as ActivityIndicatorProps,
      },
      medium: {
        container: {
          margin: spacing.margin * 1.2,
          paddingVertical: spacing.padding * 1,
          paddingHorizontal: spacing.padding * 4,
        } as StyleProp<ViewStyle>,
        label: {
          fontSize: font.size * 1,
        } as StyleProp<TextStyle>,
        indicator: {
          size: Platform.OS === 'android' ? font.size * 2 : 'small',
        } as ActivityIndicatorProps,
      },
      large: {
        container: {
          margin: spacing.margin * 1.4,
          paddingVertical: spacing.padding * 1.5,
          paddingHorizontal: spacing.padding * 6,
        } as StyleProp<ViewStyle>,
        label: {
          fontSize: font.size * 1.2,
        } as StyleProp<TextStyle>,
        indicator: {
          size: Platform.OS === 'android' ? font.size * 2.5 : 'large',
        } as ActivityIndicatorProps,
      },
    },
    shape: {
      curve: {
        borderRadius: border.radius,
      } as StyleProp<ViewStyle>,
      plate: {
        borderRadius: 0,
      } as StyleProp<ViewStyle>,
      round: {
        borderRadius: 50,
      } as StyleProp<ViewStyle>,
    },
    color: {
      primary: platte.primary,
      secondary: platte.secondary,
      success: platte.success,
      warn: platte.warn,
      error: platte.error,
    },
    styles: {
      container: {
        borderWidth: border.width,
      } as StyleProp<ViewStyle>,
      label: {
        fontFamily: 'medium',
      } as StyleProp<TextStyle>,
    },
  };
};
