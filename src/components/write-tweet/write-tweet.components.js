
import React, { useState , useRef } from 'react';
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



const WriteTweet = ({token , commentTo}) => {
    const [value, setValue] = useState("");
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [writeTweetEn, setWriteTweetEn] = useState(true);
    const inputFile = useRef(null)
    const onChange = ({ target: { value } }) => {
        if (value.length>0)
            setWriteTweetEn(false)
        else
            setWriteTweetEn(true)
        setValue(value)
    };
    const sendTweet =()=>{
        // console.log("img",image)
        // var formData = new FormData();
        // formData.append('text', value);
        // formData.append('image', image);
        // formData.append('video', video);
        // if(commentTo !=null){
        //     formData.append('pk', commentTo);
        // }
        let formData = commentTo ==null ? {'text' : value , 'image' : image , 'video': video } : {'pk' : commentTo, 'text' : value , 'image' : image , 'video': video }
        console.log(formData)
        // console.log(token)
        if(value.length>0)
            if(commentTo ==null)
                axios.post('http://twitterapifinal.pythonanywhere.com/twitt/create/', formData , {headers : {'Authorization' : 'Bearer  '+token }}).then(
                    res => {
                        // console.log(res)
                    }
                ).catch(err=>console.log(err))
            else
                axios.post('http://twitterapifinal.pythonanywhere.com/twitt/comment/create', formData , {headers : {'Authorization' : 'Bearer  '+token}}).then(
                        res => {
                            // console.log(res)
                        }
                    ).catch(err=>console.log(err))

        else{
        }
    }
    const onChangeFile =(event) => {
        event.stopPropagation();
        event.preventDefault();
        var file = event.target.files[0];
        // console.log(event.target);
        setImage(file); /// if you want to upload latter
    }
    // const onChangeFile =(event) => {
    //     var file = event.target.files[0];
    //     var reader = new FileReader();
    //     reader.onloadend = function() {
    //       console.log('RESULT', reader.result)
    //       setImage(reader.result)
    //     }
    //     reader.readAsDataURL(file);
    //   }
    const onButtonClick = () => {
        // `current` points to the mounted file input element
       inputFile.current.click();
      };
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
                        <input type='file' id='file' ref={inputFile} style={{display : 'none'}} onChange={onChangeFile}/>
                        <PermMediaIcon style={{ fontSize:25 , color:"#1da1f2"}} primary={false} onClick={onButtonClick} ></PermMediaIcon>
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