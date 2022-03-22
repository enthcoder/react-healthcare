import React from "react";
import Banner from "../Banner/Banner";
import BloodDonationSection from "../BloodDonationSection/BloodDonationSection";
import EverydayWorkouts from "../EverydayWorkouts/EverydayWorkouts";
import Help from "../Help/Help";
import NavigationHome from "../Navigation/NavigationHome";
import OurServices from "../OurServices/OurServices";
import Precautions from "../Precautions/Precautions";
import ReportsSection from "../ReportsSection/ReportsSection";

const Home = () => {
    return (
        <div>
            <NavigationHome></NavigationHome>
            <Banner></Banner>
            <OurServices></OurServices>
            <Precautions></Precautions>
            <BloodDonationSection></BloodDonationSection>
            <ReportsSection></ReportsSection>
            <EverydayWorkouts></EverydayWorkouts>
            <Help></Help>
        </div>
    );
};

export default Home;
