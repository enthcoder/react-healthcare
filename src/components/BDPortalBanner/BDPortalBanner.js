import React from "react";
import img1 from "../../images/blood donation/img1.jpg";
import img2 from "../../images/blood donation/resized-image-Promo.jpeg";

const BDPortalBanner = () => {
    return (
        <>
            <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
            >
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="fs-2 fw-bold text-danger">
                                Blood Donation
                            </h5>
                            <p>
                                A drop of blood can save a life! Donate blood
                                and get real blessings. Your droplets of blood
                                may create an ocean of happiness.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={img2} class="d-block w-100 h-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="fs-2 fw-bold text-danger">
                                Donate Blood & Save Life
                            </h5>
                            <p>
                                Donating just a pint (almost 470 ml) of blood
                                will not make much of a difference in your life
                                but that one pint can save up to three lives!
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default BDPortalBanner;
