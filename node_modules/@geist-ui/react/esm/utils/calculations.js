import { useMemo } from 'react';
/**
 * Calculate the ratio of two numbers, maximum decimal length can be specified.
 *
 * (0, 100) => 0
 * (50, 100) => 50
 * (11.22, 100) => 11.22
 * (11.22, 100, 4) => 11.2200
 */

export var getProportions = function getProportions(value, max) {
  var maxFixed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  var val = value / max;
  var couldBeDecimalValue = (Number.isNaN(val) ? 0 : val) * 100;
  if (couldBeDecimalValue > 100) return 100;
  if (couldBeDecimalValue < 0) return 0;
  if (!"".concat(couldBeDecimalValue).includes('.')) return couldBeDecimalValue;
  var decimal = "".concat(couldBeDecimalValue).split('.')[1];
  if (decimal.length < maxFixed) return couldBeDecimalValue;
  return +couldBeDecimalValue.toFixed(maxFixed);
};
export var useProportions = function useProportions(value, max) {
  var maxFixed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  return useMemo(function () {
    return getProportions(value, max, maxFixed);
  }, [value, max, maxFixed]);
};