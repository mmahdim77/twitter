import React, { useState } from "react";
import { Input, Space } from 'antd';
import Logo from './logo.png'
import './signup.styles.css'
import axios from 'axios';
import { useHistory } from "react-router-dom";




export default function SignUpPage({ fromLogin, setClosed }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    let history = useHistory();

    function validateForm() {
        return (
            email.length > 0 &&
            password.length > 0 &&
            password === confirmPassword
        );
    }

    const handleSubmit = async e => {
        e.preventDefault();
        let formData = { "email": email, "username": username, "password": password }
        console.log(email)
        console.log(password)
        console.log(username)
        axios.post('http://twitterapifinal.pythonanywhere.com/account/register', formData).then(
            res => {
                if (res.status == 200) {
                    if (!fromLogin) { history.push('/login') }
                    else{
                        setClosed(true)
                    }
                }
            }
        )
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
                    <Input.Password className="space" type="password" required value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <Input.Password className="space" type="password" required value={confirmPassword} placeholder="ConfirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
                </Space>
                <div>
                    <button placeholder="Password" type="submit" disabled={!validateForm()}> Sign up </button>
                </div>
            </form>
        </div>
    );
}
