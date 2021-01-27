
import React, { useState , useEffect } from 'react';
import axios from 'axios';
import './tweet-details.styles.css';
import 'antd/dist/antd.css';
import ProfileHeader from '../../components/profile-header.components/profile-header.components'
import { Input } from 'antd';
import Navbar from '../../components/navbar.components/navbar'
import Header from '../../components/header.components/header.components'
import { useParams } from "react-router-dom";
import PostCard from '../../components/post-card.components/post-card.components'


const { TextArea } = Input;



const TweetDetails = ({token, myUser}) => {
    let { username , idx } = useParams();
    const [mainTweet, setMainTweet] = useState(null);
    const [comments, setComments] = useState(null);

    useEffect(() => {
        console.log('start')
        axios.get('http://twitterapifinal.pythonanywhere.com/twitt/get/'+idx ).then(
            res => {
                console.log('main tweet')
                console.log(res)
                setMainTweet(res.data)
                return res.data.comments
            }
        ).then(
            cmnts => {
                console.log("comments")
                console.log(cmnts)
                for(id in cmnts){
                    axios.get('http://twitterapifinal.pythonanywhere.com/twitt/get/'+id ).then(
                        res => {
                            console.log("comment")
                            console.log(res)
                            // setMainTweet(res.data)
                            // return res.data.comments
                        }
                    )
                }
            }
        )

    }, [idx])


    return (
        <div className="profile">
            {/* <div className="left-col">
                <Navbar/>
            </div>
            {
                mainTweet?
                <div className="right-col">
                    <Header route="tweet" />
                    <PostCard
                        avatar={mainTweet.user.picture}
                        name={mainTweet.user.name}
                        userName={mainTweet.user.username}
                        date={mainTweet.date}
                        postText={mainTweet.text}
                        postMedias={mainTweet.image}
                    />
                    {
                        comments ?
                        comments.map(
                            (tweet) =>{
                                console.log(tweet)
                                return (
                                    <PostCard
                                        avatar={tweet.user.picture}
                                        name={tweet.user.name}
                                        userName={tweet.user.username}
                                        date={tweet.date}
                                        postText={tweet.text}
                                        postMedias={tweet.image} />
                                )
                            }
                        )
                        :
                        <div></div>
                    }
                </div>
                
                :
                <div></div>
            }
             */}
        </div>
    )
}

export default TweetDetails