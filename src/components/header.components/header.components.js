
import React, { useState } from 'react';
import './header.styles.css';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

const Header = ({route , name, numOfTweets}) => {
    let history = useHistory()
    const goback = ()=>{
        history.goBack()
    }
    return (
        <div className="pageHeader">
            {
                
                route=="home" ?
                <div className="homeHeader">
                    <h2>Home</h2>
                </div>
                :
                route=="tweet" ?
                <div className="homeHeader">
                    <div className="back" style={
                        {display:"flex",
                        flexDirection:"row"}
                    }>
                        <ArrowLeftOutlined style={{color:"rgb(28, 164, 252)",marginTop:"11px",marginRight:"5px"}} onClick={goback}/>
                        <h2>Tweet</h2>
                    </div>
                    
                </div>
                :
                route=="profile" ?
                <div className="profileHeader">
                    <div className="back">
                        <ArrowLeftOutlined style={{color:"rgb(28, 164, 252)"}} onClick={goback}/>
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