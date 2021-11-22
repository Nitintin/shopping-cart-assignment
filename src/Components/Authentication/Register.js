import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';

const Register = () => {

    const [userMsg, setUserMsg] = useState("");
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const first = e.target.elements[0].value;
        const last = e.target.elements[1].value;
        const email = e.target.elements[2].value;
        const pwd = e.target.elements[3].value;
        const confirm_pwd = e.target.elements[4].value;

        if (confirm_pwd === pwd) {
            setUserMsg("You Have Been Registered Succesfully!",first,last,email);
        }

    }

    return (
        <main className="loginWrapper">
            <div className="userMsg">{userMsg}</div>
            <article className="leftComponent">
                <h3>SIGN UP</h3>
                <p>We dont share your personal details with anyone</p>
            </article>
            <div className="rightComponent">
                <form onSubmit={(e) => handleLoginSubmit(e)}>
                    <TextField
                        id="standard-text-input"
                        label="First Name"
                        type="text"
                        required
                    /><br />
                    <TextField
                        id="standard-text-input"
                        label="Last Name"
                        type="text"
                        required
                    /><br />
                    <TextField
                        id="standard-email-input"
                        label="Email"
                        type="email"
                        autoComplete="current-email"
                        required
                    /><br />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        required
                    /><br />
                    <TextField
                        id="standard-password-input"
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                        required
                    /><br />
                    <button >SIGN UP</button>
                </form>
            </div>

        </main>
    )
}

export default Register
