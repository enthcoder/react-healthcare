import React from "react";
import { Carousel, Container } from "react-bootstrap";
import slideImg1 from "../../images/Carousel/undraw_doctors.svg";
import slideImg2 from "../../images/Carousel/undraw_monitoring.svg";
import slideImg3 from "../../images/Carousel/undraw_Online_information.svg";
const Banner = () => {
    return (
        <Container className="my-3 rounded-3 bg-light">
            <Carousel>
                <Carousel.Item>
                    <div className="m-3 row align-items-center">
                        <div className="col-12 col-md-6">
                            <h1 className="fw-bold">Discover Top Doctors</h1>
                            <p className="text-secondary">
                                Choose your doctor from thousands of specialist,
                                general, and trusted hospitals.
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img
                                className="d-block w-100"
                                src={slideImg1}
                                alt="First slide"
                                height="400"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="m-3 row align-items-center">
                        <div className="col-12 col-md-6">
                            <h1 className="fw-bold">Special Medical Care</h1>
                            <p className="text-secondary">
                                We ensure special care for you and your family
                                and friends. You can get 24/7 urgent care for
                                yourself or your children and your lovely
                                family.
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img
                                className="d-block w-100"
                                src={slideImg2}
                                alt="First slide"
                                height="400"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="m-3 row align-items-center">
                        <div className="col-12 col-md-6">
                            <h1 className="fw-bold">
                                Covid19 Information Portal
                            </h1>
                            <p className="text-secondary">
                                Get update about covid information everyday.
                                Consult Covid Specialist from available doctors.
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img
                                className="d-block w-100"
                                src={slideImg3}
                                alt="First slide"
                                height="400"
                            />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;
