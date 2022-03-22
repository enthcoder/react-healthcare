import React from "react";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import banner from "../../images/Carousel/undraw_doctors.svg";
const DoctorsPortalBanner = () => {
    return (
        <Container className="mt-3 mb-5 rounded-3 bg-light">
            <div className="m-3 row align-items-center">
                <div className="col-12 col-md-6">
                    <h1 className="fw-bold">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter

                                    .typeString("Top")

                                    .pauseFor(500)
                                    .deleteAll()
                                    .typeString("Discover Top Doctors")
                                    .start();
                            }}
                        />
                    </h1>
                    <p className="text-secondary">
                        Choose your doctor from thousands of specialist,
                        general, and trusted hospitals.
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="First slide"
                        height="400"
                    />
                </div>
            </div>
        </Container>
    );
};

export default DoctorsPortalBanner;
