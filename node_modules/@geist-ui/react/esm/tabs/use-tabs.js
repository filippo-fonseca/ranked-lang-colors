import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import useCurrentState from '../utils/use-current-state';

var useTabs = function useTabs(initialValue) {
  var _useCurrentState = useCurrentState(initialValue),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      state = _useCurrentState2[0],
      setState = _useCurrentState2[1],
      currentRef = _useCurrentState2[2];

  return {
    state: state,
    setState: setState,
    currentRef: currentRef,
    bindings: {
      value: state,
      onChange: function onChange(val) {
        setState(val);
      }
    }
  };
};

export default useTabs;