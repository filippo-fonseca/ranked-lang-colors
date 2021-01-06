declare const breakpoints: ["xs", "sm", "md", "lg", "xl", "mobile"];
export declare type ResponsiveBreakpoint = typeof breakpoints[number];
declare const matchType: ["up", "down", "default"];
export declare type ResponsiveMatchType = typeof matchType[number];
export declare type ResponsiveOptions = {
    match?: ResponsiveMatchType;
    ssrMatchMedia?: (query: string) => {
        matches: boolean;
    };
};
declare const useMediaQuery: (breakpoint: ResponsiveBreakpoint, options?: ResponsiveOptions) => boolean;
export default useMediaQuery;
