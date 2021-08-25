import React from 'react'
import '../../css/custom-button.css';

export const CustomButton = ({ children, isGoogleSignIn, inverted ,...rest }) => (
    <button 
    className={ `
      ${inverted? 'inverted' : ''}
      ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button
    `}
    {...rest}
    >
    {children}
    </button>
  );