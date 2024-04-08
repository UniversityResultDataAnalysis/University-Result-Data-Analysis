import React, {useEffect, useState} from 'react'
import {auth} from '../firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {Link, useNavigate} from 'react-router-dom';

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
            if (error.code === 'auth/email-already-in-use') {
                alert('This User already exists, Please Login');
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
        <main className="container">
            <h1>Signup Page</h1>
            <form onSubmit={handleSubmit} className='signup-form'>
                <input
                    type="text"
                    placeholder="Your Username"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Your Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
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
        </main>
    )
}

export default Signup