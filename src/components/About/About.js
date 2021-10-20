import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import aboutImg from "../../images/Doctors-pana.svg";
import "./About.css";

const About = () => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col
                    xs={12}
                    md={6}
                    className="order-sm-0 order-1 p-2 about-desc"
                >
                    <h1 className="fw-bold text-dark">About Us</h1>
                    <p className="text-secondary">
                        Medicure provides progressive, and affordable
                        healthcare, accessible on mobile and online for
                        everyone.
                    </p>
                    <Link to="/home">
                        <Button>
                            Back to Home <FontAwesomeIcon icon={faHome} />
                        </Button>
                    </Link>
                </Col>
                <Col xs={12} md={6} className="order-0 order-sm-1">
                    <div>
                        <img src={aboutImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
