import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="gray-background">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          고객 관리 시스템을 만들어 가 봅시다.
        </p>
      </header>
      </div>
    );
  }
}

export default App;
