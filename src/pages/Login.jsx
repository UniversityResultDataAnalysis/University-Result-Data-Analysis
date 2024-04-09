import React, {useEffect, useState} from 'react'
import {auth, resetPassword} from '../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {Link, useNavigate} from 'react-router-dom';
import {FaQuestion, FaSignInAlt} from "react-icons/fa";
import {MdEmail, MdOutlinePassword} from "react-icons/md";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/");
        } catch (error) {
            if (error.code === 'auth/invalid-login-credentials') {
                alert('Invalid login credentials');
            }
            if (error.code === 'auth/too-many-requests') {
                alert('Too many Wrong Attempts. Please try again later');
            }
        }
    }


    useEffect(() => {
        //if token is present then redirect to home page
        const token = localStorage.getItem('token');
        if (token) {
            navigate("/");
        }
    }, []);

    const resetPassword = async () => {

      navigate("/reset-password")

    }


    return (
            <article className={"full-width"}>
                <div>
                    <h1><FaSignInAlt /> Sign In</h1>
                    <p>Enter your credentials to login</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email"><MdEmail /> Email</label>
                        <input
                            type="text"
                            name="login"
                            placeholder="Enter your email address"
                            aria-label="Login"
                            value={email}
                            autocomplete="nickname"
                            required

                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password"><MdOutlinePassword /> Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Your Password"
                            aria-label="Password"
                            value={password}
                            autocomplete="current-password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <fieldset>
                            <p>Need to Signup? <Link to="/signup">Create Account</Link></p>
                        </fieldset>
                        <button type="submit">Login</button>
                        <a
                        onClick={resetPassword}
                        >
                            <FaQuestion />
                            Forgot Password?</a>
                    </form>
                </div>
            </article>

    )
}

export default Login