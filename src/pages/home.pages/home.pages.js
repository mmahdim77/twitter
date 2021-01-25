
import React, { useState } from 'react';
import Navbar from '../../components/navbar.components/navbar'
import { Link , useParams} from 'react-router-dom'

const Home = ({token}) => {
    // let { email } = useParams();
    return (
        <div className="home">
            <Navbar></Navbar>
            {token}
        </div>
    )
}

export default Home