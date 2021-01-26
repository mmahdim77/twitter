import react from 'react'
import './twitter.pages.css'
import Logo from './logo.png'


export default function TwitterHome() {
    return (
        <div className="float-container">

            <div className="column">
                <img src={Logo} >
                </img>
            </div>
            
            <div className="column">
                Float Column 2
            </div>
            
        </div>
    );
}