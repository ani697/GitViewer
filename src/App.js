import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Links from './Links';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Links />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
