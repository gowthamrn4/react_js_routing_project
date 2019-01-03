import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Login from './components/login'
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <div>
  <Login/>
  <Route path="/dashBoard" component={Dashboard} />
      </div>

    );
  }
}

export default App;
