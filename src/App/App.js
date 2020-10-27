import React, { Component } from 'react';
import './App.scss';
import Group from '../Components/Group/Group';
import Student from '../Components/Student/Student';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Group />
        <Student />
      </div>
    );
  }
}

export default App;
