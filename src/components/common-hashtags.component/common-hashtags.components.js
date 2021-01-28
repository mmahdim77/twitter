import { Input, Avatar, Upload, Button, Modal, message } from 'antd';
import React, { useState, useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import PostCard from '../post-card.components/post-card.components'
import axios from 'axios'
import './common-hashtags.styles.css';

const CommonHashtags = ({}) => {
    useEffect(()=>{
        axios.get('http://twitterapifinal.pythonanywhere.com/twitt/top_hashtags').then(
            
        )
    },[])
    return (
        <div className="top-hashtags">
            
        </div>
    )
}

export default CommonHashtags