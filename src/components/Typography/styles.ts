interface TypographyStyles {
  font: {
    size: number;
  };
  platte: {
    foreground: string;
    primary: string;
    secondary: string;
    success: string;
    warn: string;
    error: string;
  };
}

export interface TypographyTheme {
  variant: {
    default: number;
    caption: number;
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
  };
  color: {
    default: string;
    primary: string;
    secondary: string;
    success: string;
    warn: string;
    error: string;
  };
}

export const typographyStyles = ({
  font,
  platte,
}: TypographyStyles): TypographyTheme => {
  return {
    variant: {
      default: font.size,
      caption: font.size * 0.8,
      h1: font.size * 2,
      h2: font.size * 1.8,
      h3: font.size * 1.6,
      h4: font.size * 1.4,
      h5: font.size * 1.2,
    },
    color: {
      default: platte.foreground,
      primary: platte.primary,
      secondary: platte.secondary,
      success: platte.success,
      warn: platte.warn,
      error: platte.error,
    },
  };
};
