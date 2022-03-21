import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading)
        return (
            <div className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );

    if (user.email && !user.emailVerified) {
        Swal.fire("Alert!", "Email not verified!", "warning");
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && user.emailVerified ? (
                    children
                ) : user.email ? (
                    <Redirect
                        to={{
                            pathname: "/",
                        }}
                    />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
