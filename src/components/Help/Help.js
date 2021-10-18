import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import helpImg from "../../images/img/need-help.svg";
const Help = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div class="container">
            <div class="text-center mt-5">
                <h1 className="fw-bold">Need Help!</h1>
                <hr class="w-25 mx-auto" />
                <p class="text-secondary w-75 mx-auto my-3">
                    <small>
                        Protect yourself and others around you by knowing the
                        facts and taking appropriate precautions. Floow advice
                        provided by your local health authority.
                    </small>
                </p>
                <div>
                    <img src={helpImg} alt="" />
                </div>

                <div className="my-3">
                    <Button variant="primary" onClick={handleShow}>
                        Contact us
                    </Button>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ask for help!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form class="covid-contact">
                            <div class="mb-3">
                                <input
                                    type="text"
                                    class="
                                                        form-control
                                                        border-0
                                                        bg-light
                                                        rounded-3
                                                    "
                                    id="recipient-name"
                                    placeholder="Name"
                                />
                            </div>
                            <div class="mb-3">
                                <input
                                    type="text"
                                    class="
                                                        form-control
                                                        border-0
                                                        bg-light
                                                        rounded-3
                                                    "
                                    id="recipient-phone"
                                    placeholder="Phone"
                                />
                            </div>
                            <div class="mb-3">
                                <input
                                    type="text"
                                    class="
                                                        form-control
                                                        border-0
                                                        bg-light
                                                        rounded-3
                                                    "
                                    id="recipient-symptoms"
                                    placeholder="Symptoms"
                                />
                            </div>
                            <div class="mb-3">
                                <textarea
                                    class="
                                                        form-control
                                                        border-0
                                                        bg-light
                                                        rounded-3
                                                    "
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
                            Send Message
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Help;
