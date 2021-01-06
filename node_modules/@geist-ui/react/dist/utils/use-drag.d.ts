import { RefObject } from 'react';
export declare type DraggingEvent = {
    startX: number;
    currentX: number;
};
export declare type DraggingHandler = (event: DraggingEvent) => void;
declare const useDrag: (elementRef: RefObject<HTMLElement> | null, draggingHandler?: DraggingHandler, dragStartHandler?: DraggingHandler, dragEndHandler?: DraggingHandler) => void;
export default useDrag;
