import React, { Component } from 'react';
import Header from './Header';
import '../styles/contactList.css';
class ContactList extends Component {
  state = { user: '', contacts: [] };

  componentDidMount() {
    let userObj = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: userObj.user, contacts: userObj.contacts });
  }

  render() {
    return (
      <div className='list'>
        <Header></Header>
        <h2>
          All contacts of <strong>{this.state.user}</strong>
        </h2>
        <div className='list__content'>
          {this.state.contacts.map((contact, i) => {
            return (
              <div className='list__item' key={i}>
                <strong>#{i} </strong> {contact.firstName} {contact.lastName}{' '}
                {contact.email}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ContactList;
