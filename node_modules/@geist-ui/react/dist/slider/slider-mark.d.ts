import React from 'react';
interface Props {
    max: number;
    min: number;
    step: number;
}
export declare type MarkLeftValue = number;
export declare type Marks = Array<MarkLeftValue>;
declare const SliderMark: React.FC<React.PropsWithChildren<Props>>;
export default SliderMark;
