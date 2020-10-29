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
    // TODO GTB-知识点: - refreshGroupList为定义
    this.fetchGrouping().then(() => this.refreshGroupList());
  };

  fetchGrouping = () => {
    // TODO GTB-工程实践: - 建议把数据请求提取到单独的service
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
      // TODO GTB-知识点: * 没有使用语义标签
      <div>
        <h1>分组学员</h1>
        <button type="button" onClick={this.handleGroupingClick}>
          分组学员
        </button>
        {this.state.teamList.map((team) => (
          // TODO GTB-知识点: - 直接传入team对象给DisplayTeam即可
          <DisplayTeam key={team.id} id={team.id} name={team.name} students={team.students} />
        ))}
      </div>
    );
  }
}

export default Group;
