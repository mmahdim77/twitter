
import React, { useState } from 'react';
import './header.styles.css';
import { ArrowLeftOutlined } from '@ant-design/icons';


const Header = ({route , name, numOfTweets}) => {
    return (
        <div className="pageHeader">
            {
                
                route=="home" ?
                <div className="homeHeader">
                    <h2>Home</h2>
                </div>
                :
                route=="profile" ?
                <div className="profileHeader">
                    <div className="back">
                        <ArrowLeftOutlined />
                    </div>
                    <div className="user-header-detail">
                        <h2>{name}</h2>
                        <span>{numOfTweets}</span>
                    </div>
                </div>
                :
                <div></div>
            }
        </div>
    )
}

export default Header