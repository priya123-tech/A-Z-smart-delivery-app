import React from 'react';
import "./home.css";
const phoneNumber = '+91 8121784826';

function BannerSection() {
    return (
        <div className="banner-section-bg-container d-flex justify-content-center flex-column">
            <div className="text-center">
                <h1 className="banner-heading mb-3">Stay Home We Deliver</h1>
                <p className="banner-caption mb-4">All Your Needs Delivered</p>
                <a href="#sectionexploreMenuSection" title="onclicking this, you can view the menu section">
                    <button className="custom-button">View More</button>
                </a>
                <a href="#deliveryPaymentSection" title="here you will get the payment option">
                    <button className="custom-outline-button">Order Now</button>
                </a>
                <h1 className=" footer-section-mail-id  text-center">
                            <h3 className = "text-white">Contact</h3>
                            <a className = "text-white" href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                        </h1>
                       

            </div>
        </div>
    );
}

export default BannerSection;
