import React from 'react';
export interface RadioConfig {
    updateState?: (value: string | number) => void;
    disabledAll: boolean;
    value?: string | number;
    inGroup: boolean;
}
export declare const RadioContext: React.Context<RadioConfig>;
export declare const useRadioContext: () => RadioConfig;
