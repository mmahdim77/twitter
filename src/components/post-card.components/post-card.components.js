
import React from 'react';
import './post-card.styles.css';
// import CustomButton from '../custom-button/custom-button.component' 
// import {useState , useEffect} from 'react';
// import axios from 'axios';



const PostCard = ({avatar , name , userName , date , postText , postMedias }) => {
    const likedBy =[]
    return (
        <div className="postCard">
            {
                likedBy.length != 0 ?
                <div className="liked-header">
                </div>
                :
                <div></div>
            }
            <div className="cardBody">
                <div className="avatar">
                    <img src={avatar} />
                </div>
                <div className="rightCol">
                    <div className="header">
                        <div className="details">
                            <span className="name">{name}</span>
                            <span className="username">{userName}</span>
                            <span className="date">{date}</span>
                        </div>
                        <div className="setting"></div>
                    </div>
                    <div className="post">
                        <div className="tweetText"></div>
                        <div className="media"></div>
                    </div>
                </div>
            </div>
            <div className="actionBar">

            </div>
        </div>
    )
}

export default PostCard
