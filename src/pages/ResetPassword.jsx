import {createUserWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";
import firebase, {auth} from "../firebase";
import {useState} from "react";
import {MdEmail} from "react-icons/md";
import {RxQuestionMarkCircled} from "react-icons/rx";

const ResetPassword = () => {

    const [email, setEmail] = useState('');

    const handleResetPassword = async (event) => {

        event.preventDefault();

        const email = event.target.email.value;

        if (!email.includes('@')) {
            alert('Enter a valid email address');
            return;
        }


        try {
            await sendPasswordResetEmail(auth, email);
            alert('Password Reset Email sent, check your Inbox');
            setEmail('')
        } catch (error) {
            alert(error.code+ " : "+ error.message)
            console.error(error);
        }
    }

    return (
        <article className={"full-width"}>
            <div>
                <h1><RxQuestionMarkCircled /> Forgot Password</h1>
                <p>Enter your email to reset your password</p>
                <form onSubmit={handleResetPassword}>
                    <label htmlFor="email"><MdEmail /> Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        name="email"
                        placeholder="Enter your email address to send reset link"
                        aria-label="Email"
                        value={email}
                        required
                    />
                    <button type="submit">Reset Password</button>

                    <mark>
                        Note: If the email is valid, a password reset link will be sent to your email address, make sure you enter the correct email address to receive the reset link.
                    </mark>

                    <br/>
                    <a
                        href="/login"
                    >Back to Login</a>
                </form>

            </div>
        </article>
    )
}

export default ResetPassword