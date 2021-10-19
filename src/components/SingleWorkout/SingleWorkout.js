import React from "react";
import { Card, Col } from "react-bootstrap";
import "./SingleWorkout.css";

const SingleWorkout = ({ workout }) => {
    return (
        <Col className="workout-card">
            <Card className="p-2 border-0 shadow h-100">
                <Card.Img variant="top" src={workout.img} height="250" />
                <Card.Body className="p-2">
                    <Card.Title className="fw-bold">{workout.name}</Card.Title>
                    <Card.Text className="text-secondary">
                        {workout.desc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleWorkout;
