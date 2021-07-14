import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/user.css';
class User extends Component {
  state = { allUsers: [], user: '', text: '' };

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
          <div className='user__content'>
            <div className='user__subheading'>
              {this.state.allUsers.length
                ? 'EXISTING USERS'
                : 'NO USER EXISTS, ADD NEW USER'}
            </div>
            <ul>
              {this.state.allUsers.map((userObj, i) => (
                <li key={i} className='user__item'>
                  {userObj.user}
                </li>
              ))}
            </ul>
            <div className='user__input'>
              <input
                value={this.state.user}
                onChange={(e) => this.setState({ user: e.target.value })}
                placeholder='Enter username'
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
      </div>
    );
  }
}

export default User;
