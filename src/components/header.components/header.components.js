
import React, { useState } from 'react';
import './header.styles.css';


const Header = ({route}) => {
    return (
        <div className="pageHeader">
            {
                route=="home" ?
                <div className="homeHeader">
                    <h2>Home</h2>
                </div>
                :
                <div></div>
            }
        </div>
    )
}

export default Header