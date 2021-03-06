import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <nav>
                <h4 className='text-white'>Fancy Photographer</h4>
                <Link className='active' to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>              
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About Me</Link>
                <Link to="/signin">Signin</Link>
                {user ? (
                    <button onClick={() => signOut(auth)}> Logout</button>
                ) :
                    <Link to="/login">Login</Link>
                }

                {user?.email}
            </nav>
        </div>
    );
};

export default Header;