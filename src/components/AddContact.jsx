import React, { Component } from 'react';

class AddContact extends Component {
  state = { user: '', contacts: [] };

  componentDidMount() {
    let userObj = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: userObj.user, contacts: userObj.contacts });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>Add contacts page</div>
      </div>
    );
  }
}

export default AddContact;
