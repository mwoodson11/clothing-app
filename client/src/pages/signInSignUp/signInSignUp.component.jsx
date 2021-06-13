import React from 'react';

import './signInSignUp.styles.scss';

import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signUp/signUp.component';
const SignInSignUp = () => (
    <div className='signInSignUp'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSignUp;