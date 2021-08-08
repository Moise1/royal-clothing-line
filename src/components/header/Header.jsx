
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/crown.png';
import '../../css/header.css';
import { auth } from '../../firebase/firebase';
import { useSelector} from 'react-redux'

export const Header = () => {

  const {currentUser} = useSelector(({user}) => user );
  
  // console.log("USER STATE", currentUser);

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <img src={logo} alt="" className='logo' />
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
      </div>
    </div>
  )
}