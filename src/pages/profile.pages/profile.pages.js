
import React, { useState , useEffect } from 'react';
import axios from 'axios';
import './profile.styles.css';
import 'antd/dist/antd.css';
import ProfileHeader from '../../components/profile-header.components/profile-header.components'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Button } from 'antd';
import { UserOutlined , CommentOutlined , RetweetOutlined ,LikeOutlined} from '@ant-design/icons';
import { Input } from 'antd';
import Navbar from '../../components/navbar.components/navbar'
import Header from '../../components/header.components/header.components'
import { useParams } from "react-router-dom";
import PostCard from '../../components/post-card.components/post-card.components'


const { TextArea } = Input;



const Profile = ({token, myUser}) => {
    let { username } = useParams();
    const [user, setUser] = useState(null);
    const [tweets, setTweets] = useState(null);
    let myusername;
    if(myUser){
        myusername =myUser.username
    }
    else{
        myusername = null
    }

    useEffect(() => {
        
        axios.get('http://twitterapifinal.pythonanywhere.com/account/profile/'+username ).then(
            res => {
                // console.log(res.data)
                setUser(res.data)
            }
        )
        axios.get('http://twitterapifinal.pythonanywhere.com/twitt/twitt_profile/'+username ).then(
            res => {
                setTweets(res.data)
            }
        )

    }, [username])

    return (
        <div className="profile">
            <div className="left-col">
                <Navbar username={myUser.username} />
            </div>
            {
                user?
                <div className="right-col">
                    <Header route="profile" name={user.name} numOfTweets ={tweets==null ? 0 : tweets.count}/>
                    <ProfileHeader 
                        token = {token}
                        myusername={myusername}
                        avatar={user.picture_url}
                        cover={user.cover_url}
                        name={user.name}
                        userName={user.username}
                        created_at={user.created_at} 
                        email={user.email}

                    />
                    {
                        tweets ?
                        tweets.results.map(
                            (tweet) =>{
                                // console.log("tweet")
                                // console.log(tweet)
                                return (
                                    <PostCard
                                        myUser={myUser}
                                        token = {token}
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

export default Profile