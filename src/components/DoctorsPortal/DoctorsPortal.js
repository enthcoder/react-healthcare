import React from "react";
import DoctorsPortalBanner from "../DoctorsPortalBanner/DoctorsPortalBanner";
import NavigationHome from "../Navigation/NavigationHome";

const DoctorsPortal = () => {
    return (
        <>
            <NavigationHome></NavigationHome>
            <DoctorsPortalBanner></DoctorsPortalBanner>
        </>
    );
};

export default DoctorsPortal;
