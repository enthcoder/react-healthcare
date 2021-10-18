import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Col, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import registerImg from "../../images/register-pana.svg";

const Register = () => {
    const { error, setError, handleRegister, handleGoogleSignIn } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, e) => {
        //console.log(data);
        if (data.Password.length < 6)
            setError("Password should be at least 6 characters long!");
        else {
            setError("");
            handleRegister(data.Name, data.Email, data.Password);
            e.target.reset();
        }
    };

    return (
        <Row className="align-items-center g-0">
            <Col className="d-flex justify-content-center">
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
                                })}
                                className="input-field bg-light w-75"
                                placeholder="Email"
                            />
                        </InputGroup>
                        {errors.Email && (
                            <span className="ps-3 text-danger">
                                Email is required!
                            </span>
                        )}

                        <InputGroup className="mb-3">
                            <InputGroup.Text className="border-0 bg-light">
                                <FontAwesomeIcon icon={faLock} />
                            </InputGroup.Text>
                            <input
                                type="password"
                                {...register("Password", {
                                    required: true,
                                })}
                                className="input-field bg-light w-75"
                                placeholder="Password"
                            />
                        </InputGroup>
                        {errors.Password && (
                            <span className="text-danger ps-3">
                                Password is required!
                            </span>
                        )}
                        <p className="ps-2">
                            Already have an account?{" "}
                            <Link to="/login">Go to Login Page</Link>
                        </p>
                        <span className="text-danger">{error}</span>
                        <div className="mt-2 d-flex justify-content-center">
                            <button className="px-5 btn btn-primary">
                                Register
                            </button>
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
            <Col>
                <div>
                    <img src={registerImg} alt="" className="w-100" />
                </div>
            </Col>
        </Row>
    );
};

export default Register;
