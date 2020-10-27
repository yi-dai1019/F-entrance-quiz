import React, { Component } from 'react';
import DisplayStudent from './DisplayStudent';

class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentList: [],
      newStudent: null,
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

  addStudent = (name) => {
    fetch('http://localhost:8080/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(name),
    })
      .then((response) => {
        if (response.ok) {
          return Promise.resolve();
        }
        return Promise.reject();
      })
      .then(() => this.refreshStudentList());
  };

  enterPressed(event) {
    const code = event.keyCode || event.which;
    if (code === 13) {
      this.setState({ newStudent: event.target.value });
      this.addStudent(event.target.value);
    }
  }

  render() {
    return (
      <div>
        <h1>学员列表</h1>
        <div className="student_list">
          {this.state.studentList.map((student) => (
            <DisplayStudent key={student.id} id={student.id} name={student.name} />
          ))}
          {this.state.newStudent ? (
            <DisplayStudent
              key={this.state.studentList.length + 1}
              id={this.state.studentList.length + 1}
              name={this.state.newStudent}
            />
          ) : (
            <input
              className="add_student"
              type="text"
              placeholder="+添加学员"
              onKeyPress={this.enterPressed.bind(this)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Student;
