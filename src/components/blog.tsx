import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AsyncComponent from '../hoc/asyncComponent';
const AsyncAuth = AsyncComponent(() => import('../containers/auth'));
const AsyncMessage = AsyncComponent(() => import('../containers/message'));
const AsyncBoxes = AsyncComponent(() => import('../containers/boxes'));

interface BlogProps {
  authenticate?(): void;
  checkAuth?(): JSX.Element;
}

interface BlogState {
  auth: Boolean;
}

class Blog extends React.Component<BlogProps, BlogState> implements BlogProps {
  constructor(props: BlogProps) {
    super(props);
    this.state = {
      auth: false
    };
    this.authenticate = this.authenticate.bind(this);
    this.checkAuth = this.checkAuth.bind(this);
  }
  authenticate() {
    this.setState({ auth: true });
  }
  checkAuth() {
    return !this.state.auth ? (
      <AsyncAuth handleAuth={this.authenticate} />
    ) : (
      <AsyncMessage msg="Authenticated!, you can access boxes now" />
    );
  }
  render() {
    return (
      <div className="blog">
        <Switch>
          <Route path="/" exact={true} component={AsyncMessage} />
          <Route path="/auth" exact={true} render={this.checkAuth} />
          {this.state.auth ? (
            <Route path="/boxes" component={AsyncBoxes} />
          ) : (
            <Redirect to="/auth" />
          )}
          <Route render={() => <h1>Not Found</h1>} />
          {/* <Redirect from="*" to="/" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
