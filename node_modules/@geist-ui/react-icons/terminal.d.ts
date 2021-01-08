import React from 'react';
interface Props extends React.SVGProps<SVGElement> {
  color?: string;
  size?: number | string;
}
type Icon = React.FunctionComponent<Props>;
declare const Terminal: Icon;
export default Terminal
