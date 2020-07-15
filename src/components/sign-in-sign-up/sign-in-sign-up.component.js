import React from 'react';

import './sign-in-sign-up.styles.scss';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';

const SignInSignUpPage = () => {
    return ( 
        <div className='sign-in-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
     );
}
 
export default SignInSignUpPage;