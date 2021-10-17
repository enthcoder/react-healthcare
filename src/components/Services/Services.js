import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/fakeData.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="text-center">
            <h1 className="fw-bold">Our Services</h1>
            <hr className="mx-auto w-25" />
            <Container>
                <Row
                    xs={1}
                    md={2}
                    lg={4}
                    className="g-4 d-flex justify-content-center"
                >
                    {services.map((service) => (
                        <Service service={service}></Service>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Services;
