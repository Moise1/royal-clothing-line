import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../imgs/shopping-bag.svg';
import '../../css/cart-icon.css';
import {toggleCartHidden} from '../../redux/actions/cart';
import {selectCartItemsCount} from '../../utils/cartSelectors';
import {createStructuredSelector} from 'reselect';

export const CartIcon = () => {

    const dispatch = useDispatch();
    const {itemsCount} = useSelector(createStructuredSelector({itemsCount: selectCartItemsCount}))

    return (
        <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingBag className='shopping-icon' />
            <span className='item-count'>{itemsCount}</span>
        </div>
    )
}
 