import React, { useState , useEffect } from 'react';
import axios from 'axios';
import './status.styles.css';
import 'antd/dist/antd.css';
import ProfileHeader from '../../components/profile-header.components/profile-header.components'
import { Input } from 'antd';
import Navbar from '../../components/navbar.components/navbar'
import Header from '../../components/header.components/header.components'
import { useParams } from "react-router-dom";
import PostCard from '../../components/post-card.components/post-card.components'

const Status = ({token, myUser}) => {
    let { username , idx } = useParams();
    const [mainTweet, setMainTweet] = useState(null);
    const [comments, setComments] = useState([]);
    const getComments = ()=>{
        // console.log('start')
        axios.get('http://twitterapifinal.pythonanywhere.com/twitt/get/'+idx ).then(
            res => {
                // console.log('main tweet')
                // console.log(res)
                setMainTweet(res.data)
                return res.data.comments
            }
        ).then(
            cmnts => {
                // console.log("comments")
                // console.log(cmnts)
                let id
                let temp=[]
                for (let i =0; i<cmnts.length ; i+=1){
                    // console.log("for")
                    axios.get('http://twitterapifinal.pythonanywhere.com/twitt/get/'+cmnts[i] ).then(
                        response => {
                            temp.push(response.data)
                        }
                    )
                }
                // console.log("final temp" , [...temp])
                setComments([...temp])
            }
        )
    }
    useEffect(() => {
        getComments()
    }, [idx])



    return (
        <div className="home">
            <div className="left-col">
                <Navbar username={myUser.username} />
            </div>
            {
                mainTweet?
                <div className="right-col">
                    <Header route="tweet" />
                    <PostCard
                        myUser ={myUser}
                        token ={token}
                        tweet ={mainTweet}
                    />
                    {
                        comments ?
                        comments.map(
                            (tweet) =>{
                                // console.log(tweet)
                                return (
                                    <PostCard
                                        token ={token}
                                        myUser = {myUser}
                                        tweet = {tweet}
                                    />
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
            
        </div>
    )
}

export default Status