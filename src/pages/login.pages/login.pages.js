import React, { useState } from "react";
import { Input, Space, Modal } from 'antd';
import Logo from './logo.png'
import './login.styles.css'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import SignUpPage from '../signup.pages/signup.pages'





export default function LoginPage({ setToken, isModalOpen, setIsModalOpen , setTheUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);
    let history = useHistory();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        let formData = { "email": email, "password": password }
        axios.post('http://twitterapifinal.pythonanywhere.com/account/login/', formData).then(
            res => {
                console.log(res.status)
                if (res.status === 200) {
                    // console.log(res.data.access)
                    axios.get('http://twitterapifinal.pythonanywhere.com/account/myprofile/' , {headers : {'Authorization' : 'Bearer  '+res.data.access}}).then(
                        response => {
                            // console.log(response.data)
                            setTheUser(response.data)
                            setToken(res.data.access)
                            history.push("/home/" + email)
                        }
                    )
                }
            }
        ).catch(err=>setErr(true))
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
            {
                err ? <div className="err">
                    The email and password you entered did not match our records. Please double-check and try again.
                </div> : null
            }
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
                    <a onClick={showModal}>Sign up for Twitter</a>
                </span>
                <Modal className="modal" width="550px" footer={null} closable={false} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <SignUpPage fromLogin={true} setIsModalOpen={setIsModalOpen} />
                </Modal>
            </div>
        </div>
    );
}
