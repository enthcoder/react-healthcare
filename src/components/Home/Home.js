import React from "react";
import Banner from "../Banner/Banner";
import Help from "../Help/Help";
import Services from "../Services/Services";
import Workouts from "../Workouts/Workouts";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Workouts></Workouts>
            <Help></Help>
        </div>
    );
};

export default Home;
