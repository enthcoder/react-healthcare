import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import brandLogo from "../../images/brand-logo.png";

const Header = () => {
    const { user } = useAuth();
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
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/covid">
                            Covid Portal
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about">
                            About Us
                        </Nav.Link>
                        <Nav.Link as={Link} to="/login">
                            Login
                        </Nav.Link>
                        <Nav.Link as={Link} to="/register">
                            Register
                        </Nav.Link>
                    </Nav>
                    <Navbar.Text>Signed in as: {user.displayName}</Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
