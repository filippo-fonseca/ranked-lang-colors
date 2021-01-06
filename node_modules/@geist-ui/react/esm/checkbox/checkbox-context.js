import React from 'react';
var defaultContext = {
  disabledAll: false,
  inGroup: false,
  values: []
};
export var CheckboxContext = /*#__PURE__*/React.createContext(defaultContext);
export var useCheckbox = function useCheckbox() {
  return React.useContext(CheckboxContext);
};