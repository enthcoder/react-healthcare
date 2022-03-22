import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import report from "../../images/documents/medical_report.jpg";

const ReportsSection = () => {
    return (
        <>
            <section className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="section-img col-10 col-md-6 col-lg-6 p-5">
                        <img src={report} alt="" className="w-100" />
                    </div>
                    <div className="section-intro col-10 col-md-6 col-lg-6">
                        <h1 className="fw-bold">Reports Feedback</h1>
                        <p className="text-secondary">
                            <small>
                                Get your test reports with feedback from doctors
                                with prescribed medicine. Review reports will be
                                delivered to you through our application.
                            </small>
                        </p>
                        <Link to="/reports_feedback">
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

export default ReportsSection;
