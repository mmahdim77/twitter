import react from 'react'
import './twitter.pages.css'
import Logo from './logo.png'
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default function TwitterHome() {
    return (
        <div className="float-container">

            <div className="left" >
                <div className="twitter_text">
                    Twitter
                </div>
            </div>

            <div className="right">
                <div >
                    <img className="img" src={Logo} height='36px' width='45px'>
                    </img>
                </div>
                <div className="text">
                    See what’s happening in the world right now
                </div>
                <div className="txt">
                    Join Twitter today.
                </div>
                <div className="button">
                    <Link to="/signup">
                        <Button className="sign" >Sign up</Button>
                    </Link>

                </div>
                <div className="button">
                    <Link to="/login">
                        <Button className="log" >Log in</Button>
                    </Link>

                </div>
            </div>

        </div>
    );
}