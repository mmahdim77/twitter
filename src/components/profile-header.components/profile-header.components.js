
import React, { useState, useEffect } from 'react';
import './profile-header.styles.css';
import 'antd/dist/antd.css';
import { Avatar, Dropdown, Menu, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import { UserOutlined, UserAddOutlined } from '@ant-design/icons';
// import CustomButton from '../custom-button/custom-button.component' 
// import {useState , useEffect} from 'react';
import axios from 'axios';
import { Input } from 'antd';

const { TextArea } = Input;



const ProfileHeader = ({ token, myusername, cover, avatar, name, userName, bio, email }) => {
    const [hasFollowed, setHasFollowed] = useState(null);
    let following = [];
    useEffect(() => {
        axios.get('http://twitterapifinal.pythonanywhere.com/account/following/list/' + myusername, { headers: { 'Authorization': 'Bearer  ' + token } }).then(
            res => {
                if (res.data.results.length > 0) {

                    res.data.results.forEach(
                        function (result) {
                            following.push(result.target.username)
                        }
                    )
                }
            }
        ).then(
            () => {
                const found = following.find(element => element === userName);

                found ? setHasFollowed(true) : setHasFollowed(false);
            }
        )
    }, [userName])





    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const editMenu = (
        <Menu>
            <div className="avatar-user" >
                <Avatar className="avatar" />
                <div className="container">
                    <div className="name" >
                        folani
                    </div>
                    <div className="username" >
                        @folani
                    </div>
                </div>
            </div>
            <Menu.Divider />
            <Menu.Item className="menu"><Link to="/">
                Log out
            </Link></Menu.Item>
        </Menu>
    );
    let formData = { email: email }
    const follow = () => {
        axios.post('http://twitterapifinal.pythonanywhere.com/account/follow/', formData, { headers: { 'Authorization': 'Bearer  ' + token } }).then(
            res => {
                setHasFollowed(true)
            }
        )
    };
    const unfollow = () => {
        console.log("hiii")
        axios.post('http://twitterapifinal.pythonanywhere.com/account/unfollow/', formData, { headers: { 'Authorization': 'Bearer  ' + token } }).then(
            res => {
                setHasFollowed(false)
            }
        )
    };
    const edit = () => {

    };

    const noImage = "./material/no-cover.png"
    let haveFollowButton
    if (myusername === userName) {
        haveFollowButton = false
    }
    else {
        haveFollowButton = true
    }
    return (
        <div className="profile-header">
            <div className="cover">
                <img src={cover ? cover : noImage}></img>
            </div>
            <div className="avatar">
                {
                    avatar ?
                        <Avatar size={142} src={avatar} />
                        :
                        <Avatar size={142} icon={<UserOutlined />} />


                }
            </div>
            <div className="details">
                <div className="actionBar">
                    {haveFollowButton ?
                        <div className="followBtn">
                            {
                                myusername ?

                                    <div>
                                        {
                                            hasFollowed == true ?
                                                <Button className="unfollow" type="default" shape="round" size={"large"} onClick={unfollow} > Unfollow </Button>
                                                :
                                                hasFollowed == false ?
                                                    <Button className="follow" type="default" shape="round" size={"large"} onClick={follow} > Follow </Button> :
                                                    <div></div>
                                        }

                                    </div>

                                    :

                                    <div>
                                        <Button type="default" shape="round" size={"large"} onClick={showModal} >Follow</Button>
                                        <Modal style={{ borderRadius: "100px" }} className="modal" width="550px" footer={null} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                            <div className="popLogin"
                                                style={
                                                    {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        justifyContent: "center",
                                                        textAlign: "center"
                                                    }
                                                } >


                                                <UserAddOutlined   style={{margin:"40px",fontSize:"60px",color:"rgb(28, 164, 252)"}} />


                                                <div>
                                                    <h1>
                                                    Follow {" "}
                                                    <span
                                                        style={{ fontStyle: "italic" }}>
                                                        {userName}
                                                    </span> to see what they share on Twitter.
                                                </h1>
                                                <div style={{margin:"40px"}}>
                                                    Sign up so you never miss their Tweets.
                                                </div>
                                                </div>

                                                <div className="button"
                                                >
                                                    <Link to="/login">
                                                        <Button className="log"
                                                            style={
                                                                {
                                                                    backgroundColor: "rgb(28, 164, 252)",
                                                                    outline: "rgb(28, 164, 252)",
                                                                    color: "white",
                                                                    width: "90%",
                                                                    height: "50px",
                                                                    borderRadius: "50px",
                                                                    fontWeight: "bold",
                                                                    fontSize: "15px",
                                                                    justifyItems: "center",
                                                                    margin: "5px"
                                                                }
                                                            }
                                                        >Log in</Button>

                                                    </Link>

                                                </div>
                                                <div className="button">
                                                    <Link to="/signup">
                                                        <Button className="sign"
                                                            style={
                                                                {
                                                                    backgroundColor: "white",
                                                                    outline: "rgb(28, 164, 252)",
                                                                    color: "rgb(28, 164, 252)",
                                                                    width: "90%",
                                                                    height: "50px",
                                                                    borderRadius: "50px",
                                                                    fontWeight: "bold",
                                                                    fontSize: "15px",
                                                                    justifyItems: "center",
                                                                    margin: "5px"
                                                                }
                                                            }>Sign up</Button>
                                                    </Link>

                                                </div>
                                            </div>
                                        </Modal>
                                    </div>

                            }

                        </div>
                        :
                        <div className="followBtn">
                            <Dropdown
                                id="1"
                                className="dropdown"
                                placement="topCenter"
                                overlay={editMenu}
                                trigger={['click']}
                                getPopupContainer={trigger => trigger.parentNode}
                            >
                                <Button type="default" shape="round" size={"large"} onClick={edit}> Edit </Button>
                            </Dropdown>

                        </div>
                    }
                </div>
                <div className="biography">
                    <span className="name">{name}</span>
                    <span className="userName">{userName}</span>
                    <span className="bio">{bio}</span>

                </div>
            </div>
        </div>
    )
}

export default ProfileHeader