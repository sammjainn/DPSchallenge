import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
class Header extends Component {
  state = {};

  render() {
    return (
      <div className='header'>
        <div className='header__content'>
          <div
            className='header__buttons'
            variant='contained'
            color='secondary'
          >
            <Link className='header__links' to='/'>
              Change user
            </Link>
          </div>
          <div
            className='header__buttons'
            variant='contained'
            color='secondary'
          >
            <Link className='header__links' to='/add'>
              Add contacts
            </Link>
          </div>
          <div
            className='header__buttons'
            variant='contained'
            color='secondary'
          >
            <Link className='header__links' to='/contacts'>
              Show all contacts
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
