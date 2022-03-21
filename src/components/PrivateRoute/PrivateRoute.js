import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading)
        return (
            <div className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );

    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    } else if (!user.emailVerified) {
        Swal.fire("Alert!", "Email not verified!", "warning");
        return <Navigate to="/" />;
    } else {
        return children;
    }

    /* return (
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
    ); */
};

export default PrivateRoute;
