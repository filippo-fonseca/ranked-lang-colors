import React from 'react';
export interface FieldItem {
    value: string;
    label: string;
}
export interface FieldsetConfig {
    register?: (item: FieldItem) => void;
    currentValue: string;
    inGroup: boolean;
}
export declare const FieldsetContext: React.Context<FieldsetConfig>;
export declare const useFieldset: () => FieldsetConfig;
