import React from 'react';
var defaultContext = {
  inGroup: false,
  currentValue: ''
};
export var FieldsetContext = /*#__PURE__*/React.createContext(defaultContext);
export var useFieldset = function useFieldset() {
  return React.useContext(FieldsetContext);
};