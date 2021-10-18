import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useServices from "../../hook/useServices";

const ServiceDetails = () => {
    const [services] = useServices();

    const { id } = useParams();

    const service = services.find((sv) => sv.id.toString() === id);

    return (
        <Container>
            <Card className="m-3 text-center">
                <Row className="align-items-center">
                    <Col>
                        <Card.Img src={service?.img} />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title className="fw-bold">
                                {service?.name}
                            </Card.Title>
                            <Card.Text className="text-secondary">
                                {service?.description}
                            </Card.Text>
                        </Card.Body>
                        <Link to="/home">
                            <Button variant="dark">
                                Back to Home{" "}
                                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default ServiceDetails;
