import React, { useState } from "react";
import { Input, Space } from 'antd';
import Logo from './logo.png'
import './signup.styles.css'
import axios from 'axios';
import { useHistory } from "react-router-dom";




export default function SignUpPage({ fromLogin, setIsModalOpen }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    // const [name, setName] = useState("");
    const [err, setErr] = useState(false);
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
        let formData = { "email": email, "password": password, "username": username }
        axios.post('http://twitterapifinal.pythonanywhere.com/account/register/', formData).then(
            res => {
                console.log(res)
                if (res.status === 200) {
                    if (!fromLogin) { history.push('/login') }
                    else {
                        setIsModalOpen(false)
                    }
                }
            }
        ).catch(err => {
            console.log(err)
            setErr(true)})
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
            {
                err ? <div className="err">
                    The email or username  is already taken.
                </div> : null
            }
            <form onSubmit={handleSubmit}>
                {/* <label>
                    <Input className="input" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </label> */}
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
