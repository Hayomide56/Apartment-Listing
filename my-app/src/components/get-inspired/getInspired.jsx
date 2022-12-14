import React from "react";
import './getInspired.css';
import Image1 from './17.png'
import Image2 from './18.png'
import Image3 from './10.png'
import Image4 from './11.png'
import Image5 from './12.png'
import Image6 from './13.png'

export default function GetInspired() {
    return (
        <>
            <div className="getInspired">
                <div className="get-inspired">
                    <h5 className="getInspired-text">Get inspired for your <br className="inspired-break"></br>next trip</h5>
                    <p className="getInspired-para">Along with conventional advertising and below the line activities, organization and corporate bodies have come to realize that they need to invest in trades in order to create maximum recall for their product of brand name. There are several benefits to participating in trade shows.</p>
                </div>
                <div className="inspired-cards">
                    <div className="inspired-card">
                        <img src={Image1} alt="" className="inspired-img" />
                        <div>
                            <h4 className="inspired-text">Batumi</h4>
                            <p className="inspired-para">$41/night avg.</p>
                        </div>
                    </div>
                    <div className="inspired-card">
                        <img src={Image2} alt="" className="inspired-img" />
                        <div>
                            <h4 className="inspired-text">Mest'ia</h4>
                            <p className="inspired-para">$23/night avg.</p>
                        </div>
                    </div>
                    <div className="inspired-card">
                        <img src={Image1} alt="" className="inspired-img" />
                        <div>
                            <h4 className="inspired-text">Bakuriani</h4>
                            <p className="inspired-para">$20/night avg.</p>
                        </div>
                    </div>
                    <div className="inspired-card">
                        <img src={Image3} alt="" className="inspired-img" />
                        <div>
                            <h4 className="inspired-text">Borjomi</h4>
                            <p className="inspired-para">$30/night avg.</p>
                        </div>
                    </div>
                    <div className="inspired-card">
                        <img src={Image4} alt="" className="inspired-img" />
                        <div>
                            <h4 className="inspired-text">Ambrolauri</h4>
                            <p className="inspired-para">$29/night avg.</p>
                        </div>
                    </div>
                    <div className="inspired-card">
                        <img src={Image3} alt="" className="inspired-img" />
                        <div>
                            <h4 className="inspired-text">Ozorgeti</h4>
                            <p className="inspired-para">$18/night avg.</p>
                        </div>
                    </div>
                    <div className="inspired-card">
                        <img src={Image5} alt="" className="inspired-img" />
                        <div>
                            <h4 className="inspired-text">Pasanauri</h4>
                            <p className="inspired-para">$35/night avg.</p>
                        </div>
                    </div>
                    <div className="inspired-card">
                        <img src={Image6} alt="" className="inspired-img" />
                        <div>
                            <h4 className="inspired-text">Sighnaghi</h4>
                            <p className="inspired-para">$20/night avg.</p>
                        </div>
                    </div>
                    <div className="inspired-card">
                        <img src={Image5} alt="" className="inspired-img" />
                        <div>
                            <h4 className="inspired-text">Tbilisi</h4>
                            <p className="inspired-para">$22/night avg.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}