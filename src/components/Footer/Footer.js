import {
    faFacebook,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import brandLogo from "../../images/brand-logo.png";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container text-center text-white">
                <div className="pt-5 mx-auto row row-cols-1 row-cols-md-4 row-cols-lg-4">
                    <div className="col">
                        <img src={brandLogo} alt="" width="30" height="30" />
                        <span className="fw-bold"> Medicare</span>
                        <p className="mt-2">
                            <small>
                                Medicure provides progressive, and affordable
                                healthcare, accessible on mobile and online for
                                everyone.
                            </small>
                        </p>
                    </div>
                    <div className="col">
                        <span className="fw-bold">Company</span>
                        <ul className="mt-2 list">
                            <li>About</li>
                            <li>Reports</li>
                            <li>Top doctors</li>
                            <li>Donate Blood</li>
                            <li>Covid Portal</li>
                            <li>Apps</li>
                        </ul>
                    </div>
                    <div className="col">
                        <span className="fw-bold">District</span>
                        <ul className="mt-2 list">
                            <li>Chittagong</li>
                            <li>Dhaka</li>
                            <li>Khulna</li>
                            <li>Rajshahi</li>
                            <li>Comilla</li>
                        </ul>
                    </div>
                    <div className="col">
                        <span className="fw-bold">Help</span>
                        <ul className="mt-2 list">
                            <li>Help Center</li>
                            <li>Contact support</li>
                            <li>Instruction</li>
                            <li>Emergency</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h5>Follow us on</h5>
                    <div>
                        <span className="px-2">
                            <FontAwesomeIcon icon={faFacebook} />
                        </span>
                        <span className="px-2">
                            <FontAwesomeIcon icon={faInstagram} />
                        </span>
                        <span className="px-2">
                            <FontAwesomeIcon icon={faTwitter} />
                        </span>
                    </div>
                    <p className="mb-0 text-center">
                        <small>
                            All rights reserved ©Medicare, 2021 | Pranta Pal
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
