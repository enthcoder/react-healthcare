import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import registerImg from "../../images/register-pana.svg";

const Register = () => {
    const { error, handleRegister, handleGoogleSignIn } = useAuth();

    const [errorMsg, setErrorMsg] = useState("");
    useEffect(() => {
        setErrorMsg(error);
        const timer = setTimeout(() => {
            setErrorMsg("");
            return () => clearTimeout(timer);
        }, 3000);
    }, [error]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const history = useHistory();

    const onSubmit = (data, e) => {
        // console.log(data);
        handleRegister(data.Name, data.Email, data.Password, history);
        e.target.reset();
    };

    return (
        <Row className="align-items-center g-0 p-3">
            <Col className="d-flex justify-content-center order-1 order-sm-0">
                <div className="p-5 rounded shadow bg-light">
                    <div className="p-2 mb-3 text-center text-white fs-1">
                        <span className="p-3 rounded-circle alert-primary">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text className="border-0 bg-light">
                                <FontAwesomeIcon icon={faUserAlt} />
                            </InputGroup.Text>
                            <input
                                {...register("Name", {
                                    required: false,
                                })}
                                className="input-field bg-light w-75"
                                placeholder="Name"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text className="border-0 bg-light">
                                <FontAwesomeIcon icon={faUserAlt} />
                            </InputGroup.Text>
                            <input
                                {...register("Email", {
                                    required: true,
                                    pattern:
                                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                })}
                                className="input-field bg-light w-75"
                                placeholder="Email"
                            />
                        </InputGroup>
                        {errors.Email && (
                            <div className="ps-4 text-danger">
                                Email is required! <br /> Put a valid email
                                address!
                            </div>
                        )}

                        <InputGroup className="mb-3">
                            <InputGroup.Text className="border-0 bg-light">
                                <FontAwesomeIcon icon={faLock} />
                            </InputGroup.Text>
                            <input
                                type="password"
                                {...register("Password", {
                                    required: true,
                                    pattern:
                                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                })}
                                className="input-field bg-light w-75"
                                placeholder="Password"
                            />
                        </InputGroup>
                        {errors.Password && (
                            <div className="text-danger ps-4">
                                Password is required! <br /> (Minimum eight
                                characters, at least one digit, one uppercase,
                                one lowercase and one special character!)
                            </div>
                        )}

                        <p className="ps-2">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                style={{ textDecoration: "none" }}
                            >
                                Go to Login Page
                            </Link>
                        </p>
                        <span className="text-danger">{errorMsg}</span>
                        <div className="mt-2 d-flex justify-content-center">
                            <input
                                type="submit"
                                value="Register"
                                className="px-5 btn btn-primary"
                            />
                        </div>
                    </form>

                    <div className="mt-3 text-center">
                        <p>Or Sign Up Using</p>
                        <img
                            onClick={handleGoogleSignIn}
                            src="https://i.ibb.co/d7hrH3F/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                            alt=""
                            width="30"
                            height="30"
                        />{" "}
                        <img
                            src="https://i.ibb.co/pP0XLP9/2-21918-download-transparent-background-facebook-logo-clipart-facebook-logo.jpg"
                            alt=""
                            width="30"
                            height="30"
                        />
                    </div>
                </div>
            </Col>
            <Col xs={12} md={6} className="order-0 order-sm-1">
                <div>
                    <img src={registerImg} alt="" className="w-100" />
                </div>
            </Col>
        </Row>
    );
};

export default Register;
