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
            <section class="service-section text-center mt-5" id="services">
                <div class="container mb-4">
                    <h1>Our Services</h1>
                    <hr class="w-25 mx-auto" />
                    <p class="text-secondary w-75 mx-auto">
                        <small>
                            We provide to you the best choiches for you. Adjust
                            it to your health needs and make sure your undergo
                            treatment with our highly qualified doctors you can
                            consult with us which type of service is suitable
                            for your health.
                        </small>
                    </p>
                    <div
                        class="
                            row row-cols-1 row-cols-md-3 row-cols-lg-4
                            g-4
                            justify-content-center
                        "
                    >
                        <div class="col-10 col-md-4 col-lg-3">
                            <div class="card h-100 border-0">
                                <img
                                    src={search}
                                    class="mx-auto mt-3"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">Search Doctor</h5>
                                    <p class="card-text text-muted">
                                        <small>
                                            Choose your doctor from thousands of
                                            specialist, general, and trusted
                                            hospitals.
                                        </small>
                                    </p>
                                    <Link to="/doctors">
                                        <button class="button btn btn-primary rounded-pill mb-2">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-10 col-md-4 col-lg-3">
                            <div class="card h-100 border-0">
                                <img
                                    src={consultation}
                                    class="mx-auto mt-3"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">Consultation</h5>
                                    <p class="card-text text-muted">
                                        <small>
                                            Free consultation with our trusted
                                            doctors and get the best
                                            recomendations.
                                        </small>
                                    </p>
                                    <Link to="/appointments">
                                        <button class="button btn btn-primary rounded-pill mb-2">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-10 col-md-4 col-lg-3">
                            <div class="card h-100 border-0">
                                <img
                                    src={reports}
                                    class="mx-auto mt-3"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">Reports Feedback</h5>
                                    <p class="card-text text-muted">
                                        <small>
                                            Get reports feedback from doctors
                                            with prescribed medicine and digital
                                            reports.
                                        </small>
                                    </p>
                                    <Link to="/reports">
                                        <button class="button btn btn-primary rounded-pill mb-2">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-10 col-md-4 col-lg-3">
                            <div class="card h-100 border-0">
                                <img
                                    src={blood}
                                    class="mx-auto mt-3"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Find Blood Donors
                                    </h5>
                                    <p class="card-text text-muted">
                                        <small>
                                            No need to worry for your patients.
                                            We will manage blood donors for you.
                                        </small>
                                    </p>
                                    <Link to="/blood_donors">
                                        <button class="button btn btn-primary rounded-pill mb-2">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-10 col-md-4 col-lg-3">
                            <div class="card h-100 border-0">
                                <img
                                    src={covid}
                                    class="mx-auto mt-3"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">COVID-19 Update</h5>
                                    <p class="card-text text-muted">
                                        <small>
                                            Get update about covid information
                                            everyday. Consult Covid Specialist
                                            from available doctors.
                                        </small>
                                    </p>
                                    <Link to="/covid">
                                        <button class="button btn btn-primary rounded-pill mb-2">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-10 col-md-4 col-lg-3">
                            <div class="card h-100 border-0">
                                <img
                                    src={emergency}
                                    class="mx-auto mt-3"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">Emergency Care</h5>
                                    <p class="card-text text-muted">
                                        <small>
                                            You can get 24/7 urgent care for
                                            yourself or your children and your
                                            lovely family.
                                        </small>
                                    </p>
                                    <Link to="/emergency">
                                        <button class="button btn btn-primary rounded-pill mb-2">
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
