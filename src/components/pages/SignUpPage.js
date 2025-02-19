import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import NetBackground from "./NetBackground";
import {AnimatedBackground} from "animated-backgrounds";

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                email,
                password,
            });

            localStorage.setItem('token', response.data.token);
            nav("/main")
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div>
            {/*<AnimatedBackground animationName="particleNetwork"
                                blendMode="Multiply"

            />*/}
            <NetBackground />
            <form className="signup-container" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <p>Lorem ipsum dolor sit amet adipiscing elit.</p>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className="error-message">{error}</p>}
                <button type="submit">Sign up</button>
                <div className="social-buttons">
                    <button className="btn-style">
                        <img src="/icons/google-logo.svg" alt="Google" className="logo-icon"/> Sign up with
                        Google
                    </button>
                    <button>
                        <img src="/icons/facebook-logo.svg" alt="Facebook" className="logo-icon"/> Sign up with
                        Facebook
                    </button>
                </div>
                <p className="register-link">
                    New here? <Link to="/register">Create an account</Link>
                </p>
            </form>
        </div>
    );
};

export default SignUpPage;