import React, { useState } from "react";
import {Input, Space } from 'antd';
import Logo from './logo.png'
import './signup.styles.css'
import 'antd/dist/antd.css'



async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}




export default function SignUpPage({ setToken }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");

    function validateForm() {
        return (
            email.length > 0 &&
            password.length > 0 &&
            password === confirmPassword
        );
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });
        setToken(token);
    }

    return (
        <div className="Signup">
            <div>
                <img src={Logo} height='36px' width='45px'>
                </img>
            </div>
            <h2>
                Create your account
            </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <Input className="input" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    <Input className="input" type="email" required value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <Space className="sp" direction="vertical">
                    <Input.Password className="space" type="password" required value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <Input.Password className="space" type="password" required value={confirmPassword} placeholder="ConfirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}/>
                </Space>
                <div>
                    <button placeholder="Password" type="submit" disabled={!validateForm()}> Sign up </button>
                </div>
            </form>
        </div>
    );
}
