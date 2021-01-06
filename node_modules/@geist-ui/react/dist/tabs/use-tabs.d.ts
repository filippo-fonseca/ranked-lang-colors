import { Dispatch, MutableRefObject, SetStateAction } from 'react';
declare const useTabs: (initialValue: string) => {
    state: string;
    setState: Dispatch<SetStateAction<string>>;
    currentRef: MutableRefObject<string>;
    bindings: {
        value: string;
        onChange: (val: string) => void;
    };
};
export default useTabs;
