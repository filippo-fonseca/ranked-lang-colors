import React from 'react';
interface Props {
    active?: boolean;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent) => void;
}
declare type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>;
export declare type PaginationItemProps = Props & NativeAttrs;
declare const PaginationItem: React.FC<React.PropsWithChildren<PaginationItemProps>>;
export default PaginationItem;
