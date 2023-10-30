import React from 'react';
import { Twitter, Instagram, Facebook } from 'react-bootstrap-icons';
import './followUs.css'

const FollowUsSection = () => {
    return (
        <div className="follow-us-section pt-5 pb-5" id="followUsSection">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="follow-us-section-heading">Follow Us</h1>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-row justify-content-center">
                            <div className="follow-us-icon-container">
                                <Twitter size={32} color="#00aced" /> {/* Twitter Icon */}
                            </div>
                            <div className="follow-us-icon-container">
                                <Instagram size={32} color="#e4405f" /> {/* Instagram Icon */}
                            </div>
                            <div className="follow-us-icon-container">
                                <Facebook size={32} color="#1877f2" /> {/* Facebook Icon */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FollowUsSection;
