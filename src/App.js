import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import './static/css/App.css';

import Header from './containers/header'
import Blog from './components/blog';

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