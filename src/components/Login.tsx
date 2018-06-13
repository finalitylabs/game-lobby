import * as React from 'react';

import '../App.css';

class Login extends React.Component {
    public render() {
        return (
            <div className='login'>
                <div className='login-inner'>
                    <input type='text' placeholder='Username'/>
                    <input type='password' placeholder='Password'/>
                    <div className='login-buttons'>
                        <div className='login-button'>Login</div>
                        <div className='create-account-button'>Create Account</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
