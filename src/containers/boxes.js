import React from "react";
import { Route, Switch } from "react-router-dom";

import Box from "./box";

class Boxes extends React.Component {
  constructor(props) {
    super(props);
    this.myArr = ["one", "two", "three", "four"];
    this.createBoxes = this.createBoxes.bind(this);
  }
  createBoxes() {
    return this.myArr.map((val, idx) => (
      <div key={idx}>
          <Box val={val} />
      </div>
    ));
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/boxes" component={this.createBoxes} />
          <Route exact path="/boxes/:id" component={Box} />
        </Switch>
      </div>
    );
  }
}

export default Boxes;
