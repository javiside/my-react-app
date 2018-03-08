import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import Auth from "../containers/auth";
// import Message from "../containers/message";
// import Boxes from "../containers/boxes";

import AsyncComponent from "../hoc/asyncComponent";
const AsyncAuth = AsyncComponent(() => import("../containers/auth"));
const AsyncMessage = AsyncComponent(() => import("../containers/message"));
const AsyncBoxes = AsyncComponent(() => import("../containers/boxes"));

class Blog extends Component {
  constructor(props) {
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
          <Route path="/" exact component={AsyncMessage} />
          <Route path="/auth" exact render={this.checkAuth} />
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
