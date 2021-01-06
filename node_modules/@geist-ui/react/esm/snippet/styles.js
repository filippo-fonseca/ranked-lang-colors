import _extends from "@babel/runtime/helpers/esm/extends";
export var getStyles = function getStyles(type, palette, fill) {
  var styles = {
    "default": {
      color: palette.foreground,
      border: palette.border,
      bgColor: palette.background
    },
    success: {
      color: palette.success,
      border: palette.success,
      bgColor: palette.background
    },
    warning: {
      color: palette.warning,
      border: palette.warning,
      bgColor: palette.background
    },
    error: {
      color: palette.error,
      border: palette.error,
      bgColor: palette.background
    },
    secondary: {
      color: palette.secondary,
      border: palette.secondary,
      bgColor: palette.background
    },
    lite: {
      color: palette.foreground,
      border: palette.border,
      bgColor: palette.accents_1
    },
    dark: {
      color: palette.background,
      border: palette.foreground,
      bgColor: palette.foreground
    }
  };
  var filledTypes = ['success', 'warning', 'error', 'secondary'];
  var style = styles[type];
  var shouldFilled = filledTypes.includes(type);
  if (!fill || !shouldFilled) return style;
  return _extends({}, style, {
    color: style.bgColor,
    bgColor: style.color
  });
};