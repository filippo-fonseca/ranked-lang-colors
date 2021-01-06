import _extends from "@babel/runtime/helpers/esm/extends";
export var getStyles = function getStyles(type, palette, isShadow) {
  var colors = {
    "default": {
      color: palette.foreground,
      bgColor: palette.background
    },
    dark: {
      color: palette.background,
      bgColor: palette.foreground
    },
    secondary: {
      color: palette.background,
      bgColor: palette.secondary
    },
    success: {
      color: palette.background,
      bgColor: palette.success
    },
    warning: {
      color: palette.background,
      bgColor: palette.warning
    },
    error: {
      color: palette.background,
      bgColor: palette.error
    },
    lite: {
      color: palette.foreground,
      bgColor: palette.background
    },
    alert: {
      color: 'white',
      bgColor: palette.alert
    },
    purple: {
      color: 'white',
      bgColor: palette.purple
    },
    violet: {
      color: 'white',
      bgColor: palette.violet
    },
    cyan: {
      color: 'black',
      bgColor: palette.cyan
    }
  };
  var showBorder = type === 'default' && !isShadow;
  return _extends({}, colors[type], {
    borderColor: showBorder ? palette.border : 'transparent'
  });
};