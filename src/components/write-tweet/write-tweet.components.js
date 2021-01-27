
import React, { useState } from 'react';
import './write-tweet.styles.css';
import { Avatar } from 'antd';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import { DownloadOutlined } from '@ant-design/icons';
import axios from 'axios'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Button } from 'antd';
import { UserOutlined , CommentOutlined , RetweetOutlined ,LikeOutlined} from '@ant-design/icons';
// import CustomButton from '../custom-button/custom-button.component' 
// import {useState , useEffect} from 'react';
// import axios from 'axios';
import { Input } from 'antd';

const { TextArea } = Input;



const WriteTweet = ({token}) => {
    const [value, setValue] = useState("");
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [writeTweetEn, setWriteTweetEn] = useState(true);
    const onChange = ({ target: { value } }) => {
        if (value.length>0)
            setWriteTweetEn(false)
        else
            setWriteTweetEn(true)
        setValue(value)
      };
    const sendTweet =()=>{
        let formData = {text : value , image : image , video: video }
        // console.log(formData)
        // console.log(token)
        if(value.length>0)
            axios.post('http://twitterapifinal.pythonanywhere.com/twitt/create/', formData , {headers : {'Authorization' : 'Bearer  '+token}}).then(
                res => {
                    // console.log(res)
                }
            ).catch(err=>console.log(err))
        else{
            
        }
    }
    return (
        <div className="writeTweet">
            <div className="avatar">
                    <Avatar size={49} icon={<UserOutlined />} />
            </div>
            <div className="mainBody">
                <div className="textBox">
                    <TextArea
                        value={value}
                        onChange={onChange}
                        placeholder="What's happening?"
                        bordered={false}
                        fullWidth={true}
                        maxLength="250"
                        autoSize={{ minRows: 2, maxRows: 6 }}
                        />
                </div>
                <div className="footer">
                    <div className="attachments">
                        <PermMediaIcon style={{ fontSize:25 , color:"#1da1f2"}} ></PermMediaIcon>
                    </div>
                    <div className="tweetBtn">
                        <Button type="primary" shape="round" size={"large"} onClick={sendTweet} disabled={writeTweetEn}> Tweet </Button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default WriteTweet