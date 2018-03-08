import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Auth from "./auth";
import Message from "./message";
import Boxes from "./boxes";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false
    };
    this.authComp = this.authComp.bind(this);
    this.authenticate = this.authenticate.bind(this);
  }
  authComp() {
    return !this.state.auth ? (
      <Auth handleAuth={this.authenticate} />
    ) : (
      <Message msg="Authenticated! Access Boxes granted" />
    );
  }
  authenticate() {
    this.setState({ auth: true });
  }
  render() {
    return (
      <div className="blog">
        <Switch>
          <Route path="/" exact component={Message} />
          <Route path="/home" component={Message} />
          <Route path="/auth" component={this.authComp} />
          {this.state.auth ? (
            <Route path="/boxes" component={Boxes} />
          ) : (
            <Message msg="You have to Authenticate first" />
          )}
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

export default Blog;
