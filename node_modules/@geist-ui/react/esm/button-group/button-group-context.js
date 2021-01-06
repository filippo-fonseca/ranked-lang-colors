import React from 'react';
var defaultContext = {
  isButtonGroup: false,
  disabled: false
};
export var ButtonGroupContext = /*#__PURE__*/React.createContext(defaultContext);
export var useButtonGroupContext = function useButtonGroupContext() {
  return React.useContext(ButtonGroupContext);
};