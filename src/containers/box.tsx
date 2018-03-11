import * as React from 'react';
import { Link } from 'react-router-dom';

interface BoxProps {
  val: string;
}

const Box = (props: BoxProps) => {
  return (
    <Link to={'/boxes/' + (props.val ? props.val : '')}>
      <div className="box red">{props.val ? props.val : 'all'}</div>
    </Link>
  );
};
export default Box;
