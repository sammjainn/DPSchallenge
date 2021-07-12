import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <Link to='/'>Change user</Link>
        </div>
        <div>
          <Link to='/add'>Add contacts</Link>
        </div>
        <div>
          <Link to='/contacts'>Show all contacts</Link>
        </div>
      </div>
    );
  }
}

export default Header;
