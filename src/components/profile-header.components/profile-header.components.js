
import React, { useState } from 'react';
import './profile-header.styles.css';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import { DownloadOutlined } from '@ant-design/icons';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Button } from 'antd';
import { UserOutlined , CommentOutlined , RetweetOutlined ,LikeOutlined} from '@ant-design/icons';
// import CustomButton from '../custom-button/custom-button.component' 
// import {useState , useEffect} from 'react';
// import axios from 'axios';
import { Input } from 'antd';

const { TextArea } = Input;



const ProfileHeader = ({myusername, cover, avatar , name , userName , bio }) => {
    const noImage = "./material/no-cover.png"
    let haveFollowButton 
    if(myusername === userName) {
        haveFollowButton = false
    }
    else{
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
                        <Button type="default" shape="round" size={"large"}> Follow </Button>
                    </div>
                    :
                    <div className="followBtn">
                        <Button type="default" shape="round" size={"large"}> Edit </Button>
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