import { Input, Avatar, Upload, Button, Modal, message } from 'antd';
import React, { useState, useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import PostCard from '../../components/post-card.components/post-card.components'
import axios from 'axios'
const { Search } = Input;
const SearchCom = ({myUser, token}) => {
    
    const [isModalOpen, setIsModalOpen] = useState(null);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [searchItem, setSerachItem] = useState(null);
    const [tweetListObj, setTweetList] = useState(null);
    const search = (value) => {
        setTweetList(null)
        setSerachItem(value)
        if (value) {
            if (value[0] === "#") {
                axios.get('http://twitterapifinal.pythonanywhere.com/twitt/Search_View/*' + value.substring(1)).then(
                    res => {
                        setTweetList([...res.data])
                    }
                )
            }
            else {
                if (value[0] === "@") {
                    axios.get('http://twitterapifinal.pythonanywhere.com/twitt/Search_View/@' + value.substring(1)).then(
                        res => {
                            setTweetList([...res.data])
                        }
                    )
                }
                else {
                    axios.get('http://twitterapifinal.pythonanywhere.com/twitt/Search_View/' + value).then(
                        res => {
                            setTweetList([...res.data])
                        }
                    )
                }
            }
        }
        
    }
    useEffect(
        ()=>{
            setIsModalOpen(true)
        },[tweetListObj]
    )
    return (
        <div>
            <label>
                <Search placeholder="input search text" allowClear onSearch={search}  />
                {/* <Input icon={<SearchOutlined />} style={{ display: "inline" }} className="input" value={searchItem} placeholder="search" onChange={(e) => setSerachItem(e.target.value)} >

                </Input>
                <Button style={{ display: "inline" }} onClick={search} type="primary" icon={<SearchOutlined
                />}>
                </Button> */}
                {
                    tweetListObj ?
                        <Modal style={{ borderRadius: "100px" }} className="modal" width="800px" footer={null} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            {
                                tweetListObj.map(
                                    (tweet) =>
                                    (
                                        <PostCard
                                            myUser={myUser}
                                            token={token}
                                            tweet={tweet}
                                        />
                                    )

                                )
                            }
                        </Modal>

                        :
                        <div></div>
                }
            </label>
        </div>
    )
}

export default SearchCom