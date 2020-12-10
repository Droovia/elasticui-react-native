import {
  StyleProp,
  TextStyle,
  ViewStyle,
  Platform,
  ActivityIndicatorProps,
} from 'react-native';

// @ts-ignore
export const buttonStyles = (theme) => {
  return {
    variant: {
      contained: {
        container: {} as StyleProp<ViewStyle>,
        label: {
          color: theme.platte.background,
        } as StyleProp<TextStyle>,
      },
      outlined: {
        container: {
          backgroundColor: theme.platte.transparent,
        } as StyleProp<ViewStyle>,
        label: {} as StyleProp<TextStyle>,
      },
      transparent: {
        container: {
          backgroundColor: theme.platte.transparent,
          borderColor: theme.platte.transparent,
        } as StyleProp<ViewStyle>,
        label: {} as StyleProp<TextStyle>,
      },
    },
    size: {
      small: {
        container: {
          margin: theme.spacing.margin * 0.5,
          paddingVertical: theme.spacing.padding * 0.25,
          paddingHorizontal: theme.spacing.padding * 1,
        } as StyleProp<ViewStyle>,
        label: {
          fontSize: theme.font.size * 0.8,
        } as StyleProp<TextStyle>,
        indicator: {
          size: Platform.OS === 'android' ? theme.font.size * 1.5 : 'small',
        } as ActivityIndicatorProps,
      },
      medium: {
        container: {
          margin: theme.spacing.margin * 1,
          paddingVertical: theme.spacing.padding * 0.5,
          paddingHorizontal: theme.spacing.padding * 2,
        } as StyleProp<ViewStyle>,
        label: {
          fontSize: theme.font.size * 1,
        } as StyleProp<TextStyle>,
        indicator: {
          size: Platform.OS === 'android' ? theme.font.size * 2 : 'small',
        } as ActivityIndicatorProps,
      },
      large: {
        container: {
          margin: theme.spacing.margin * 1.5,
          paddingVertical: theme.spacing.padding * 1,
          paddingHorizontal: theme.spacing.padding * 4,
        } as StyleProp<ViewStyle>,
        label: {
          fontSize: theme.font.size * 1.2,
        } as StyleProp<TextStyle>,
        indicator: {
          size: Platform.OS === 'android' ? theme.font.size * 2.5 : 'large',
        } as ActivityIndicatorProps,
      },
    },
    shape: {
      curve: {
        borderRadius: theme.border.radius,
      } as StyleProp<ViewStyle>,
      plate: {
        borderRadius: 0,
      } as StyleProp<ViewStyle>,
      round: {
        borderRadius: 50,
      } as StyleProp<ViewStyle>,
    },
    color: {
      primary: theme.platte.primary,
      secondary: theme.platte.secondary,
      success: theme.platte.success,
      warn: theme.platte.warn,
      error: theme.platte.error,
    },
    styles: {
      container: {
        borderWidth: theme.border.width,
      } as StyleProp<ViewStyle>,
      label: {
        fontFamily: 'medium',
      } as StyleProp<TextStyle>,
    },
  };
};
