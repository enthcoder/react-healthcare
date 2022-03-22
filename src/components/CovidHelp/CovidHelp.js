import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import useAuth from "../../hook/useAuth";
import helpImg from "../../images/img/need-help.svg";
import "./CovidHelp.css";

const Help = () => {
    const { user } = useAuth();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="help-section" id="help">
            <Container>
                <div className="my-5 pt-5 text-center">
                    <h1 className="fw-bold">Need Help!</h1>
                    <hr className="mx-auto w-25" />
                    <p className="mx-auto my-3 text-secondary w-75">
                        <small>
                            Protect yourself and others around you by knowing
                            the facts and taking appropriate precautions. Floow
                            advice provided by your local health authority.
                        </small>
                    </p>
                    <div>
                        <img src={helpImg} alt="" className="w-50" />
                    </div>

                    <div className="my-3">
                        <Button variant="primary" onClick={handleShow}>
                            Contact us{" "}
                            <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </Button>
                    </div>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Ask for help!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form className="covid-contact">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="border-0 form-control bg-light rounded-3"
                                        id="recipient-name"
                                        placeholder="Email"
                                        value={user.email}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="border-0 form-control bg-light rounded-3"
                                        id="recipient-name"
                                        placeholder="Name"
                                        value={user.displayName}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="border-0 form-control bg-light rounded-3"
                                        id="recipient-phone"
                                        placeholder="Phone"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="border-0 form-control bg-light rounded-3"
                                        id="recipient-symptoms"
                                        placeholder="Symptoms"
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className="border-0 form-control bg-light rounded-3"
                                        id="message-text"
                                        placeholder="Message in details"
                                    ></textarea>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Send Message{" "}
                                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Container>
        </div>
    );
};

export default Help;
