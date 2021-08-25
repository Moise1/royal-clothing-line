import React from 'react'
import '../../css/cart-dropdown.css';
import {CustomButton} from '../custom-button/CustomButton';
import {CartItem} from '../cart-item/CartItem';
import {useSelector} from 'react-redux';


export const CartDropdown = () => {
  const {cartItems} = useSelector(state => state.cart);

  return (
    <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
  )
}