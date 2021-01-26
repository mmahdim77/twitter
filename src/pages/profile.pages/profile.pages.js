
import React, { useState } from 'react';
import './profile.styles.css';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import { DownloadOutlined } from '@ant-design/icons';
import ProfileHeader from '../../components/profile-header.components/profile-header.components'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Button } from 'antd';
import { UserOutlined , CommentOutlined , RetweetOutlined ,LikeOutlined} from '@ant-design/icons';
// import CustomButton from '../custom-button/custom-button.component' 
// import {useState , useEffect} from 'react';
// import axios from 'axios';
import { Input } from 'antd';

const { TextArea } = Input;



const Profile = ({cover, avatar , name , userName , bio }) => {

    return (
        <div className="profile">
            
        </div>
    )
}

export default Profile