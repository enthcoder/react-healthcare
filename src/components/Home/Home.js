import React from "react";
import Banner from "../Banner/Banner";
import Help from "../Help/Help";
import NavigationHome from "../Navigation/NavigationHome";
import OurServices from "../OurServices/OurServices";
import Services from "../Services/Services";
import Workouts from "../Workouts/Workouts";

const Home = () => {
    return (
        <div>
            <NavigationHome></NavigationHome>
            <Banner></Banner>
            {/* <Services></Services> */}
            <OurServices></OurServices>
            <Workouts></Workouts>
            <Help></Help>
        </div>
    );
};

export default Home;
