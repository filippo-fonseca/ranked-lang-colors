import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useRef } from 'react';
import useCurrentState from './use-current-state';

var useDrag = function useDrag(elementRef) {
  var draggingHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  var dragStartHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  var dragEndHandler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
  var onDragging = useRef(false);

  var _useCurrentState = useCurrentState(0),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      setStartX = _useCurrentState2[1],
      startXRef = _useCurrentState2[2];

  var _useCurrentState3 = useCurrentState(0),
      _useCurrentState4 = _slicedToArray(_useCurrentState3, 3),
      setCurrentX = _useCurrentState4[1],
      currentXRef = _useCurrentState4[2];

  var getCustomEvent = function getCustomEvent() {
    return {
      startX: startXRef.current,
      currentX: currentXRef.current
    };
  };

  var elementMouseDownHandler = function elementMouseDownHandler(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    onDragging.current = true;
    if (!elementRef || !elementRef.current) return;
    setStartX(elementRef.current.getBoundingClientRect().x);
    dragStartHandler(getCustomEvent());
  };

  var globalDraggingHandler = function globalDraggingHandler(event) {
    if (!onDragging.current) return;

    if (event.type === 'touchmove') {
      setCurrentX(event.changedTouches[0].clientX);
    } else {
      setCurrentX(event.clientX);
    }

    draggingHandler(getCustomEvent());
  };

  var globalDragEndHandler = function globalDragEndHandler() {
    if (!onDragging.current) return;
    onDragging.current = false;
    dragEndHandler(getCustomEvent());
  };

  useEffect(function () {
    if (!elementRef || !elementRef.current) return;
    elementRef.current.addEventListener('mousedown', elementMouseDownHandler);
    elementRef.current.addEventListener('touchstart', elementMouseDownHandler);
    window.addEventListener('mousemove', globalDraggingHandler);
    window.addEventListener('touchmove', globalDraggingHandler);
    window.addEventListener('mouseup', globalDragEndHandler);
    window.addEventListener('touchend', globalDragEndHandler);
    return function () {
      window.removeEventListener('mousemove', globalDraggingHandler);
      window.removeEventListener('touchmove', globalDraggingHandler);
      window.removeEventListener('mouseup', globalDragEndHandler);
      window.removeEventListener('touchend', globalDragEndHandler);
      if (!elementRef || !elementRef.current) return;
      elementRef.current.removeEventListener('mousedown', elementMouseDownHandler);
      elementRef.current.removeEventListener('touchstart', elementMouseDownHandler);
    };
  }, [elementRef]);
};

export default useDrag;