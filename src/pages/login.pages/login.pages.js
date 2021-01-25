import React, { useState,useEffect } from "react";
import { Input, Space, Modal } from 'antd';
import Logo from './logo.png'
import './login.styles.css'
import 'antd/dist/antd.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import SignUpPage from '../signup.pages/signup.pages'





export default function LoginPage({ setToken,closed }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    let history = useHistory();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    useEffect(() => {
        if(closed){
            setIsModalVisible(false);
        }
    }, [closed])

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        let formData = { "email": email, "password": password }
        axios.post('http://twitterapifinal.pythonanywhere.com/account/login/', formData).then(
            res => {
                console.log(res)
                if (res.status == 200) {
                    history.push("/home/" + email)
                }
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
                    <Link onClick={showModal}>Sign up for Twitter</Link>
                </span>
                <Modal className="modal" width="550px" footer={null} closable={false} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <SignUpPage fromLogin={true} />
                </Modal>
            </div>
        </div>
    );
}
