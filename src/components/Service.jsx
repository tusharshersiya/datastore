import React from 'react'
import './Service.css';

function Service() {
    return (
        <>
            <header>
                <h1>Our Services</h1>
                <p>Explore the range of services we offer to help you achieve your goals.</p>
            </header>

            <div className="container">
                <div className="service-card">
                    <img src="https://via.placeholder.com/300x200" alt="Service 1" />
                    <h3>Web Development</h3>
                    <p>We create modern, responsive, and user-friendly websites tailored to your needs.</p>
                    <a href="#">Learn More</a>
                </div>

                <div className="service-card">
                    <img src="https://via.placeholder.com/300x200" alt="Service 2" />
                    <h3>Graphic Design</h3>
                    <p>Our team delivers creative designs that capture your brand's essence.</p>
                    <a href="#">Learn More</a>
                </div>

                <div className="service-card">
                    <img src="https://via.placeholder.com/300x200" alt="Service 3" />
                    <h3>Digital Marketing</h3>
                    <p>Boost your online presence with our expert marketing strategies.</p>
                    <a href="#">Learn More</a>
                </div>
            </div>
        </>
    )
}

export default Service