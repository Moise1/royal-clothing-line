import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { createUserProfileDoc, auth } from '../../firebase/firebase';
import { CustomButton } from '../custom-button/CustomButton';
import { FormInput } from '../form-input/FormInput';
import '../../css/sign-up.css';

export const Signup = () => {

    const [values, setValues] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { displayName, email, password, confirmPassword } = values;

    const handleSubmit = async event => {
        event.preventDefault();


        if (password !== confirmPassword) {
            alert("Sorry! Passwords don't match.");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDoc(user, { displayName });

            setValues({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <div className='sign-up'>
           <h2 className='title'>Sign Up</h2>
              <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
            <h2 className='title'>Already have an account? <span><Link to="/login" className='auth-link'>Login</Link></span> </h2>
        </div>
    )
}
