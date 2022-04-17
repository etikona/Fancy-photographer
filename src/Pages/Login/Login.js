import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div>
            <form >
                <div className='container' >
                    <h3>Login</h3>
                    <h6>Email</h6>
                    <input type="email" placeholder='your email' />
                    <h6>Password</h6>
                    <input type="password" placeholder='Type your password' />
                    <br />
                    <button className='btn btn-dark mt-3 w-50' type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;