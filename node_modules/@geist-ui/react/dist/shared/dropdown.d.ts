import React, { MutableRefObject } from 'react';
interface Props {
    parent?: MutableRefObject<HTMLElement | null> | undefined;
    visible: boolean;
    disableMatchWidth?: boolean;
    getPopupContainer?: () => HTMLElement | null;
}
declare const Dropdown: React.FC<React.PropsWithChildren<Props>>;
export default Dropdown;
