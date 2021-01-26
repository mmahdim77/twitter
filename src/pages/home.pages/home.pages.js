
import React, { useState } from 'react';
import './home.styles.css';
import { Button, Avatar, Menu, Dropdown } from 'antd';
import Navbar from '../../components/navbar.components/navbar'
import { Link, useParams } from 'react-router-dom'
import WriteTweet from '../../components/write-tweet/write-tweet.components'
import PostCard from '../../components/post-card.components/post-card.components'
import Header from '../../components/header.components/header.components'
import Profile from '../profile.pages/profile.pages'
import { BorderAllRounded } from '@material-ui/icons';

const Home = ({ token }) => {
    // let { email } = useParams();
    const menu = (
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
    return (
        <div className="home">
            <div className="leftCol">
                <Navbar />
                <div>
                    <Dropdown className="dropdown" placement="topCenter" overlay={menu} trigger={['click']}>
                        <Button className="logout" >
                            Log out
                        </Button>
                    </Dropdown>
                </div>
            </div>
            <div className="rightCol">
                <Header route="home" />
                <WriteTweet token={token} />
                {
                    tweets.map(
                        (tweet) =>
                        (
                            <PostCard
                                avatar={tweet.avatar}
                                name={tweet.name}
                                userName={tweet.userName}
                                date={tweet.date}
                                postText={tweet.postText}
                                postMedias={tweet.postMedias} />
                        )
                    )
                }
            </div>


        </div>
    )
}

export default Home