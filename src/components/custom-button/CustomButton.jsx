import React from 'react'
import '../../css/custom-button.css';

export const CustomButton = ({ children, isGoogleSignIn ,...rest }) => (
    <button 
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...rest}
    >
    {children}
    </button>
  );