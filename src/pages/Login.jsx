import React, {useEffect, useState} from 'react'
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.error(error);
      if(error.message==="Firebase: Error (auth/invalid-email)."){
        alert("Invalid Credentials")
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
        <article className="grid">
          <div>
            <h1>Sign in</h1>
            {/*<hgroup>*/}

            {/*  <h2>Enter the Credentials to Login</h2>*/}
            {/*</hgroup>*/}
            <form onSubmit={handleSubmit} >
              <input
                  type="text"
                  name="login"
                  placeholder="Username"
                  aria-label="Login"
                  value={email}
                  autocomplete="nickname"
                  required

                  onChange={(e) => setEmail(e.target.value)}
              />
              <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  aria-label="Password"
                  value={password}
                  autocomplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
              />
              <fieldset>
                <p>Need to Signup? <Link to="/signup">Create Account</Link></p>
              </fieldset>
              <button type="submit" >Login</button>
            </form>
          </div>
        </article>
      </main>

  )
}

export default Login