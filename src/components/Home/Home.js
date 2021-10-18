import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Workouts from "../Workouts/Workouts";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Workouts></Workouts>
        </div>
    );
};

export default Home;
