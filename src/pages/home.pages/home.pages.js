
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

    useEffect(() => {
        console.log("myUser")
        console.log(myUser)
        axios.get('http://twitterapifinal.pythonanywhere.com/twitt/list/' , {headers : {'Authorization' : 'Bearer  '+token}}).then(
                        res => {
                            console.log("fetch tweets")
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
