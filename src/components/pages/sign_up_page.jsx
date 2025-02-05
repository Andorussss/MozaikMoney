import React from 'react';
import './SignUpPage.css'
const SignUpPage = () => {
    return (
        <form className="signup-container">
            <h1>Sign Up</h1>
            <p>Lorem ipsum dolor sit amet adipiscing elit.</p>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button>Sign up</button>
            <div className="social-buttons">
                <button><img src="/icons/google-logo.svg" alt="Google" className="logo-icon"/> Sign up with Google</button>
                <button><img src="/icons/facebook-logo.svg" alt="Facebook" className="logo-icon"/> Sign up with Facebook</button>
            </div>
        </form>
    );
};

export default SignUpPage;