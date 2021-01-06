import React from 'react';
import { tuple } from '../utils/prop-types';
var paginationUpdateTypes = tuple('prev', 'next', 'click');
var defaultContext = {};
export var PaginationContext = /*#__PURE__*/React.createContext(defaultContext);
export var usePaginationContext = function usePaginationContext() {
  return React.useContext(PaginationContext);
};