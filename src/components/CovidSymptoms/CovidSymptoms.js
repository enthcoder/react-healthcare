import React from "react";
import symptoms from "../../images/img/Symptoms-main.svg";
import "./CovidSymptoms.css";

const CovidSymptoms = () => {
    return (
        <>
            <section className="symptoms-section mb-5" id="symptoms">
                <div className="container">
                    <div className="text-center mt-5 pt-5">
                        <h1 className="fw-bold">Symptoms</h1>
                        <hr className="w-25 mx-auto" />
                        <p className="text-secondary w-75 mx-auto my-3">
                            <small>
                                COVID-19 affects different people in different
                                ways. Most infected people will develop mild to
                                moderate illness and recover without
                                hospitalization.
                            </small>
                        </p>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 col-lg-6 portal-img">
                            <img src={symptoms} alt="" className="w-100" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 ps-5">
                            <h4
                                className="text-danger"
                                style={{ fontWeight: 600 }}
                            >
                                Most Common Symptoms:
                            </h4>
                            <ul className="text-secondary">
                                <li>Fever</li>
                                <li>Dry Cough</li>
                                <li>Tiredness</li>
                            </ul>
                            <h4
                                className="text-warning"
                                style={{ fontWeight: 600 }}
                            >
                                Less Common Symptoms:
                            </h4>
                            <ul className="text-secondary">
                                <li>Aches and pains</li>
                                <li>Sore throat</li>
                                <li>Diarrhoea</li>
                                <li>Conjunctivitis</li>
                                <li>Headache</li>
                                <li>Loss of taste or smell</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CovidSymptoms;
