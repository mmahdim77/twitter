
import React, { useState } from 'react';
import Navbar from '../../components/navbar.components/navbar'
import Profile from '../../pages/profile/profile.pages'
import { Link , useParams} from 'react-router-dom'

const Home = ({token}) => {
    // let { email } = useParams();
    return (
        <div className="home">
            <Navbar></Navbar>
        </div>
    )
}

export default Home