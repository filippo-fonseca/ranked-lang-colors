import { useEffect } from 'react';

var useDOMObserver = function useDOMObserver(ref) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  var config = {
    attributes: false,
    childList: true,
    subtree: true
  };
  useEffect(function () {
    if (!ref || !ref.current) return;
    var unmount = false;

    var done = function done() {
      if (unmount) return;
      callback.apply(void 0, arguments);
    };

    var observer = new MutationObserver(done);
    observer.observe(ref.current, config);
    return function () {
      unmount = true;
      observer.disconnect();
    };
  }, [ref]);
};

export default useDOMObserver;