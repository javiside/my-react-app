import React, { Component } from 'react';
import { Route } from 'react-router-dom'

class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <Route path="/" render={()=><h1>ALL(/)</h1>}/>
        <Route path="/" exact render={()=><h1>Root (/ with exact)</h1>}/>
        <Route path="/home" render={()=><h1>Home(/home)</h1>}/>
        <Route path="/about" render={()=><h1>About(/about)</h1>}/>
        <Route path="/contact" render={()=><h1>Contact(/contact)</h1>}/>
      </div>
      );
    }
  }
  
  export default Blog;
