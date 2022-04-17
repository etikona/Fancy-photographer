import React from 'react';

const Signin = () => {
    return (
        <div>
            <form >
                <div className='container' >
                    <h3>Signin</h3>
                    <h6>Email</h6>
                    <input type="email" placeholder='email' />
                    <h6>Password</h6>
                    <input type="password" placeholder=' password' />
                    <br />
                    <h6>Confirm password</h6>
                    <input type="password" placeholder='Confirm passwotd' />
                    <button className='btn btn-dark mt-3 w-50' type="submit">Signin</button>
                </div>
            </form>
        </div>
    );
};

export default Signin;