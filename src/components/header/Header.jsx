
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/crown.png';
import '../../css/header.css';

export const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src={logo} alt="" className='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
    </div>
  </div>
);
