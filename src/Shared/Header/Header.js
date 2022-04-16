import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <Link className='active' to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/login">Login</Link>
                <Link to="/signin">Signin</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About Me</Link>

            </nav>
        </div>
    );
};

export default Header;