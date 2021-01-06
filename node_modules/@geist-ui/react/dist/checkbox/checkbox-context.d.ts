import React from 'react';
export interface CheckboxConfig {
    updateState?: (value: string, checked: boolean) => void;
    disabledAll: boolean;
    values: string[];
    inGroup: boolean;
}
export declare const CheckboxContext: React.Context<CheckboxConfig>;
export declare const useCheckbox: () => CheckboxConfig;
