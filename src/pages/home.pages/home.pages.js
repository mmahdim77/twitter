
import React, { useState , useEffect } from 'react';
import axios from 'axios';
import './home.styles.css';
import { Button, Avatar, Menu, Dropdown } from 'antd';
import Navbar from '../../components/navbar.components/navbar'
import { Link, useParams } from 'react-router-dom'
import WriteTweet from '../../components/write-tweet/write-tweet.components'
import PostCard from '../../components/post-card.components/post-card.components'
import Header from '../../components/header.components/header.components'
import Search from '../../components/search.components/search.components'
import CommonHashtags from '../../components/common-hashtags.component/common-hashtags.components'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import LogComp from '../../components/logs.component/logs.component'

const Home = ({ token , myUser ,refreshToken}) => {
    const [tweetListObj, setTweetList] = useState(null);

    useEffect(() => {
        console.log(token)
        axios.get('http://twitterapifinal.pythonanywhere.com/twitt/list/' , {headers : {'Authorization' : 'Bearer  '+token}}).then(
                        res => {
                            // console.log("fetch tweets")
                            // console.log(res.data)
                            setTweetList (res.data)
                        }
                    )
    }, [])
    return (
        <div className="home">
            <div className="leftCol">
                <Navbar myUser={myUser} refreshToken={refreshToken} token={token} />
            </div>
            <div className="rightCol">
                <div className="responsive-nav-bar">
                    <div className="button">
                        <Link to={'/home'}>
                        <Button className="b" icon={<HomeOutlined />}>Home</Button>
                        </Link>
                    </div>
                    <div className="button">
                        <Link to={"/profile/" + myUser.username}>
                        <Button className="b" icon={<UserOutlined />}>Profile</Button>
                        </Link>
                    </div>
                </div>
                <div className="responsive-search-col"  style={{marginTop :"20px"}}>
                    <Search myUser={myUser} token = {token}/>
                    <CommonHashtags />
                </div>
                <Header route="home" />
                <WriteTweet token={token} />
                {
                    tweetListObj ?
                    tweetListObj.results.map(
                        (tweet , idx) =>
                        (
                            <PostCard
                                myUser={myUser}
                                token = {token}
                                tweet ={tweet}
                                
                            />
                        )
                        
                    )
                    :
                    <div></div>
                }
            </div>

            <div className="search-col"  >
                <Search myUser={myUser} token = {token}/>
                <CommonHashtags />
                <LogComp token={token} />
            </div>
        </div>
    )
}

export default Home
