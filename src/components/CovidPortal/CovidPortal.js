import React, { useEffect, useState } from "react";
import portalImg from "../../images/undraw_medicine.svg";
import bdFlag from "../../images/bangladesh-flag.jpg";
import { Spinner } from "react-bootstrap";
import "./CovidPortal.css";

const CovidPortal = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("https://covid-19-statistics.p.rapidapi.com/reports?iso=BGD", {
            method: "GET",
            headers: {
                "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
            },
        })
            .then((res) => res.json())
            .then((data) => setData(data?.data[0]))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <div>
                <h1 className="text-center fw-bold">Covid Portal</h1>
                <hr className="mx-auto w-25" />
                <p className="text-center text-secondary">
                    <small>Be Aware, Stay Healthy!</small>
                </p>
                <div className="container pb-3">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div>
                                <img src={portalImg} alt="" className="w-100" />
                            </div>
                            <div>
                                <h1>Be Aware, Stay Healthy!</h1>
                                <p className="text-secondary">
                                    <small>
                                        Welcome to COVID-19 information portal.
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row gx-3 gy-3">
                                <div className="col-6">
                                    <div
                                        className="p-3 rounded item"
                                        style={{
                                            backgroundColor: "lightpink",
                                        }}
                                    >
                                        <div style={{ color: "maroon" }}>
                                            <h3>Confirmed</h3>
                                            {loading ? (
                                                <div className="text-center">
                                                    <Spinner
                                                        animation="border"
                                                        role="status"
                                                    >
                                                        <span className="visually-hidden">
                                                            Loading...
                                                        </span>
                                                    </Spinner>
                                                </div>
                                            ) : (
                                                <p id="confirmed">
                                                    {data.confirmed}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div
                                        className="p-3 rounded item"
                                        style={{ backgroundColor: "lightblue" }}
                                    >
                                        <div style={{ color: "blue" }}>
                                            <h3>Active</h3>
                                            {loading ? (
                                                <div className="text-center">
                                                    <Spinner
                                                        animation="border"
                                                        role="status"
                                                    >
                                                        <span className="visually-hidden">
                                                            Loading...
                                                        </span>
                                                    </Spinner>
                                                </div>
                                            ) : (
                                                <p>{data?.active_diff}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div
                                        className="p-3 rounded item"
                                        style={{
                                            backgroundColor: "lightgreen",
                                        }}
                                    >
                                        <div style={{ color: "green" }}>
                                            <h3>Recovered</h3>
                                            {loading ? (
                                                <div className="text-center">
                                                    <Spinner
                                                        animation="border"
                                                        role="status"
                                                    >
                                                        <span className="visually-hidden">
                                                            Loading...
                                                        </span>
                                                    </Spinner>
                                                </div>
                                            ) : (
                                                <p>
                                                    {data.confirmed -
                                                        data.deaths -
                                                        data.active_diff}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div
                                        className="p-3 rounded item"
                                        style={{
                                            backgroundColor: "lightgray",
                                        }}
                                    >
                                        <h3>Deceased</h3>
                                        {loading ? (
                                            <div className="text-center">
                                                <Spinner
                                                    animation="border"
                                                    role="status"
                                                >
                                                    <span className="visually-hidden">
                                                        Loading...
                                                    </span>
                                                </Spinner>
                                            </div>
                                        ) : (
                                            <p>{data.deaths}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <h5 className="pt-3 text-center">
                                <img
                                    src={bdFlag}
                                    alt=""
                                    width="50"
                                    height="50"
                                />
                                <span className="text-success">
                                    {" "}
                                    {data?.region?.name}
                                </span>{" "}
                                | Updated:
                                <span>{data?.last_update}</span>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CovidPortal;
