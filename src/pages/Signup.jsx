import React, {useEffect, useState} from 'react'
import {auth} from '../firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {Link, useNavigate} from 'react-router-dom';
import {BsDatabaseFillCheck} from "react-icons/bs";
import {MdEmail, MdOutlinePassword} from "react-icons/md";

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');

    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== checkPassword) {
            alert("Passwords do not match")
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/");
        } catch (error) {
            console.log(error.code)

            if (error.code === 'auth/email-already-in-use') {
                alert('This User already exists, Please Login');
            }

            if(error.code === 'auth/invalid-email'){
                alert('Invalid Email, Enter a valid email address');
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

    return (
            <article className={"full-width"}>
                <h1><BsDatabaseFillCheck /> Sign Up</h1>
                <p>Enter your credentials to signup</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email"><MdEmail /> Email</label>
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password"><MdOutlinePassword /> Password</label>
                    <input
                        type="password"
                        placeholder="Your Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="password"><MdOutlinePassword /> Re-enter Password</label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        required
                        value={checkPassword}
                        onChange={(e) => setCheckPassword(e.target.value)}
                    />
                    <button type="submit" className='signup-button'>Signup</button>
                </form>
                <p>Need to Login? <Link to="/login">Login</Link></p>
            </article>
)
}

export default Signup