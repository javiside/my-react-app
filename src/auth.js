import React from "react";

const Auth = props => {
  return (
    <div>
      <p>You have to Authenticate to use the Boxes option</p>
      <button onClick={props.handleAuth}>Click to Auth</button>
      </div>
  );
};
export default Auth;
