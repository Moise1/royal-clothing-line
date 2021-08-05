import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FormInput } from '../form-input/FormInput';
import { CustomButton } from '../custom-button/CustomButton';
import '../../css/login.css';

export const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        setValues({ email: '', password: '' });
    };

    const handleChange = e => {
        const { value, name } = e.target;
        setValues({ [name]: value });
    };

    return (
        <div className='login'>
            <h2> Already have an account ?  <span><Link to="/signup" className="auth-link">Sign Up</Link></span></h2>
            <span>Please Sign In</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={values.email}
                    label='Email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={values.password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <CustomButton type='submit'> Sign in </CustomButton>
            </form>
        </div>
    )
}