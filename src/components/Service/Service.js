import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    return (
        <Col>
            <Card className="border-0 shadow h-100">
                <Card.Img variant="top" src={service.img} height="180" />
                <Card.Body className="p-2">
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/details/${service.id}`}>
                        <Button variant="dark">Read More</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;
