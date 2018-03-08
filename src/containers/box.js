import React from "react";
import { Link } from "react-router-dom";

const Box = props => {
  return (
    <Link to={"/boxes/" + ((props.val)? props.val: '')}>
      <div className="box red">{props.val? props.val : 'all'}</div>
    </Link>
  );
};
export default Box;
