import React from 'react';
export interface ModalConfig {
    close?: () => void;
}
export declare const ModalContext: React.Context<ModalConfig>;
export declare const useModalContext: () => ModalConfig;
