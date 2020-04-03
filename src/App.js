import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import home from './components/Layout/Home/Home';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Route path="/" component = { home }/>
      </div>
    )
  };

}

export default App;
