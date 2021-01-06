import { tuple } from '../utils/prop-types';
var justify = tuple('flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly');
var alignItems = tuple('flex-start', 'center', 'flex-end', 'stretch', 'baseline');
var alignContent = tuple('stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around');
var direction = tuple('row', 'row-reverse', 'column', 'column-reverse');
var wrap = tuple('nowrap', 'wrap', 'wrap-reverse');