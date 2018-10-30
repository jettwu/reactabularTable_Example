import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StickyTable from './StickyTable';
import ResizableColumnsTable from './ResizableColumnsTable'
import VirtualizedTable from './VirtualizedTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <div style={{margin: 'auto', width: '90%', border: '2px solid', padding: '5px'}}>
          <StickyTable />
        </div>
        <div style={{margin: 'auto', width: '90%', border: '2px solid', padding: '5px'}}>
          <ResizableColumnsTable />
        </div>
        <div style={{margin: 'auto', width: '90%', border: '2px solid', padding: '5px'}}>
          <VirtualizedTable />
        </div>
      </div>
    );
  }
}

export default App;
