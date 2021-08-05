import React from 'react'
import '../../css/custom-button.css';

export const CustomButton = ({ children, ...rest }) => (
    <button className='custom-button' {...rest}>
      {children}
    </button>
  );