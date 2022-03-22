import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import brandLogo from "../../images/brand-logo.png";

const NavigationBlood = () => {
    const { user, handleSignOut } = useAuth();

    return (
        <>
            <section className="mb-5">
                <Navbar
                    collapseOnSelect
                    expand="lg"
                    bg="danger"
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
                                    style={{ color: "white" }}
                                >
                                    <small>Home</small>
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    to="/allDonors"
                                    style={{ color: "white" }}
                                >
                                    <small>All Donors</small>
                                </Nav.Link>

                                <a
                                    className="nav-link"
                                    href="/join"
                                    style={{ color: "white" }}
                                >
                                    <small>Join Us</small>
                                </a>
                                <a
                                    className="nav-link"
                                    href="/profile"
                                    style={{ color: "white" }}
                                >
                                    <small>My Profile</small>
                                </a>
                                <a
                                    className="nav-link"
                                    href="#help"
                                    style={{ color: "white" }}
                                >
                                    <small>Contact Us</small>
                                </a>

                                {user.email && (
                                    <Navbar.Text>
                                        <small style={{ color: "white" }}>
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

export default NavigationBlood;
