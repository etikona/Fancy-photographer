import React, { useEffect, useState } from 'react';
import './Signin.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const Signin = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        other: ""
    })
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

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
    const confirmPassword = (e) => {

        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: e.target.value })
            setErrors({ ...errors, password: "" })
        }
        else {
            setErrors({ ...errors, password: "please set correct password" });
            setUserInfo({ ...userInfo, confirmPassword: "" })
        }

    }

    const handleLogin = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    }
    useEffect(() => {
        console.log(hookError)
    }, [hookError])

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {

            navigate(from)
        }
    }, [user])

    return (
        <div>
            <form onSubmit={handleLogin} >
                <div className='container' >
                    <h3>Sign in</h3>
                    <h6>Email</h6>
                    <input type="email" placeholder=' email' onChange={handleEmail} />
                    {errors?.email && <p className='error-msg'>{errors.email}</p>}
                    <h6>Password</h6>
                    <input type="text" placeholder=' password' />
                    <br />
                    <h6>Confirm Password</h6>
                    <input type="password" placeholder='Confirm password' onChange={confirmPassword} />
                    {errors?.password && <p className='error-msg'>{errors.password}</p>}
                    <br />
                    <button className='btn btn-dark mt-5 w-75' type="submit">Sign in</button>
                    {/* {error && <p className='error-msg'>{error}</p>} */}
                    {hookError && <p>{hookError?.message}</p>}
                </div>
            </form>
        </div>
    );
};

export default Signin;