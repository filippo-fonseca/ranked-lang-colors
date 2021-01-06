import { useEffect } from 'react';

var useClickAnyWhere = function useClickAnyWhere(handler) {
  useEffect(function () {
    var callback = function callback(event) {
      return handler(event);
    };

    document.addEventListener('click', callback);
    return function () {
      return document.removeEventListener('click', callback);
    };
  }, [handler]);
};

export default useClickAnyWhere;