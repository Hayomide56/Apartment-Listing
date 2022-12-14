import React from "react";
import './price-section.css';
import Image1 from './2.png';
import Image2 from './1.png';
import Image3 from './3.png';
import Image4 from './4.png';
import Image5 from './5.png';

export default function PriceSection() {
    return (
        <>
            <div className="card-section">
                <div className="card-div-1">
                    <div className="card rounded-5 shadow card-spain">
                        <img src={Image1} alt="Spain" />
                        <div className="card-body pt-4">
                            <div className="w-75">
                                <h5 className="card-body-header">Spain</h5>
                                <p className="card-body-para">43,890 apartments</p>
                            </div>
                            <div className="avgPrice">
                                <p>$64 Avg. Price</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow rounded-5 card-brazil">
                        <img src={Image2} alt="Brazil" />
                        <div className="card-body pt-4">
                            <div className="w-75">
                                <h5 className="card-body-header">Brazil</h5>
                                <p className="card-body-para">39,418 apartments</p>
                            </div>
                            <div className="avgPrice">
                                <p>$50 Avg. Price</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-div-2">
                    <div className="card shadow rounded-5 card-turkey">
                        <img src={Image3} alt="Turkey" />
                        <div className="card-body pt-4">
                            <div className="w-75">
                                <h5 className="card-body-header">Turkey</h5>
                                <p className="card-body-para">61,845 apartments</p>
                            </div>
                            <div className="avgPrice">
                                <p>$87 Avg. Price</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow rounded-5 card-egypt">
                        <img src={Image4} alt="Egypt" />
                        <div className="card-body pt-4">
                            <div className="w-75">
                                <h5 className="card-body-header">Egypt</h5>
                                <p className="card-body-para">19,863 apartments</p>
                            </div>
                            <div className="avgPrice">
                                <p>$64 Avg. Price</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow rounded-5 card-georgia">
                        <img src={Image5} alt="Georgia" />
                        <div className="card-body pt-4">
                            <div className="w-75">
                                <h5 className="card-body-header">Georgia</h5>
                                <p className="card-body-para">43,890 apartments</p>
                            </div>
                            <div className="avgPrice">
                                <p>$64 Avg. Price</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}