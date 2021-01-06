import _typeof from "@babel/runtime/helpers/esm/typeof";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import useCurrentState from '../utils/use-current-state';

var useInput = function useInput(initialValue) {
  var _useCurrentState = useCurrentState(initialValue),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      state = _useCurrentState2[0],
      setState = _useCurrentState2[1],
      currentRef = _useCurrentState2[2];

  return {
    state: state,
    setState: setState,
    currentRef: currentRef,
    reset: function reset() {
      return setState(initialValue);
    },
    bindings: {
      value: state,
      onChange: function onChange(event) {
        if (_typeof(event) === 'object' && event.target) {
          setState(event.target.value);
        } else {
          setState(event);
        }
      }
    }
  };
};

export default useInput;