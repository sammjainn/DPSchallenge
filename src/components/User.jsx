import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {
  state = { allUsers: [], user: '' };

  componentDidMount() {
    if (localStorage.getItem('allUsers')) {
      let users = localStorage.getItem('allUsers');
      this.setState({ allUsers: JSON.parse(users) });
    }
  }

  handleSubmit = () => {
    let allUsers = this.state.allUsers;
    let user = this.state.user;
    let userObj = {};
    let found = false;
    for (let i = 0; i < allUsers.length; i++) {
      let obj = allUsers[i];
      if (obj.user == user) {
        userObj = obj;
        found = true;
        break;
      }
    }
    if (!found) {
      userObj = { user: user, contacts: [] };
      allUsers.push(userObj);
      this.setState({ allUsers: allUsers });
      localStorage.setItem('allUsers', JSON.stringify(this.state.allUsers));
    }
    localStorage.setItem('user', JSON.stringify(userObj));
    console.log(allUsers, user, found);
  };

  render() {
    return (
      <div>
        <div>
          <div>Existing users:</div>
          {this.state.allUsers.map((userObj) => (
            <div>{userObj.user}</div>
          ))}
        </div>
        <div>
          Enter username
          <input
            value={this.state.user}
            onChange={(e) => this.setState({ user: e.target.value })}
          ></input>
          <Link onClick={this.handleSubmit} to='/add'>
            Continue
          </Link>
        </div>
      </div>
    );
  }
}

export default User;
