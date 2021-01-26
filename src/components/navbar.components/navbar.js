import React from "react";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Logo from './logo.png'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import './navbar.styles.css'
import { Input, Space, Modal } from 'antd';
import WriteTweet from '../write-tweet/write-tweet.components'

function Navbar() {
  const [isVisible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true)
  };


  return (
    <div className="Navbar">
      <div className="image">
        <img src={Logo} height='36px' width='45px'>
        </img>
      </div>
      <div className="button">
        <Link>
          <Button className="b" icon={<HomeOutlined />}>Home</Button>
        </Link>
      </div>
      <div className="button">
        <Link>
          <Button className="b" icon={<UserOutlined />}>Profile</Button>
        </Link>
      </div>
      <h1>{isVisible ? "hi" : "by"}</h1>
      <div className="button">
        <Link>
          <Button className="tweet" >Tweet</Button>
        </Link>
      </div>
      <Modal className="modal" width="550px" footer={null} closable={false} visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <WriteTweet />
      </Modal>
    </div>
  );
}

export default Navbar;