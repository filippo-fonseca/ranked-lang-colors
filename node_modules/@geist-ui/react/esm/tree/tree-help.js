import React from 'react';
export var sortChildren = function sortChildren(children, folderComponentType) {
  return React.Children.toArray(children).sort(function (a, b) {
    if (! /*#__PURE__*/React.isValidElement(a) || ! /*#__PURE__*/React.isValidElement(b)) return 0;
    if (a.type !== b.type) return a.type !== folderComponentType ? 1 : -1;
    return "".concat(a.props.name).charCodeAt(0) - "".concat(b.props.name).charCodeAt(0);
  });
};
export var makeChildPath = function makeChildPath(name, parentPath) {
  if (!parentPath) return name;
  return "".concat(parentPath, "/").concat(name);
};
export var stopPropagation = function stopPropagation(event) {
  event.stopPropagation();
  event.nativeEvent.stopImmediatePropagation();
};