import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import brandLogo from "../../images/brand-logo.png";

const NavigationCovid = () => {
    const { user, handleSignOut } = useAuth();

    return (
        <>
            <section className="mb-5 pb-5">
                <Navbar
                    collapseOnSelect
                    expand="lg"
                    bg="dark"
                    variant="dark"
                    fixed="top"
                >
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img
                                alt=""
                                src={brandLogo}
                                width="30"
                                height="30"
                                className="align-top d-inline-block"
                            />
                            <span className="fw-bold"> Medicare</span>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto align-items-center">
                                <Nav.Link
                                    as={NavLink}
                                    to="/"
                                    className="nav-link"
                                >
                                    <small>Home</small>
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    to="/covidSpecialist"
                                    className="nav-link"
                                >
                                    <small>Find a doctor</small>
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    to="/blood_donors"
                                    className="nav-link"
                                >
                                    <small>Preventions</small>
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    to="/covid_portal"
                                    className="nav-link"
                                >
                                    <small>Symptoms</small>
                                </Nav.Link>
                                {/* <a className="nav-link" href="#contact">
                                    <small>Contact Us</small>
                                </a> */}
                                <Nav.Link
                                    as={NavLink}
                                    to="/contact"
                                    className="nav-link"
                                >
                                    <small>Contact Us</small>
                                </Nav.Link>

                                {user.email && (
                                    <Navbar.Text>
                                        <small>
                                            <span>{user?.displayName} </span>
                                        </small>
                                        <img
                                            className="rounded-circle"
                                            src={user.photoURL}
                                            alt=""
                                            width="30"
                                            height="30"
                                        />
                                        <button
                                            onClick={handleSignOut}
                                            className="mx-1 btn btn-dark bg-danger"
                                        >
                                            Logout
                                        </button>
                                    </Navbar.Text>
                                )}

                                {!user.email && (
                                    <Nav.Link as={NavLink} to="/login">
                                        <small>Login</small>
                                    </Nav.Link>
                                )}

                                {!user.email && (
                                    <Nav.Link as={NavLink} to="/register">
                                        <small>Register</small>
                                    </Nav.Link>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>
        </>
    );
};

export default NavigationCovid;
