import React from "react";
import './footer.css';

export default function Footer() {
    return (
        <>
            <div className="footer-background">
                <div className="footer-lists">
                    <div>
                        <ul className="footer-list">
                            <p className="footer-header">About</p>
                            <li>How it works</li>
                            <li>Newsroom</li>
                            <li>Apartment for work</li>
                            <li>Careers</li>
                            <li>About us</li>
                            <li>Media</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="footer-list">
                            <p className="footer-header">Community</p>
                            <li>Diversity & belonging</li>
                            <li>Against Discrimination</li>
                            <li>Accessibility</li>
                            <li>Invite friends</li>
                            <li>Gift cards</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="footer-list">
                            <p className="footer-header">Become a host</p>
                            <li>Host your home</li>
                            <li>Host an Experience</li>
                            <li>Open Homes</li>
                            <li>Resource Centre</li>
                            <li>Community</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="footer-list">
                            <p className="footer-header">Booking support</p>
                            <li>Updates for COVID-19</li>
                            <li>Help Centre</li>
                            <li>Cancellation</li>
                            <li>Neighborhood</li>
                            <li>Trust & Safety</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}