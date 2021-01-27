import React, { useState, useEffect } from 'react';
import './post-card.styles.css';
import { Avatar } from 'antd';
import { UserOutlined, CommentOutlined,HeartFilled ,RetweetOutlined, LikeOutlined, EllipsisOutlined } from '@ant-design/icons';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Menu, Dropdown } from 'antd';
import { useHistory } from "react-router-dom";


// import CustomButton from '../custom-button/custom-button.component'
// import {useState , useEffect} from 'react';
import axios from 'axios';



const PostCard = ({ myUser,token, avatar, name, userName, date, postText, postMedias, pk }) => {
    const likedBy = ['ali', 'hasan', 'mohsen']
    const [liked, setLiked] = useState(null);
    const dateFloor = (Date.now() - new Date(date)) / 1000
    let formData = { pk: pk }
    let whoLikes=[]
    useEffect(() => {
        console.log(pk)
        axios.get('http://twitterapifinal.pythonanywhere.com/twitt/get/2' ).then(
            res => {
                console.log(res)
                if (res.data.likes.length > 0) {
                    res.data.likes.forEach(
                        function (result) {
                            whoLikes.push(result.target.username)
                        }
                    )
                }
            }
        )
        .then(
            () => {
                const found = whoLikes.find(element => element === myUser.username);

                found ? setLiked(true) : setLiked(false);
            }
        )
    }, [])


    const like = () => {
        setLiked(true)
        console.log("lie")
        axios.post('http://twitterapifinal.pythonanywhere.com/twitt/like/', formData, { headers: { 'Authorization': 'Bearer  ' + token } }).then(
            res => {
                setLiked(true)
            }
        )
    };
    const retweet = () => {
        console.log("retweeted")
    }
    const comments = () => {
        console.log("comments")
    }
    const menu = (id) => (
        <Menu>
            {/* <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              
            </a>
          </Menu.Item> */}
            <Menu.Item danger>delete {id}</Menu.Item>
        </Menu>
      );
    const openPostCard =(e)=>{
        history.push("/profile/"+userName+"/status/"+pk )
    }
    const openUser =(e)=>{
        e.stopPropagation();
        history.push("/profile/"+userName )
    }
    return (
        <div className="postCard" onClick={openPostCard}>
            {
                likedBy.length != 0 ?
                    <div className="liked-header">
                        <LikeOutlined />
                        <span>liked by {likedBy[0]} and {likedBy.length - 1} others</span>
                    </div>
                    :
                    <div></div>
            }
            <div className="cardBody">
                <div className="avatar" >
                    <Avatar size={49} src={avatar} onClick={openUser} />
                </div>
                <div className="rightCol">
                    <div className="header">
                        <div className="details" onClick={openUser}>
                            <span className="name">{name}</span>
                            <span className="username">@{userName}</span>
                            {
                                date != '' ?
                                    <span className="date">
                                        {
                                            dateFloor < 60 ?
                                                Math.floor(dateFloor) + ' Seconds' :
                                                dateFloor / 60 < 60 ?
                                                    Math.floor(dateFloor / 60) + ' Minutes' :
                                                    dateFloor / 3600 < 24 ?
                                                        Math.floor(dateFloor / 3600) + ' Hours' :
                                                        dateFloor / 86400 < 30 ?
                                                            Math.floor(dateFloor / 86400) + ' days' :
                                                            dateFloor / 86400 / 30 < 12 ?
                                                                Math.floor(dateFloor / 86400 / 30) + ' Months' :
                                                                Math.floor(dateFloor / 86400 / 30 / 12) + ' Years'
                                        }
                                    </span>
                                    :
                                    <div></div>

                            }
                        </div>
                        <div className="setting">
                            <Dropdown overlay={() => menu(1)}>
                                <EllipsisOutlined className="ant-dropdown-link" onClick={e => e.preventDefault()} />
                            </Dropdown>

                        </div>
                    </div>
                    <div className="post">
                        <div className="tweetText">{postText}</div>
                        <div className="media">
                            <img src={postMedias}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="actionBar">
                <div className="actionBarBtn">
                    <ChatBubbleOutlineIcon style={{ fontSize: 19 }} onClick={comments} ></ChatBubbleOutlineIcon>
                    <span>1</span>
                </div>
                <div className="actionBarBtn">
                    <RetweetOutlined style={{ fontSize: 19 }} onClick={retweet} />
                    <span>1</span>
                </div>
                <div className="actionBarBtn">
                    {
                        liked ?
                            <HeartFilled  style={{ fontSize: 19, color: "#ca2055" }}/>
                            :
                            <HeartFilled  style={{ fontSize: 19, color: "gray" }} onClick={like}/>
                    }
                    <span>1</span>
                </div>
            </div>
        </div>
    )
}

export default PostCard