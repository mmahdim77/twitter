import React, { useState } from "react";
import { Input, Space, notification } from 'antd';
import Logo from './logo.png'
import './login.styles.css'
import 'antd/dist/antd.css'




export default function LoginPage({ setToken }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = async e => {
        e.preventDefault();
        fetch('http://twitterapifinal.pythonanywhere.com/account/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(response => {
                if (!response.ok) {
                    notification.open({
                        message: 'Notification Title',
                        description:
                            'No active account found with the given credentials',
                        onClick: () => {
                            console.log('Notification Clicked!');
                        },
                    })
                }
                else{setToken(response.json())}
                    
            })
    }

    return (
        <div className="Login">
            <div>
                <img src={Logo} height='36px' width='45px'>
                </img>
            </div>
            <h2>
                Log in to Twitter
            </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <Input required type="email" className="input" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <Space className="sp" direction="vertical">
                    <Input.Password required className="space" type="password" required value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Space>
                <div>
                    <button type="submit" disabled={!validateForm()}>Submit</button>
                </div>
            </form>
            <div>
                <span>
                    Forgot password?
                </span>
                <span>
                    Sign up for Twitter
                </span>
            </div>
        </div>
    );
}
