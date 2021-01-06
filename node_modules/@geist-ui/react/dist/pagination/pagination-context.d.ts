import React from 'react';
declare const paginationUpdateTypes: ["prev", "next", "click"];
export declare type PaginationUpdateType = typeof paginationUpdateTypes[number];
export interface PaginationConfig {
    isFirst?: boolean;
    isLast?: boolean;
    update?: (type: PaginationUpdateType) => void;
}
export declare const PaginationContext: React.Context<PaginationConfig>;
export declare const usePaginationContext: () => PaginationConfig;
export {};
