import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../hook/useServices";
import Service from "../Service/Service";

const Services = () => {
    const [services] = useServices();

    return (
        <div className="text-center">
            <h1 className="fw-bold">Our Services</h1>
            <h2 className="fw-bold">
                What services
                <span className="text-primary"> Medicure offers?</span>
            </h2>
            <hr className="mx-auto w-25" />
            <Container>
                <Row
                    xs={1}
                    md={2}
                    lg={4}
                    className="m-3 g-4 d-flex justify-content-center"
                >
                    {services.map((service) => (
                        <Service key={service.id} service={service}></Service>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Services;
