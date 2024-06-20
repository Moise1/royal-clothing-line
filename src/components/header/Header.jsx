
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/crown.png';
import '../../css/header.css';
import { auth } from '../../firebase/firebase';
import { useSelector} from 'react-redux'
import {CartIcon} from '../cart-icon/CartIcon';
import {CartDropdown} from '../cart-dropdown/CartDropDown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../utils/cartSelectors';
import {selectCurrentUser } from '../../utils/userSelectors'

export const Header = () => {
  
  const {currentUser, hidden} = useSelector(createStructuredSelector({currentUser: selectCurrentUser, hidden: selectCartHidden}));
  // console.log('CURRENT USER', currentUser);
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
          <img src={logo} alt="" className='logo' />
          <div className="logo-title">Royal Clothing Line</div>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
      </Link>
        <Link className='option' to='/shop'>
          CONTACT
      </Link>
        {currentUser ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
          <Link className='option' to='/login'>LOG IN</Link>
        }
      <CartIcon/>
      </div>
      {!hidden && <CartDropdown/>}
    </div>
  )
}
