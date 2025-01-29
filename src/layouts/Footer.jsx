import React from 'react'
import './footer.css'

function Footer() {
    return (
        <>

            <footer className="footer">
                <div className="container">
                    <div className="footer-column">
                        <h3>Get to Know Us</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press Releases</a></li>
                            <li><a href="#">Amazon Cares</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Connect with Us</h3>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Make Money with Us</h3>
                        <ul>
                            <li><a href="#">Sell on Amazon</a></li>
                            <li><a href="#">Affiliate Marketing</a></li>
                            <li><a href="#">Advertise Your Products</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Let Us Help You</h3>
                        <ul>
                            <li><a href="#">Your Account</a></li>
                            <li><a href="#">Returns Centre</a></li>
                            <li><a href="#">100% Purchase Protection</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    © 2024 Your Company Name. All Rights Reserved.
                </div>
            </footer>




        </>
    )
}

export default Footer