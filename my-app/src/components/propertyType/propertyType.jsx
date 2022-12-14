import React from "react";
import './propertyType.css';
import {HiArrowLeft, HiArrowRight} from 'react-icons/hi';
import Image1 from './6.png';
import Image2 from './7.png';
import Image3 from './8.png';
import Image4 from './9.png';

export default function PropertyType() {
    return (
        <>
            <div className="propertyType">
                <div className="justify-content-center d-flex">
                    <h5 className="property-heading">Browse property type</h5>
                    <div>
                        <HiArrowLeft className="arrow-color" />
                        <HiArrowRight className="arrow-color" />
                    </div>
                </div>
                <div className="card-div-3">
                    <div className="card shadow rounded-5 card-hotels">
                        <img src={Image1} alt="Hotels" />
                        <div className="card-body pt-4">
                            <div className="w-75">
                                <h5 className="card-body-header">Hotels</h5>
                                <p className="card-body-para">763,821 hotels</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow rounded-5 card-apartments">
                        <img src={Image2} alt="Apartments" />
                        <div className="card-body pt-4">
                            <div className="w-75">
                                <h5 className="card-body-header">Apartments</h5>
                                <p className="card-body-para">763,821 apartments</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow rounded-5 card-resorts">
                        <img src={Image3} alt="Resorts" />
                        <div className="card-body pt-4">
                            <div className="w-75">
                                <h5 className="card-body-header">Resorts</h5>
                                <p className="card-body-para">63,521 resorts</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow rounded-5 card-hotels">
                        <img src={Image4} alt="Hotels" />
                        <div className="card-body pt-4">
                            <div className="w-75">
                                <h5 className="card-body-header">Villas</h5>
                                <p className="card-body-para">463,260 Villas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}