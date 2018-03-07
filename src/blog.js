import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Message from "./message";
import Boxes from "./boxes";

class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <Switch>
          <Route path="/" exact component={Message} />
          <Route path="/home" component={Message} />
          <Route path="/about" component={Message} />
          <Route path="/boxes" component={Boxes} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
