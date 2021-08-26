import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {  useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser } from '../utils/userSelectors';


export const ProtectedRoute = ({component: Component, ...rest}) => {
    const {currentUser} = useSelector(createStructuredSelector({currentUser: selectCurrentUser}));

    return  <Route  {...rest}  render={props => currentUser ? <Redirect to="/"/> : <Component {...props} /> }/>
}
