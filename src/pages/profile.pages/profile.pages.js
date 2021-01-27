
import React, { useState , useEffect } from 'react';
import axios from 'axios';
import './profile.styles.css';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import { DownloadOutlined } from '@ant-design/icons';
import ProfileHeader from '../../components/profile-header.components/profile-header.components'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Button } from 'antd';
import { UserOutlined , CommentOutlined , RetweetOutlined ,LikeOutlined} from '@ant-design/icons';
// import CustomButton from '../custom-button/custom-button.component' 
// import {useState , useEffect} from 'react';
// import axios from 'axios';
import { Input } from 'antd';
import Navbar from '../../components/navbar.components/navbar'
import Header from '../../components/header.components/header.components'
import { useParams } from "react-router-dom";


const { TextArea } = Input;



const Profile = ({token, myUser}) => {
    let { username } = useParams();
    const [user, setUser] = useState(null);
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
                console.log(res.data)
                setUser(res.data)
            }
        )
    }, [])

    return (
        <div className="profile">
            <div className="left-col">
                <Navbar/>
            </div>
            {
                
                user?
                <div className="right-col">
                    <Header route="profile" name={user.name} numOfTweets ="50"/>
                    <ProfileHeader 
                        myusername={myusername}
                        avatar={user.picture}
                        cover={user.cover}
                        name={user.name}
                        userName={user.username}
                        created_at={user.created_at} 

                    />
                </div>
                :
                <div></div>
                

            }
        </div>
    )
}

export default Profile