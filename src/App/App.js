import React, { Component } from 'react';
import './App.scss';
import Group from '../Components/Group/Group';
import Student from '../Components/Student/Student';
import { fetchGetInfo } from '../fetchData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      studentList: [],
    };
  }

  componentDidMount = () => {
    const studentList1 = fetchGetInfo('students');
    this.setState({ studentList: studentList1 });
  };

  render() {
    return (
      <div data-testid="app" className="App">
        <Group studentList={this.state.studentList} />
        <Student studentList={this.state.studentList} />
      </div>
    );
  }
}

export default App;
