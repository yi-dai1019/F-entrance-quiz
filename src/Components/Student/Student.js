import React, { Component } from 'react';
import DisplayStudent from './DisplayStudent';
import { fetchAddStudent } from '../../fetchData';

class Student extends Component {
  constructor() {
    super();
    this.state = {
      willAddStudent: false,
    };
  }

  addStudent = (name) => {
    fetchAddStudent(name);
  };

  handleInput = () => {
    this.setState({
      willAddStudent: true,
    });
  };

  enterPressed(event) {
    const code = event.keyCode || event.which;
    if (code === 13) {
      this.addStudent(event.target.value);
    }
  }

  render() {
    const { studentList } = this.props;
    return (
      <div>
        <h1>学员列表</h1>
        <div className="student-list">
          {studentList.map((student) => (
            <DisplayStudent key={student.id} id={student.id} name={student.name} />
          ))}

          {!this.state.willAddStudent && (
            <button id="add-student" type="button" onClick={this.handleInput}>
              +添加学员
            </button>
          )}

          {this.state.willAddStudent && (
            <input
              className="add-student"
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
