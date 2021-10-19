import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import brandLogo from "../../images/brand-logo.png";

const Header = () => {
    const { user, handleSignOut } = useAuth();
    // console.log(user);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img
                        alt=""
                        src={brandLogo}
                        width="30"
                        height="30"
                        className="align-top d-inline-block"
                    />
                    <span className="fw-bold"> Medicure</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={NavLink} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/covid">
                            Covid Portal
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about">
                            About Us
                        </Nav.Link>
                        {user.displayName && (
                            <Navbar.Text>
                                <span>{user?.displayName} </span>
                                <img
                                    className="rounded-circle"
                                    src={user.photoURL}
                                    alt=""
                                    width="30"
                                    height="30"
                                />
                            </Navbar.Text>
                        )}

                        {!user.displayName ? (
                            <Nav.Link as={NavLink} to="/login">
                                Login
                            </Nav.Link>
                        ) : (
                            <button
                                onClick={handleSignOut}
                                className="m-0 btn btn-dark bg-danger"
                            >
                                Logout
                            </button>
                        )}

                        {!user.email && (
                            <Nav.Link as={NavLink} to="/register">
                                Register
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
