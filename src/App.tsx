import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './static/styles/App.css';

import Header from './containers/header';
import Blog from './components/blog';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;