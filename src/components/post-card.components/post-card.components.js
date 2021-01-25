
import React from 'react';
import './post-card.styles.css';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { UserOutlined , CommentOutlined , RetweetOutlined ,LikeOutlined} from '@ant-design/icons';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
// import CustomButton from '../custom-button/custom-button.component' 
// import {useState , useEffect} from 'react';
// import axios from 'axios';



const PostCard = ({avatar , name , userName , date , postText , postMedias }) => {
    const likedBy =['ali', 'hasan', 'mohsen']
    return (
        <div className="postCard">
            {
                likedBy.length != 0 ?
                <div className="liked-header">
                    <LikeOutlined />
                    <span>liked by {likedBy[0]} and {likedBy.length} others</span>
                </div>
                :
                <div></div>
            }
            <div className="cardBody">
                <div className="avatar">
                    <Avatar size={49} icon={<UserOutlined />} />
                </div>
                <div className="rightCol">
                    <div className="header">
                        <div className="details">
                            <span className="name">{name}</span>
                            <span className="username">{userName}</span>
                            <span className="date">{date}h</span>
                        </div>
                        <div className="setting"></div>
                    </div>
                    <div className="post">
                        <div className="tweetText">{postText}</div>
                        <div className="media">
                            <img src="./material/1.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="actionBar">
                <ChatBubbleOutlineIcon  style={{ fontSize: 19 }}  ></ChatBubbleOutlineIcon>
                <RetweetOutlined style={{ fontSize: 19 }} />
                <FavoriteBorderIcon style={{ fontSize: 19 }} ></FavoriteBorderIcon>
            </div>
        </div>
    )
}

export default PostCard