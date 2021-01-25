import React, { useState } from "react";
import { Input, Space } from 'antd';
import Logo from './logo.png'
import PersonIcon from '@material-ui/icons/Person';
import { HomeOutlined,UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import './navbar.styles.css'

function Navbar() {
  return (
    <div className="Navbar">
      <div className="image">
        <img src={Logo} height='24px' width='30px'>
        </img>
      </div>
      <a >
        <div>
          <div className="a">
            <HomeOutlined />
            Home
          </div>
          <div>

          </div>
        </div>
      </a>
      <a >
        <div className="a">
          <UserOutlined />
          Profile
        </div>
      </a>
    </div>
  );
}

export default Navbar;