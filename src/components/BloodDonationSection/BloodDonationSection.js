import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import vector1 from "../../images/blood donation/vector1.jpg";

const BloodDonationSection = () => {
    return (
        <>
            <section className="container">
                <div className="donation-heading text-center">
                    <h1 className="fw-bold">Blood Donation</h1>
                    <hr className="w-25 mx-auto" />
                    <p className="text-secondary">
                        <small>
                            A drop of blood can save a life! Donate blood and
                            get real blessings. Your droplets of blood may
                            create an ocean of happiness.
                        </small>
                    </p>
                </div>
                <div
                    className="
                        row
                        justify-content-center
                        align-items-center
                        blood-donate
                    "
                >
                    <div className="section-intro col-10 col-md-6 col-lg-6">
                        <h1 className="fw-bold">Donate Blood & Save Life</h1>
                        <p className="text-secondary">
                            <small>
                                Donating just a pint (almost 470 ml) of blood
                                will not make much of a difference in your life
                                but that one pint can save up to three lives! So
                                roll up your sleeves and contribute proactively
                                in this noble cause.
                            </small>
                        </p>
                        <Link to="/bd_portal">
                            <button className="button btn btn-primary mb-2">
                                Learn More{" "}
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </Link>
                    </div>
                    <div className="col-10 col-md-6 col-lg-6">
                        <img src={vector1} alt="" className="w-100" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default BloodDonationSection;
