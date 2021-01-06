import React from 'react';
var defaultContext = {};
export var ModalContext = /*#__PURE__*/React.createContext(defaultContext);
export var useModalContext = function useModalContext() {
  return React.useContext(ModalContext);
};