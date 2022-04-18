import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blogs'>
            <div>
                <div>
            <h3>(1)What is the difference between Athentication and Authorization ?</h3> 
            <p><u>Answer:</u>In Authnetication proccess, the identity of users are checked for providing the access to the system. While in authorization proccess , person's or user's authorities are checked for resoursces.Authentication is done before the authorization proccess.</p>
                </div>
                <div>
            <h3>(2) Why are you using firebase? what other options do you have to implement authentication?</h3>
            <p><u>Answer:</u>I am using firebase because firebase helps me to build and run successful apps.It backed by Google.The other options I have to implement authentication are Autho0, MongoDB, Passport Okta, JSON web Token, AmaZon cognito, keyClock etc.</p>
                </div>
                <div>
            <h3>What other services does firebase Provider other than authentication?</h3>
            <p><u>Answer:</u>Google Firebase is a Google-backed application development software that enables developers to develop ios, Andriod  and web apps. Firebase Provides tools for tracking analytics , reporting and fixing app crashes, marketing and product experiment. </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;