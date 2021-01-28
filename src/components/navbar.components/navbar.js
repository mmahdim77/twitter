import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from './logo.png'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import './navbar.styles.css'
import { Input, Space, Modal } from 'antd';
import WriteTweet from '../write-tweet/write-tweet.components'
import { Button, Avatar, Menu, Dropdown } from 'antd';
import axios from 'axios';


function Navbar({ myUser,refreshToken , token }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const logout = ()=>{
    let formData = { refresh_token: refreshToken}
    axios.post('http://twitterapifinal.pythonanywhere.com/account/logout/', formData, {headers : {'Authorization' : 'Bearer  '+token}}).then(
      (res) => {

        localStorage.removeItem('token')
        localStorage.removeItem('myUser')

      }
    )
  }
  let menu
  myUser ? 
  menu = (
    <Menu>
      <div className="avatar-user" >
        <Avatar className="avatar" />
        <div className="container">
          <div className="name" >
            {myUser.name}
          </div>
          <div className="username" >
            @{myUser.username}
          </div>
        </div>
      </div>
      <Menu.Divider />
      <Menu.Item className="menu" onClick={logout}><Link to="/">
        Log out
        </Link></Menu.Item>
    </Menu>
  )
  :
  <div></div>

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="Navbar">
      <div className="up-row">
        <div className="image">
          <img src={Logo} height='36px' width='45px'>
          </img>
        </div>
        {
          myUser ?
            <div>
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
              <div className="button">
                <Link>
                  <Button className="tweet" onClick={showModal} >Tweet</Button>
                </Link>
              </div>
              <Modal className="modal" width="550px" footer={null} closable={false} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <WriteTweet />
              </Modal>
            </div>
            :
            <div></div>
        }
      </div>
      {
        myUser ?
        <div className="down-row">
        <Dropdown
          id="1"
          className="dropdown"
          placement="topCenter"
          overlay={menu}
          trigger={['click']}
          getPopupContainer={trigger => trigger.parentNode}
        >
          <Button className="logout" >
            Log out
            </Button>
        </Dropdown>
      </div>
      :
      <div></div>
      }
    </div>
  );
}

export default Navbar;