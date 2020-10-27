import React, { Component } from 'react';
import DisplayTeam from './DisplayTeam';

class Group extends Component {
  constructor() {
    super();
    this.state = {
      teamList: [],
    };
  }

  handleGroupingClick = () => {
    this.fetchGrouping().then(() => this.refreshGroupList());
  };

  fetchGrouping = () => {
    fetch('http://localhost:8080/grouping')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          teamList: data,
        });
      });
  };

  render() {
    return (
      <div>
        <h1>分组学员</h1>
        <button type="button" onClick={this.handleGroupingClick}>
          分组学员
        </button>
        {this.state.teamList.map((team) => (
          <DisplayTeam key={team.id} id={team.id} name={team.name} students={team.students} />
        ))}
      </div>
    );
  }
}

export default Group;
