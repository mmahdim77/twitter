
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
                setUser(res.data)
            }
        )
    }, [username])

    return (
        <div className="profile">
            <div className="left-col">
                <Navbar/>
            </div>
            {
                user?
                <div className="right-col">
                    <Header route="profile" name={user.name} numOfTweets ={'0'}/>
                    <ProfileHeader 
                        token = {token}
                        myusername={myusername}
                        avatar={user.picture}
                        cover={user.cover}
                        name={user.name}
                        userName={user.username}
                        created_at={user.created_at} 
                        email={user.email}

                    />
                    {
                        tweets ?
                        tweets.results.map(
                            (tweet) =>{
                                console.log("tweet")
                                console.log(tweet)
                                return (
                                    <PostCard
                                        pk ={tweet.id}
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
            
        </div>
    )
}

export default Profile