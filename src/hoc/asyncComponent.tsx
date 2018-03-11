import * as React from 'react';

import { MessageProps } from '../containers/message';
import { AuthProps } from '../containers/auth';

interface AsyncComponentProps extends MessageProps, AuthProps {}

interface AsyncComponentState {
  Component: React.ComponentClass | null;
}

function AsyncComponent(importComponent: Function) {
  return class extends React.Component<
    AsyncComponentProps,
    AsyncComponentState
  > {
    constructor(props: AsyncComponentProps) {
      super(props);
      this.state = {
        Component: null
      };
    }
    async componentDidMount() {
      const { default: Component } = await importComponent();
      this.setState({
        Component: Component
      });
    }
    render() {
      const C = this.state.Component;
      return C ? <C {...this.props} /> : null;
    }
  };
}
export default AsyncComponent;
