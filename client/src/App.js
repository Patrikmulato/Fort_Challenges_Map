import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/Navbar';
import FortMap from './components/Map';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppNavbar />
        <FortMap />
      </div>
    );
  }
}

export default App;
