import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/user.css';
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
      if (obj.user === user) {
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
  };

  render() {
    return (
      <div className='user'>
        <h1>Welcome to Contacts App</h1>
        <div className='user__container'>
          <div className='user__left'>
            <div className='user__subheading'>Existing users:</div>
            <ul>
              {this.state.allUsers.map((userObj, i) => (
                <li key={i}>{userObj.user}</li>
              ))}
            </ul>
          </div>
          <div className='user__right'>
            <div className='user__subheading'> Enter username </div>
            <input
              value={this.state.user}
              onChange={(e) => this.setState({ user: e.target.value })}
            ></input>
            <Link
              className='user__submit'
              onClick={this.handleSubmit}
              to='/add'
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
