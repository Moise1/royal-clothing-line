import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FormInput } from '../form-input/FormInput';
import { CustomButton } from '../custom-button/CustomButton';
import '../../css/login.css';
import { signInWithGoogle } from '../../firebase/firebase';

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
        setValues({...values,  [name]: value });
    };

    return (
        <div className='login'>
            <h2>Please Sign In</h2>

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
                <div className="auth-btns">
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google </CustomButton>
                </div>
            </form>
            <h2 className="alt-text"> Don't haven an an account ?  <span><Link to="/signup" className="auth-link">Sign Up</Link></span></h2>
        </div>
    )
}
