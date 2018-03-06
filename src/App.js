import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import './static/css/App.css';

import Header from './header'
import Blog from './blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Blog />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;