import React from "react";
import search from "../../images/services/search.png";
import consultation from "../../images/services/consultation.png";
import reports from "../../images/services/reports.png";
import emergency from "../../images/services/emergency.png";
import covid from "../../images/services/covid.jpg";
import blood from "../../images/services/blood.jpg";
import "./OurServices.css";
import { Link } from "react-router-dom";

const OurServices = () => {
    return (
        <>
            <section className="service-section text-center mt-5" id="services">
                <div className="container mb-4">
                    <h1 className="fw-bold">Our Services</h1>
                    <hr className="w-25 mx-auto" />
                    <p className="text-secondary w-75 mx-auto">
                        <small>
                            We provide to you the best choiches for you. Adjust
                            it to your health needs and make sure your undergo
                            treatment with our highly qualified doctors you can
                            consult with us which type of service is suitable
                            for your health.
                        </small>
                    </p>
                    <div
                        className="
                            row row-cols-1 row-cols-md-3 row-cols-lg-4
                            g-4
                            justify-content-center
                        "
                    >
                        <div className="col-10 col-md-4 col-lg-3">
                            <div className="card h-100 border-0">
                                <img
                                    src={search}
                                    className="mx-auto mt-3"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Search Doctor
                                    </h5>
                                    <p className="card-text text-muted">
                                        <small>
                                            Choose your doctor from thousands of
                                            specialist, general, and trusted
                                            hospitals.
                                        </small>
                                    </p>
                                    <Link to="/doctors">
                                        <button className="button btn btn-primary rounded-pill mb-2">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 col-md-4 col-lg-3">
                            <div className="card h-100 border-0">
                                <img
                                    src={consultation}
                                    className="mx-auto mt-3"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Consultation</h5>
                                    <p className="card-text text-muted">
                                        <small>
                                            Free consultation with our trusted
                                            doctors and get the best
                                            recomendations.
                                        </small>
                                    </p>
                                    <Link to="/appointments">
                                        <button className="button btn btn-primary rounded-pill mb-2">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 col-md-4 col-lg-3">
                            <div className="card h-100 border-0">
                                <img
                                    src={reports}
                                    className="mx-auto mt-3"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Reports Feedback
                                    </h5>
                                    <p className="card-text text-muted">
                                        <small>
                                            Get reports feedback from doctors
                                            with prescribed medicine and digital
                                            reports.
                                        </small>
                                    </p>
                                    <Link to="/reports_feedback">
                                        <button className="button btn btn-primary rounded-pill mb-2">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 col-md-4 col-lg-3">
                            <div className="card h-100 border-0">
                                <img
                                    src={blood}
                                    className="mx-auto mt-3"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Find Blood Donors
                                    </h5>
                                    <p className="card-text text-muted">
                                        <small>
                                            No need to worry for your patients.
                                            We will manage blood donors for you.
                                        </small>
                                    </p>
                                    <Link to="/bd_portal">
                                        <button className="button btn btn-primary rounded-pill mb-2">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 col-md-4 col-lg-3">
                            <div className="card h-100 border-0">
                                <img
                                    src={covid}
                                    className="mx-auto mt-3"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        COVID-19 Update
                                    </h5>
                                    <p className="card-text text-muted">
                                        <small>
                                            Get update about covid information
                                            everyday. Consult Covid Specialist
                                            from available doctors.
                                        </small>
                                    </p>
                                    <Link to="/covid_portal">
                                        <button className="button btn btn-primary rounded-pill mb-2">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 col-md-4 col-lg-3">
                            <div className="card h-100 border-0">
                                <img
                                    src={emergency}
                                    className="mx-auto mt-3"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Emergency Care
                                    </h5>
                                    <p className="card-text text-muted">
                                        <small>
                                            You can get 24/7 urgent care for
                                            yourself or your children and your
                                            lovely family.
                                        </small>
                                    </p>
                                    <Link to="/emergency">
                                        <button className="button btn btn-primary rounded-pill mb-2">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurServices;
