import * as cartTypes from './types';

export const toggleCartHidden = () => dispatch =>{
    dispatch({type: cartTypes.TOGGLE_CART_HIDDEN})
}