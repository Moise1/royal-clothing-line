import React from 'react';
import { createStructuredSelector } from 'reselect';
import {useSelector} from 'react-redux';

// import {CheckoutItem} from '../../components/';

import { selectCartItems, selectCartTotal } from '../../utils/cartSelectors';

import '../../css/checkout.css';

export const Checkout = () => {
    const {cartIems, total} = useSelector(createStructuredSelector({cartItems: selectCartItems, total: selectCartTotal}));
    return ( 
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {/* {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))} */}
            <div className='total'>TOTAL: ${total}</div>
        </div>
    )
}

// Stopped at Master Project - 8 - Vid 26