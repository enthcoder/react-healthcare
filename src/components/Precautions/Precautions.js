import React from "react";
import social_distancing from "../../images/covid/undraw_social_distancing.svg";
import wash_hands from "../../images/covid/undraw_wash_hands.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Precautions = () => {
    return (
        <>
            <section className="container">
                <div className="text-center mt-5 pt-5">
                    <h1 className="fw-bold">Precautions</h1>
                    <hr className="w-25 mx-auto" />
                    <p className="text-secondary">
                        <small>
                            Wear a mask, Clean your hands & Keep a safe distance
                        </small>
                    </p>
                </div>

                {/* Social-distance */}
                <div
                    className="
                        row
                        justify-content-center
                        align-items-center
                        social-distance
                    "
                >
                    <div className="section-intro col-10 col-md-6 col-lg-6">
                        <h1>Social Distancing</h1>
                        <p className="text-secondary">
                            <small>
                                Social distancing aims to decrease transmission
                                of COVID-19 in a population by minimising
                                contact between potentially infected individuals
                                and healthy individuals.
                            </small>
                        </p>
                        <Link to="/covid">
                            <button class="button btn btn-primary mb-2">
                                Learn More{" "}
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </Link>
                    </div>
                    <div className="col-10 col-md-6 col-lg-6 p-5">
                        <img src={social_distancing} alt="" className="w-100" />
                    </div>
                </div>

                {/* <!-- Wash-hands --> */}
                <div
                    className="
                        row
                        justify-content-center
                        align-items-center
                        wash-hands
                    "
                >
                    <div className="section-img col-10 col-md-6 col-lg-6 p-5">
                        <img
                            src={wash_hands}
                            alt=""
                            className="w-100"
                            height="500"
                        />
                    </div>
                    <div className="section-intro col-10 col-md-6 col-lg-6">
                        <h1>Wash Hands</h1>
                        <p className="text-secondary">
                            <small>
                                Regularly and thoroughly clean your hands with
                                an alcohol-based hand rub or wash them with soap
                                and water. This eliminates germs including
                                viruses that may be on your hands.
                            </small>
                        </p>
                        <Link to="/covid">
                            <button class="button btn btn-primary mb-2">
                                Learn More{" "}
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Precautions;
