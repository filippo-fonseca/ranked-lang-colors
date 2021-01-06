import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useMemo, useState } from 'react';
import useTheme from '../use-theme';
import { tuple } from '../utils/prop-types';
var breakpoints = tuple('xs', 'sm', 'md', 'lg', 'xl', 'mobile');
var matchType = tuple('up', 'down', 'default');
var defaultResponsiveOptions = {
  match: 'default'
};

var makeQueries = function makeQueries(bp, up, down) {
  var queryString = function queryString(item) {
    var upQuery = "(min-width: ".concat(item.min, ")");
    var downQuery = "(max-width: ".concat(item.max, ")");
    return up ? upQuery : down ? downQuery : "".concat(upQuery, " and ").concat(downQuery);
  };

  var xs = queryString(bp.xs);
  return {
    xs: xs,
    mobile: xs,
    sm: queryString(bp.sm),
    md: queryString(bp.md),
    lg: queryString(bp.lg),
    xl: queryString(bp.xl)
  };
};

var useMediaQuery = function useMediaQuery(breakpoint) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultResponsiveOptions;
  var _options$match = options.match,
      matchType = _options$match === void 0 ? 'default' : _options$match,
      _options$ssrMatchMedi = options.ssrMatchMedia,
      ssrMatchMedia = _options$ssrMatchMedi === void 0 ? null : _options$ssrMatchMedi;
  var supportMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
  var theme = useTheme();
  var mediaQueries = useMemo(function () {
    var up = matchType === 'up';
    var down = matchType === 'down';
    return makeQueries(theme.breakpoints, up, down);
  }, [theme.breakpoints, options]);
  var query = useMemo(function () {
    return mediaQueries[breakpoint];
  }, [mediaQueries, breakpoint]);

  var matchQuery = function matchQuery(q) {
    return window.matchMedia(q);
  };
  /**
   * Do nothing in the server-side rendering.
   * If server match query fucntion is simulated, return user-defined value first.
   */


  var _useState = useState(function () {
    if (supportMedia) return matchQuery(query).matches;

    if (ssrMatchMedia && typeof ssrMatchMedia === 'function') {
      return ssrMatchMedia(query).matches;
    }

    return false;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  useEffect(function () {
    if (!supportMedia) return;
    var queryList = matchQuery(query);

    var update = function update() {
      return setState(matchQuery(query).matches);
    };

    update();
    /**
     * addListener is deprecated. EventTarget.addEventListener is recommended.
     * But in some old browsers, MediaQueryList does not inherit from EventTarget.
     */

    queryList.addListener(update);
    return function () {
      queryList.removeListener(update);
    };
  }, [supportMedia]);
  return state;
};

export default useMediaQuery;