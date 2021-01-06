import React from 'react';
var defaultContext = {
  disabledAll: false,
  inGroup: false
};
export var RadioContext = /*#__PURE__*/React.createContext(defaultContext);
export var useRadioContext = function useRadioContext() {
  return React.useContext(RadioContext);
};