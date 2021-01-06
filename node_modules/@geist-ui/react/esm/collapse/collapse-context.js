import React from 'react';
var defaultContext = {
  values: []
};
export var CollapseContext = /*#__PURE__*/React.createContext(defaultContext);
export var useCollapseContext = function useCollapseContext() {
  return React.useContext(CollapseContext);
};