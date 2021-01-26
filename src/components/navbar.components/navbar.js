import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Logo from './logo.png'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import './navbar.styles.css'

function Navbar() {
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
          <Button className="tweet" >Tweet</Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;