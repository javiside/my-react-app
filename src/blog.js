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
    this.authenticate = this.authenticate.bind(this);
    this.checkAuth = this.checkAuth.bind(this);
  }
  authenticate(){
    this.setState({auth: true})
  }
  checkAuth() {
    return !this.state.auth ? (
      <Auth handleAuth={this.authenticate} />
    ) : (
      <Message msg="Authenticated!, you can access boxes now" />
    );
  }
  render() {
    return (
      <div className="blog">
        <Switch>
          <Route path="/" exact component={Message} />
          <Route path="/auth" exact render={this.checkAuth} />
          {this.state.auth ? (
            <Route path="/boxes" component={Boxes} />
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
