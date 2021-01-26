
import React, { useState , useEffect } from 'react';
import axios from 'axios';
import './home.styles.css';
import { Button, Avatar, Menu, Dropdown } from 'antd';
import Navbar from '../../components/navbar.components/navbar'
import { Link, useParams } from 'react-router-dom'
import WriteTweet from '../../components/write-tweet/write-tweet.components'
import PostCard from '../../components/post-card.components/post-card.components'
import Header from '../../components/header.components/header.components'


const Home = ({ token , myUser }) => {
    const [tweetListObj, setTweetList] = useState(null);
    const tweets = [
        {
            name: 'kalim',
            userName: '@kalim',
            avatar: './material/avatar1.png',
            date: 'January 10, 2021 03:24:00',
            postText: 'Eiusmod in elit incididunt ea Lorem nulla enim ad.',
            postMedias: './material/cover.jpg',
        },
        {
            name: 'mamad',
            userName: '@mamad',
            avatar: './material/avatar2.png',
            date: 'January 25, 2021 03:24:00',
            postText: 'Eiusmod in elit incididunt ea Lorem nulla enim ad.',
            postMedias: './material/cover2.jpg',
        },
        {
            name: 'ali',
            userName: '@ali',
            avatar: './material/avatar1.png',
            date: 'January 25, 2021 011:20:00',
            postText: 'Eiusmod in elit incididunt ea Lorem nulla enim ad.',
            postMedias: './material/cover.jpg',
        },
        {
            name: 'mamad',
            userName: '@mamad',
            avatar: './material/avatar2.png',
            date: 'January 1, 2020 011:20:00',
            postText: 'Eiusmod in elit incididunt ea Lorem nulla enim ad.',
            postMedias: './material/cover2.jpg',
        },
        {
            name: 'ali',
            userName: '@ali',
            avatar: './material/avatar1.png',
            date: 'March 25, 2020 011:20:00',
            postText: 'Eiusmod in elit incididunt ea Lorem nulla enim ad.',
            postMedias: './material/cover.jpg',
        },
        {
            name: 'mamad',
            userName: '@mamad',
            avatar: './material/avatar2.png',
            date: 'January 25, 2021 023:21:00',
            postText: 'Eiusmod in elit incididunt ea Lorem nulla enim ad.',
            postMedias: './material/cover2.jpg',
        },
        {
            name: 'ali',
            userName: '@ali',
            avatar: './material/avatar1.png',
            date: 'January 25, 2021 023:23:00',
            postText: 'Eiusmod in elit incididunt ea Lorem nulla enim ad.',
            postMedias: './material/cover.jpg',
        },
        {
            name: 'mamad',
            userName: '@mamad',
            avatar: './material/avatar2.png',
            date: '',
            postText: 'Eiusmod in elit incididunt ea Lorem nulla enim ad.',
            postMedias: './material/cover2.jpg',
        },
        {
            name: 'ali',
            userName: '@ali',
            avatar: './material/avatar1.png',
            date: '',
            postText: 'Eiusmod in elit incididunt ea Lorem nulla enim ad.',
            postMedias: './material/cover.jpg',
        },
        {
            name: 'mamad',
            userName: '@mamad',
            avatar: './material/avatar2.png',
            date: '',
            postText: 'Eiusmod in elit incididunt ea Lorem nulla enim ad.',
            postMedias: './material/cover2.jpg',
        },
    ]
    useEffect(() => {
        axios.get('http://twitterapifinal.pythonanywhere.com/twitt/list/' , {headers : {'Authorization' : 'Bearer  '+token}}).then(
                        res => {
                            console.log(res.data)
                            setTweetList (res.data)
                        }
                    )
    }, [])
    return (
        <div className="home">
            <div className="leftCol">
                <Navbar username={myUser.username} />
            </div>
            <div className="rightCol">
                <Header route="home" />
                <WriteTweet token={token} />
                {
                    tweetListObj ?
                    tweetListObj.results.map(
                        (tweet) =>
                        (
                            <PostCard
                                avatar={tweet.user.picture}
                                name={tweet.user.name}
                                userName={tweet.user.username}
                                date={tweet.date}
                                postText={tweet.text}
                                postMedias={tweet.image} />
                        )
                        
                    )
                    :
                    <div></div>
                }
            </div>


        </div>
    )
}

export default Home
