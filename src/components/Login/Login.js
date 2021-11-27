import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import loginImg from "../../images/Mobile login-rafiki.svg";
import "./Login.css";

const Login = () => {
    const { error, handleLoginUsingEmailPassword, handleGoogleSignIn } =
        useAuth();

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

    const location = useLocation();
    const history = useHistory();

    const onSubmit = (data, e) => {
        //console.log(data);
        handleLoginUsingEmailPassword(
            data.Email,
            data.Password,
            location,
            history
        );
        e.target.reset();
    };

    return (
        <Row className="align-items-center g-0 p-3">
            <Col
                xs={12}
                md={6}
                className="d-flex justify-content-center order-1 order-sm-0"
            >
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
                                {...register("Email", {
                                    required: true,
                                })}
                                className="input-field bg-light"
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
                                className="input-field bg-light"
                                placeholder="Password"
                            />
                        </InputGroup>
                        {errors.Password && (
                            <span className="text-danger ps-3">
                                Password is required!
                            </span>
                        )}
                        <span className="px-2 me-auto text-primary">
                            Forgot Password?
                        </span>
                        <p className="ps-2">
                            New User?{" "}
                            <Link to="/register">Create an Account</Link>
                        </p>
                        <span className="text-danger">{errorMsg}</span>
                        <div className="mt-2 d-flex justify-content-center">
                            <button className="px-5 btn btn-primary">
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="mt-3 text-center">
                        <p>Or Sign In Using</p>
                        <img
                            onClick={() =>
                                handleGoogleSignIn(location, history)
                            }
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
                    <img src={loginImg} alt="" className="w-100" />
                </div>
            </Col>
        </Row>
    );
};

export default Login;
