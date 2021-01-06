import usePortal from '../utils/use-portal';
import useWarning from '../utils/use-warning';
import { useCallback } from 'react';
var defaultOptions = {
  onError: function onError() {
    return useWarning('Failed to copy.', 'use-clipboard');
  }
};

var useClipboard = function useClipboard() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOptions;
  var el = usePortal('clipboard');

  var copyText = function copyText(el, text) {
    if (!el || !text) return;
    var selection = window.getSelection();
    if (!selection) return;
    el.style.whiteSpace = 'pre';
    el.textContent = text;
    var range = window.document.createRange();
    selection.removeAllRanges();
    range.selectNode(el);
    selection.addRange(range);

    try {
      window.document.execCommand('copy');
    } catch (e) {
      options.onError && options.onError();
    }

    selection.removeAllRanges();

    if (el) {
      el.textContent = '';
    }
  };

  var copy = useCallback(function (text) {
    copyText(el, text);
  }, [el]);
  return {
    copy: copy
  };
};

export default useClipboard;