// ContactDetailsCard.js

import React from 'react';
import './contactUs.css'; // Import your CSS for styling
const phoneNumber = '8121784826';



const ContactDetailsCard = () => {
    return (
        <div className="footer-section pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <img
                            src="https://res.cloudinary.com/dhsmbae5q/image/upload/v1698664447/vdlrttzvi9r0xql5xfbx.jpg"
                            alt="Food Munch Logo"
                            className="food-munch-logo"
                        />
                        <h1 className="footer-section-mail-id">buripriyanka1816@gmail.com</h1>
                        <p className="footer-section-address">
                            Bobbili, Vizianagaram, Andhra Pradesh.
                        </p>

                    </div><h1 className="footer-section-mail-id text-center">
                            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                        </h1>
                       
                </div>
                <h3 className ="footer-section-mail-id text-center" >Feel free to contact us at the provided number for inquiries or to place an order for a prompt and delicious delivery service.</h3>
            </div>
        </div>
    );
};

export default ContactDetailsCard;
