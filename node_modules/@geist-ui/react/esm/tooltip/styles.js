export var getColors = function getColors(type, palette) {
  var colors = {
    "default": palette.background,
    success: palette.success,
    warning: palette.warning,
    error: palette.error,
    secondary: palette.secondary,
    dark: palette.foreground,
    lite: palette.background
  };
  var color = type === 'lite' || type === 'default' ? palette.foreground : palette.background;
  return {
    color: color,
    bgColor: colors[type]
  };
};