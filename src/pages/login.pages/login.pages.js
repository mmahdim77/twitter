import React, { useState } from "react";
import { Input, Space, notification } from 'antd';
import Logo from './logo.png'
import './login.styles.css'
import 'antd/dist/antd.css'
import axios from 'axios';
import { Link } from 'react-router-dom';






export default function LoginPage({ setToken }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = async e => {
        e.preventDefault();
        let formData = {"email" : email , "password" : password}
        axios.post('http://twitterapifinal.pythonanywhere.com/account/login/', formData).then(
            res => {
                setToken(res.data.access)
            }
        )
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
                    <Link to="/signup">Sign up for Twitter</Link>
                </span>
            </div>
        </div>
    );
}
