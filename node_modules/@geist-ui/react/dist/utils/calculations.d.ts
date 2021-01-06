/**
 * Calculate the ratio of two numbers, maximum decimal length can be specified.
 *
 * (0, 100) => 0
 * (50, 100) => 50
 * (11.22, 100) => 11.22
 * (11.22, 100, 4) => 11.2200
 */
export declare const getProportions: (value: number, max: number, maxFixed?: number) => number;
export declare const useProportions: (value: number, max: number, maxFixed?: number) => number;
