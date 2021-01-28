import { Input, Avatar, Upload, Button, Modal, message } from 'antd';
import React, { useState, useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import PostCard from '../post-card.components/post-card.components'
import axios from 'axios'
import './common-hashtags.styles.css';

const CommonHashtags = ({}) => {
    const [commonTags, setCommonTags] = useState([]);
    useEffect(()=>{
        axios.get('http://twitterapifinal.pythonanywhere.com/twitt/top_hashtags').then(
            res =>{
                // console.log("common tags")
                // console.log(res.data.results)
                setCommonTags(res.data.results)
            }
        )
    },[])
    return (
        <div className="top-hashtags">
            {/* <h1>هشتگ های برتر</h1> */}
            {
                commonTags.map(
                    hashtag => {
                        return(
                            <div>
                                <h3>#{hashtag.name}({hashtag.occurrences})</h3>
                                {/* <h4>count:{hashtag.occurrences}</h4> */}
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default CommonHashtags