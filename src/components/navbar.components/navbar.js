import React , {useState} from "react";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Logo from './logo.png'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import './navbar.styles.css'
import { Input, Space, Modal } from 'antd';
import WriteTweet from '../write-tweet/write-tweet.components'

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);


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
      <div className="button">
        <Link>
          <Button className="tweet" onClick={showModal} >Tweet</Button>
        </Link>
      </div>
      <Modal className="modal" width="550px" footer={null} closable={false} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <WriteTweet />
      </Modal>
    </div>
  );
}

export default Navbar;