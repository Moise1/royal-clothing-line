import React from 'react'
import {withRouter} from 'react-router-dom';
import '../../css/cart-dropdown.css';
import { CustomButton } from '../custom-button/CustomButton';
import { CartItem } from '../cart-item/CartItem';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../utils/cartSelectors';


export const CartDropdown = withRouter(props => {
  const {history} = props;
  const cartItems = useSelector(state => selectCartItems(state));
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length
          ? cartItems.map(item => <CartItem key={item.id} item={item} />)
          : <span className='empty-message'>Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={()=> history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
  )
})

// Stopped at Master Project 8 . Vid 24 at 04:56

