import React from "react";
import Banner from "../Banner/Banner";
import EverydayWorkouts from "../EverydayWorkouts/EverydayWorkouts";
import Help from "../Help/Help";
import NavigationHome from "../Navigation/NavigationHome";
import OurServices from "../OurServices/OurServices";

const Home = () => {
    return (
        <div>
            <NavigationHome></NavigationHome>
            <Banner></Banner>
            <OurServices></OurServices>
            <EverydayWorkouts></EverydayWorkouts>
            <Help></Help>
        </div>
    );
};

export default Home;
