import React from "react";
import './popularApartments.css';
import Image1 from './14.png'
import Image2 from './16.png'
import Image3 from './15.png'
import {BsFillStarFill} from 'react-icons/bs'
import {TfiReload} from 'react-icons/tfi'
import Painter from './Painter.png'

export default function PopularApartments() {
    return (
        <>
            <div className="popular-apartments">
                <h4 className="popular-text">Popular apartments near you</h4>
                <div className="the-apartments">
                    <div className="card card-border shadow">
                        <img src={Image1} alt="" />
                        <div className="card-info">
                            <h4 className="card-heading">Charming and comfortable house</h4>
                            <p className="card-title">Entire apartment in Istabul</p>
                            <div className="card-details">
                                <small className="card-price">$11 / night</small>
                                <small className="card-rating"><BsFillStarFill className="card-star" />4.9 (98)</small>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow">
                        <img src={Image2} alt="" />
                        <div className="card-info">
                            <h4 className="card-heading">Cozy apartment at Hippodrome</h4>
                            <p className="card-title">Entire apartment in Batumi</p>
                            <div className="card-details">
                                <small className="card-price">$18 / night</small>
                                <small className="card-rating"><BsFillStarFill className="card-star" />4.65 (93)</small>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow">
                        <img src={Image3} alt="" />
                        <div className="card-info">
                            <h4 className="card-heading">Dream house</h4>
                            <p className="card-title">Shared room in Madrid</p>
                            <div className="card-details">
                                <small className="card-price">$21 / night</small>
                                <small className="card-rating"><BsFillStarFill className="card-star" />4.55 (35)</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-div">
                    <button className="load-more"><TfiReload className="reload-icon" />Load more</button>
                </div>
                <div className="painter-div">
                    <img src={Painter} alt="" className="painter-popular" />
                </div>
            </div>
        </>
    )
}