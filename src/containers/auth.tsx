import * as React from 'react';

export interface AuthProps {
  handleAuth?(): void;
}

const Auth = (props: AuthProps) => {
  return (
    <div>
      <p>You have to Authenticate to use the Boxes option</p>
      <button onClick={props.handleAuth}>Click to Auth</button>
    </div>
  );
};
export default Auth;
