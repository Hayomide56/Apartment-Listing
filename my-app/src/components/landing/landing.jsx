import React from "react";
import './landing.css';
import Logo from './logo.png'
import {BiUserPlus} from 'react-icons/bi'
import {ImYoutube} from 'react-icons/im'


export default function Landing() {
    return (
        <div className="banner-div">
            <header>
                <nav className="banner">
                    <img src = {Logo} alt="Logo" />
                    <ul className = "nav-list">
                        <li><button className="default-btn rounded-2">List Apartments</button></li>
                        <li><button className="sign-up rounded-2"><BiUserPlus className="user-logo rounded-1" />Sign Up</button></li>
                    </ul>
                </nav>
            </header>
            <div>
                <h3 className="tagLine">Find homes or hotels in a few clicks</h3>
                <div className="card-div">
                    <div className="border-line">
                        <small>Location</small>
                        <p></p>
                    </div>
                    <div className="border-line">
                        <small>Check In</small>
                        <p></p>
                    </div>
                    <div className="border-line">
                        <small>Check Out</small>
                        <p></p>
                    </div>
                    <div>
                        <small>Guests</small>
                        <p></p>
                    </div>
                </div>
                <div className="banner-video">
                    <ImYoutube className="banner-youtube" />
                    <div>
                        <h4 className="banner-video-header">We are running our summer discount</h4>
                        <a className="banner-video-anchor">Watch video to learn more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}