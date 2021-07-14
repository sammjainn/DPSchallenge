import React, { Component } from 'react';
import Header from './Header';
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
        <Header></Header>
        <div>Add contacts page</div>
      </div>
    );
  }
}

export default AddContact;
