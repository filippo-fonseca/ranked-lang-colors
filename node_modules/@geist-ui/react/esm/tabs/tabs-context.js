import React from 'react';
var defaultContext = {
  inGroup: false
};
export var TabsContext = /*#__PURE__*/React.createContext(defaultContext);
export var useTabsContext = function useTabsContext() {
  return React.useContext(TabsContext);
};