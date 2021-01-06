import React from 'react';
export interface TreeConfig {
    onFileClick?: (path: string) => void;
    initialExpand: boolean;
    isImperative: boolean;
}
export declare const TreeContext: React.Context<TreeConfig>;
export declare const useTreeContext: () => TreeConfig;
