import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../imgs/shopping-bag.svg';
import '../../css/cart-icon.css';
import {toggleCartHidden} from '../../redux/actions/cart';


export const CartIcon = () => {
    const dispatch = useDispatch();
    return (
        <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingBag className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}
