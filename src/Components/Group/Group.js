import React, { Component } from 'react';
import DisplayTeam from './DisplayTeam';
import { fetchGetInfo } from '../../fetchData';

class Group extends Component {
  constructor() {
    super();
    this.state = {
      groupList: [],
    };
  }

  fetchGroup = (groupNumber) => {
    const groupList1 = fetchGetInfo(`groups/${groupNumber}`);
    this.setState({ groupList: groupList1 });
  };

  render() {
    return (
      <div>
        <h1>分组学员</h1>
        <button type="button" onClick={this.fetchGroup(this.state.groupNumber)}>
          分组学员
        </button>
        {this.state.groupList.map((group) => (
          <DisplayTeam key={group.id} id={group.id} name={group.name} students={group.students} />
        ))}
      </div>
    );
  }
}

export default Group;
