import React, { Component } from 'react';

class ContactList extends Component {
  state = { user: '', contacts: [] };

  componentDidMount() {
    let userObj = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: userObj.user, contacts: userObj.contacts });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>All contacts list</div>
      </div>
    );
  }
}

export default ContactList;
