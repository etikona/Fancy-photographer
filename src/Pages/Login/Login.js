import React, { useState } from 'react';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <form onSubmit={handleLogin} >
                <div className='container' >
                    <h3>Login</h3>
                    <h6>Email</h6>
                    <input type="email" placeholder=' email' onChange={handleEmail} />
                    <h6>Password</h6>
                    <input type="password" placeholder=' password' onChange={handlePassword} />
                    <br />
                    <button className='btn btn-dark mt-5 w-75' type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;