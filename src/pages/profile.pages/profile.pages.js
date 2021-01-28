
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
import Search from '../../components/search.components/search.components'
import CommonHashtags from '../../components/common-hashtags.component/common-hashtags.components'
import { Link } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons';
const { TextArea } = Input;



const Profile = ({token, myUser,refreshToken}) => {
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
        axios.get('http://twitterapifinal.pythonanywhere.com/twitt/twitt_profile/'+username ).then(
            res => {
                setTweets(res.data)
            }
        )

    }, [username])

    const del = (idx)=>{

    }
    return (
        <div className="profile">
            <div className="left-col">
                <Navbar myUser={myUser} refreshToken={refreshToken} token={token} />
            </div>
            {
                user?
                <div className="right-col">
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
                            (tweet , idx) =>{
                                // console.log("tweet")
                                // console.log(tweet)
                                return (
                                    <PostCard
                                        myUser={myUser}
                                        token = {token}
                                        tweet = {tweet}
                                        deleteP = {del}
                                        index= {idx}
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
            <div className="search-col"  >
                <Search myUser={myUser} token = {token}/>
                <CommonHashtags />
            </div>
            
        </div>
    )
}

export default Profile