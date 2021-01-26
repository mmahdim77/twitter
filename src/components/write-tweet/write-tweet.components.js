
import React, { useState } from 'react';
import './write-tweet.styles.css';
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



const WriteTweet = ({avatar , name , userName , date , postText , postMedias }) => {
    const likedBy =['ali', 'hasan', 'mohsen']
    const [value, setValue] = useState("");
    const onChange = ({ target: { value } }) => {
        setValue(value)
      };
    return (
        <div className="writeTweet">
            <div className="avatar">
                    <Avatar size={49} icon={<UserOutlined />} />
            </div>
            <div className="mainBody">
                <div className="textBox">
                    <TextArea
                        value={value}
                        onChange={onChange}
                        placeholder="What's happening?"
                        bordered={false}
                        fullWidth={true}
                        maxLength="250"
                        autoSize={{ minRows: 2, maxRows: 6 }}
                        />
                </div>
                <div className="footer">
                    <div className="attachments">
                        <PermMediaIcon style={{ fontSize:25 , color:"#1da1f2"}} ></PermMediaIcon>
                    </div>
                    <div className="tweetBtn">
                        <Button type="primary" shape="round" size={"large"}> Tweet </Button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default WriteTweet