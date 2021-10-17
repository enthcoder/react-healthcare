import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={service.img} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                </Card.Body>
                <Link to={`/details/${service.id}`}>
                    <Button variant="dark">Details</Button>
                </Link>
            </Card>
        </Col>
    );
};

export default Service;
