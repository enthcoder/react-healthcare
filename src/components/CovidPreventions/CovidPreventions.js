import React from "react";
import mask from "../../images/img/using-mask.svg";
import wash from "../../images/img/hand-wash.svg";
import distance from "../../images/img/social-distance.svg";
import "./CovidPreventions.css";

const CovidPreventions = () => {
    return (
        <>
            <section className="prevention-section" id="preventions">
                <div className="container mb-5">
                    <div className="text-center mt-5">
                        <h1 className="fw-bold">Preventions</h1>
                        <hr className="w-25 mx-auto" />
                        <p className="text-secondary w-75 mx-auto">
                            <small>
                                Protect yourself and others around you by
                                knowing the facts and taking appropriate
                                precautions. Floow advice provided by your local
                                health authority.
                            </small>
                        </p>
                    </div>
                    <div
                        className="
                            row
                            row-cols-1
                            row-cols-sm-2
                            row-cols-md-2
                            row-cols-lg-3
                            justify-content-center
                            g-4
                            mt-3
                        "
                    >
                        <div className="col-10 col-md-6 col-lg-4">
                            <div className="card h-100 border-0">
                                <img
                                    src={mask}
                                    className="card-img-top p-3"
                                    alt="..."
                                    height="250"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Wear a mask</h5>
                                    <p className="card-text">
                                        <small>
                                            Masks can help prevent the spread of
                                            the virus from the person wearing
                                            the mask to others.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 col-md-6 col-lg-4">
                            <div className="card h-100 border-0">
                                <img
                                    src={wash}
                                    className="card-img-top p-3"
                                    alt="..."
                                    height="250"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Wash your hands
                                    </h5>
                                    <p className="card-text">
                                        <small>
                                            Clean your hands with soop and
                                            water, or alcohol-based hand
                                            sanitizer. Don’t touch your eyes,
                                            nose or mouth.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 col-md-6 col-lg-4">
                            <div className="card h-100 border-0">
                                <img
                                    src={distance}
                                    className="card-img-top p-3"
                                    alt="..."
                                    height="250"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Physical distancing
                                    </h5>
                                    <p className="card-text">
                                        <small>
                                            Maintain a safe distance especially
                                            from anyone who is coughing or
                                            sneezing. Wear a mask when physical
                                            distancing is not possible.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CovidPreventions;
