// @ts-ignore
export const typographyStyles = (theme) => {
  return {
    variant: {
      default: theme.font.size,
      caption: theme.font.size * 0.8,
      h1: theme.font.size * 2,
      h2: theme.font.size * 1.8,
      h3: theme.font.size * 1.6,
      h4: theme.font.size * 1.4,
      h5: theme.font.size * 1.2,
    },
    color: {
      default: theme.platte.foreground,
      primary: theme.platte.primary,
      secondary: theme.platte.secondary,
      success: theme.platte.success,
      warn: theme.platte.warn,
      error: theme.platte.error,
    },
  };
};
