import React , {useState} from "react";
import { Link } from 'react-router-dom';
import Logo from './logo.png'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import './navbar.styles.css'
import { Input, Space, Modal } from 'antd';
import WriteTweet from '../write-tweet/write-tweet.components'
import { Button, Avatar, Menu, Dropdown } from 'antd';


function Navbar({username}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menu = (
    <Menu>
        <div className="avatar-user" >
            <Avatar className="avatar" />
            <div className="container">
                <div className="name" >
                    folani
                </div>
                <div className="username" >
                    @folani
                </div>
            </div>
        </div>
        <Menu.Divider />
        <Menu.Item className="menu"><Link to="/">
            Log out
        </Link></Menu.Item>
    </Menu>
  );

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
        <div className="button">
          <Link to={'/home'}>
            <Button className="b" icon={<HomeOutlined />}>Home</Button>
          </Link>
        </div>
        <div className="button">
          <Link to={"/profile/"+username}>
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
    </div>
  );
}

export default Navbar;