import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/blood donation/img1.jpg";
import img2 from "../../images/blood donation/resized-image-Promo.jpeg";

const BDPortalBanner = () => {
    return (
        <>
            <Carousel interval={4000}>
                <Carousel.Item>
                    <div>
                        <img src={img1} className="d-block w-100" alt="..." />
                        <Carousel.Caption>
                            <h5 className="fs-2 fw-bold text-danger">
                                Blood Donation
                            </h5>
                            <p>
                                A drop of blood can save a life! Donate blood
                                and get real blessings. Your droplets of blood
                                may create an ocean of happiness.
                            </p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <img
                            src={img2}
                            className="d-block w-100 h-100"
                            alt="..."
                        />
                        <Carousel.Caption>
                            <h5 className="fs-2 fw-bold text-danger">
                                Donate Blood & Save Life
                            </h5>
                            <p>
                                Donating just a pint (almost 470 ml) of blood
                                will not make much of a difference in your life
                                but that one pint can save up to three lives!
                            </p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default BDPortalBanner;
