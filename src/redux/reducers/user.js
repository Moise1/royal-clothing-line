import * as userTypes from '../actions/users/types';

const initialState = {
    currentUser: null
};

export const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case userTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
}