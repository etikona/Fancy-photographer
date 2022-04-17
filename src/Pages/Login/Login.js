import React, { useEffect, useState } from 'react';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",

    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        other: ""
    })
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    // Email
    const handleEmail = (e) => {
        const emailRegax = /\S+@\S+\.\S+/;
        const validEmail = emailRegax.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: "" })
        }
        else {
            setErrors({ ...errors, email: "Invalid email id" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }
    // Password 
    const handlePassword = (e) => {
        const passwordRegax = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validPassword = passwordRegax.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value })
            setErrors({ ...errors, password: "" })
        }
        else {
            setErrors({ ...errors, password: "wrong password" });
            setUserInfo({ ...errors, password:"" })
        }

    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }
    useEffect( ()=>{
        console.log(hookError)
    }, [hookError])

    return (
        <div>
            <form onSubmit={handleLogin} >
                <div className='container' >
                    <h3>Login</h3>
                    <h6>Email</h6>
                    <input type="email" placeholder=' email' onChange={handleEmail} />
                    {errors?.email && <p className='error-msg'>{errors.email}</p>}
                    <h6>Password</h6>
                    <input type="password" placeholder=' password' onChange={handlePassword} />
                    {errors?.password && <p className='error-msg'>{errors.password}</p>}
                    <br />
                    <button className='btn btn-dark mt-3 w-75' type="submit">Login</button>
                    <p> <Link to="/signin">Sign in first</Link></p>
                    {/* {error && <p className='error-msg'>{error}</p>} */}
                    {hookError && <p>{hookError?.message}</p>}
                </div>
            </form>
        </div>
    );
};

export default Login;