import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {  useSelector } from 'react-redux'


export const ProtectedRoute = ({component: Component, ...rest}) => {
    const { currentUser } = useSelector(({ user }) => user);
    return  <Route  {...rest}  render={props => currentUser ? <Redirect to="/"/> : <Component {...props} /> }/>
}
