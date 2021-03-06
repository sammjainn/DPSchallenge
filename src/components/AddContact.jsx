import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../styles/addContact.css';
class AddContact extends Component {
  state = { user: '', contacts: [], firstName: '', lastName: '', email: '' };

  componentDidMount() {
    let userObj = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: userObj.user, contacts: userObj.contacts });
  }

  handleSubmit = () => {
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let email = this.state.email;
    let contacts = this.state.contacts;

    if (firstName && lastName && email) {
      contacts.push({ firstName: firstName, lastName: lastName, email: email });
    } else {
      alert('invalid values');
    }

    let userObj = { user: this.state.user, contacts: this.state.contacts };
    localStorage.setItem('user', JSON.stringify(userObj));
    let allUsers = JSON.parse(localStorage.getItem('allUsers'));
    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].user === userObj.user) {
        allUsers[i] = userObj;
      }
    }
    localStorage.setItem('allUsers', JSON.stringify(allUsers));
  };

  render() {
    return (
      <div className='add'>
        <Header></Header>
        <h2>
          Add new contact for <strong>{this.state.user}</strong>
        </h2>
        <div className='add__form'>
          <div className='add__item'>
            <p>First Name: </p>
            <input
              type='text'
              required
              value={this.state.firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })}
            ></input>
          </div>
          <div className='add__item'>
            <p>Last Name: </p>
            <input
              type='text'
              required
              value={this.state.lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
            ></input>
          </div>
          <div className='add__item'>
            <p>Email: </p>
            <input
              type='email'
              required
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            ></input>
          </div>
          <Link
            className='add__submit'
            onClick={this.handleSubmit}
            to='/contacts'
          >
            Add contact
          </Link>
        </div>
      </div>
    );
  }
}

export default AddContact;
