import React from 'react';
var defaultContext = {
  initialExpand: false,
  isImperative: false
};
export var TreeContext = /*#__PURE__*/React.createContext(defaultContext);
export var useTreeContext = function useTreeContext() {
  return React.useContext(TreeContext);
};