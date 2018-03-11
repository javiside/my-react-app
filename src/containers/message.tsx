import * as React from 'react';

export interface MessageProps {
  msg?: string;
}

const Message: React.SFC<MessageProps> = (props: MessageProps) => {
  return (
    <div>
      <h1>{props.msg ? props.msg : 'HOME'}</h1>
    </div>
  );
};

export default Message;
