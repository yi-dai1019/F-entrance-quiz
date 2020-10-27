import React, { Component } from 'react';
import DisplayStudent from './DisplayStudent';

class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentList: [],
    };
  }

  componentDidMount() {
    this.refreshStudentList();
  }

  refreshStudentList = () => {
    fetch('http://localhost:8080/students')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          studentList: data,
        });
      });
  };

  render() {
    return (
      <div>
        <h1>学员列表</h1>
        <div className="student_list">
          {this.state.studentList.map((student) => (
            <DisplayStudent key={student.id} id={student.id} name={student.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Student;
