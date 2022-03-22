import React from "react";
import yoga from "../../images/workout/undraw_yoga.svg";
import workout from "../../images/workout/undraw_working_out.svg";
import meditation from "../../images/workout/undraw_Meditation.svg";
import indoor from "../../images/workout/undraw_indoor.svg";

const EverydayWorkouts = () => {
    return (
        <>
            <section
                className="workout-section text-center mt-5 pt-5"
                id="workout"
            >
                <div className="container mb-4">
                    <h1 className="fw-bold">Everyday Workout</h1>
                    <hr className="w-25 mx-auto" />
                    <p className="text-secondary w-75 mx-auto">
                        <small>
                            Regular physical activity can improve your muscle
                            strength and boost your endurance. Exercise delivers
                            oxygen and nutrients to your tissues and helps your
                            cardiovascular system work more efficiently.
                        </small>
                    </p>
                    <div
                        className="
                            row row-cols-1 row-cols-md-2 row-cols-lg-4
                            g-4
                            justify-content-center
                        "
                    >
                        <div className="col-10 col-md-5 col-lg-3">
                            <div className="card h-100 border-0">
                                <img
                                    src={workout}
                                    className="card-img-top mx-auto mt-3"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Working out</h5>
                                    <p className="card-text text-muted">
                                        <small>
                                            Running can significantly improve
                                            physical and mental health. Running
                                            can reduce stress, improve heart
                                            health, and even help alleviate
                                            symptoms of depression.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 col-md-5 col-lg-3">
                            <div className="card h-100 border-0">
                                <img
                                    src={meditation}
                                    className="card-img-top mx-auto mt-3"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Meditation</h5>
                                    <p className="card-text text-muted">
                                        <small>
                                            The mental health benefits of
                                            meditation include better focus and
                                            concentration, improved
                                            self-awareness, lower levels of
                                            stress and anxiety.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 col-md-5 col-lg-3">
                            <div className="card h-100 border-0">
                                <img
                                    src={indoor}
                                    className="card-img-top mx-auto mt-3"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Indoor bike</h5>
                                    <p className="card-text text-muted">
                                        <small>
                                            Riding a stationary exercise bike is
                                            an efficient and effective way to
                                            burn calories and body fat while
                                            strengthening your heart, lungs, and
                                            muscles.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 col-md-5 col-lg-3">
                            <div className="card h-100 border-0">
                                <img
                                    src={yoga}
                                    className="card-img-top mx-auto mt-3"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Yoga</h5>
                                    <p className="card-text text-muted">
                                        <small>
                                            Yoga combines breathing exercises,
                                            meditation and poses proven to
                                            benefit mental and physical health.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className="button btn btn-primary rounded-pill mb-4">
                    Learn More
                </button> */}
            </section>
        </>
    );
};

export default EverydayWorkouts;
