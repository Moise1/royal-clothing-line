import * as userTypes from './types';

export const setCurrentUser = user => async dispatch =>{
    dispatch({type: userTypes.SET_CURRENT_USER, payload: user})
};