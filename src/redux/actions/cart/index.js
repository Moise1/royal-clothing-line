import * as cartTypes from './types';

export const toggleCartHidden = () => dispatch => {
    dispatch({ type: cartTypes.TOGGLE_CART_HIDDEN })
}

export const addItem = item => dispatch => {
    dispatch({ type: cartTypes.ADD_ITEM, payload: item });
}