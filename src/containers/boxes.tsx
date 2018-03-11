import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Box from './box';

interface BoxesProps {
  myArr: string[];
  createBoxes(): JSX.Element;
}

class Boxes extends React.Component<BoxesProps, {}> {
  private myArr: string[];
  constructor(props: BoxesProps) {
    super(props);
    this.myArr = ['one', 'two', 'three', 'four'];
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
          <Route exact={true} path="/boxes" render={this.createBoxes} />
          <Route exact={true} path="/boxes/:id" component={Box} />
        </Switch>
      </div>
    );
  }
}

export default Boxes;
