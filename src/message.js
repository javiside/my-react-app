import React from "react";

const Message = props => {
  return (
    <div>
      <h1>{props.msg ? props.msg : "HOME"}</h1>
    </div>
  );
};

export default Message;
