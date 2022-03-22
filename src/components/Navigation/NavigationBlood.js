import React from "react";
import brandLogo from "../../images/brand-logo.png";

const NavigationBlood = () => {
    return (
        <>
            <section className="navbar-section mb-5 pb-2">
                <nav
                    className="
                        navbar
                        fixed-top
                        navbar-expand-lg navbar-dark
                        bg-danger
                    "
                >
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img
                                src={brandLogo}
                                alt=""
                                width="30"
                                height="30"
                                className="d-inline-block align-text-top"
                            />
                            <strong> Medicure</strong>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul
                                className="
                                    navbar-nav
                                    ms-auto
                                    mb-2 mb-lg-0
                                    text-center
                                "
                            >
                                <li className="nav-item px-2">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="/"
                                    >
                                        <small>Home</small>
                                    </a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link active" href="#">
                                        <small>All donors</small>
                                    </a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link active" href="#">
                                        <small id="join-us">Join Us</small>
                                    </a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link active" href="#">
                                        <small>My acount</small>
                                    </a>
                                </li>
                                <li className="nav-item px-2">
                                    <a
                                        className="nav-link active"
                                        href="#about"
                                    >
                                        <small>About Us</small>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
};

export default NavigationBlood;
