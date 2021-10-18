import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import aboutImg from "../../images/Doctors-pana.svg";

const About = () => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col>
                    <h1 className="fw-bold text-dark">About Us</h1>
                    <p className="text-secondary">
                        Medicure provides progressive, and affordable
                        healthcare, accessible on mobile and online for
                        everyone.
                    </p>
                    <Link to="/home">
                        <Button>Back to Home</Button>
                    </Link>
                </Col>
                <Col>
                    <div>
                        <img src={aboutImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
