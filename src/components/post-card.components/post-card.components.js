import React, { useState, useEffect } from 'react';
import './post-card.styles.css';
import { Avatar } from 'antd';
import { UserOutlined, CommentOutlined, HeartFilled, RetweetOutlined, LikeOutlined, EllipsisOutlined } from '@ant-design/icons';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Menu, Dropdown } from 'antd';
import { useHistory } from "react-router-dom";
import { Input, Space, Modal } from 'antd';
import WriteTweet from '../write-tweet/write-tweet.components'

// import CustomButton from '../custom-button/custom-button.component'
// import {useState , useEffect} from 'react';
import axios from 'axios';



const PostCard = ({ tweet, myUser, token }) => {
    const likedBy = ['ali', 'hasan', 'mohsen']
    const avatar = tweet.user.picture_url
    const name = tweet.user.name
    const userName = tweet.user.username
    const date = tweet.date
    const postText = tweet.text
    const postMedias = tweet.image
    const pk = tweet.id
    let history = useHistory()
    const [liked, setLiked] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(null);
    const [whoLikesLen, setWhoLikesLen] = useState(null);
    const [retweeted, setRetweeted] = useState(null);
    const [retweetedLen, setRetweetedLen] = useState(null);
    const dateFloor = (Date.now() - new Date(date)) / 1000
    let formData = { id: pk }
    let whoLikes = []
    let retweetedList = []
    useEffect(() => {
        axios.get('http://twitterapifinal.pythonanywhere.com/twitt/get/' + pk).then(

            res => {
                console.log(res.data)
                if (res.data.likes.length > 0) {
                    res.data.likes.forEach(
                        (result) => whoLikes.push(result)
                    )
                    setWhoLikesLen(whoLikes.length)
                }

                if (res.data.retwitts.length > 0) {
                    res.data.retwitts.forEach(
                        (result) => retweetedList.push(result)
                    )
                    setRetweetedLen(retweetedList.length)
                }
            }
        )
            .then(
                () => {
                    let found = whoLikes.find(element => element === myUser.username);

                    found ? setLiked(true) : setLiked(false);

                    found = retweetedList.find(element => element === myUser.username);

                    found ? setRetweeted(true) : setRetweeted(false);

                }
            )
    }, [])


    const like = (e) => {
        e.stopPropagation();
        console.log("inja")
        axios.post('http://twitterapifinal.pythonanywhere.com/twitt/like/', formData, { headers: { 'Authorization': 'Bearer  ' + token } }).then(
            res => {
                console.log("inja")
                setWhoLikesLen(whoLikesLen+1)
                setLiked(true)
            }
        )
    };

    const dislike = (e) => {
        e.stopPropagation();
        axios.post('http://twitterapifinal.pythonanywhere.com/twitt/dislike/', formData, { headers: { 'Authorization': 'Bearer  ' + token } }).then(
            res => {
                setWhoLikesLen(whoLikesLen-1)
                setLiked(false)
            }
        )
    };
    let form = { pk: pk }
    const retweet = (e) => {
        e.stopPropagation();
        axios.post('http://twitterapifinal.pythonanywhere.com/twitt/retwitt/', form, { headers: { 'Authorization': 'Bearer  ' + token } }).then(
            res => {
                setRetweetedLen(retweetedLen+1)
                setRetweeted(true)
            }
        )
    }
    const unretweet = (e) => {
        e.stopPropagation();
        axios.post('http://twitterapifinal.pythonanywhere.com/twitt/retwitt/', formData, { headers: { 'Authorization': 'Bearer  ' + token } }).then(
            res => {
                setRetweetedLen(retweetedLen-1)
                setRetweeted(false)
            }
        )
    }
    const postComment = (e) => {
        e.stopPropagation()
        showModal()

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
    const openPostCard = (e) => {
        history.push("/profile/" + userName + "/status/" + pk)
    }
    const openUser = (e) => {
        e.stopPropagation();
        history.push("/profile/" + userName)
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
                    <ChatBubbleOutlineIcon style={{ fontSize: 19 }} onClick={postComment} ></ChatBubbleOutlineIcon>
                    <span>1</span>
                </div>
                <div className="actionBarBtn">
                    {
                        retweeted ?
                            <RetweetOutlined style={{ fontSize: 19 }} onClick={unretweet} />
                            :
                            <RetweetOutlined style={{ fontSize: 19 }} onClick={retweet} />
                    }

                    <span>
                        {
                            retweetedLen == 0 ? <span></span> : retweetedLen
                        }
                    </span>
                </div>
                <div className="actionBarBtn">
                    {
                        liked ?
                            <HeartFilled style={{ fontSize: 19, color: "#ca2055" }} onClick={dislike} />
                            :
                            <HeartFilled style={{ fontSize: 19, color: "gray" }} onClick={like} />
                    }
                    <span>{
                        whoLikesLen == 0 ? <span></span> : whoLikesLen
                    }</span>
                </div>
            </div>

            <Modal className="modal" width="550px" footer={null} closable={false} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <PostCard tweet ={tweet} token={token} myUser={myUser} />
                    <WriteTweet token={token} commentTo={pk}  />
            </Modal>
        </div>
    )
}

export default PostCard