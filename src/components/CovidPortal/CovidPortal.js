import React from "react";
import CovidHeader from "../CovidHeader/CovidHeader";
import CovidPreventions from "../CovidPreventions/CovidPreventions";
import CovidSymptoms from "../CovidSymptoms/CovidSymptoms";
import Help from "../Help/Help";
import NavigationCovid from "../Navigation/NavigationCovid";

const CovidPortal = () => {
    return (
        <>
            <NavigationCovid></NavigationCovid>
            <CovidHeader></CovidHeader>
            <CovidPreventions></CovidPreventions>
            <CovidSymptoms></CovidSymptoms>
            <Help></Help>
        </>
    );
};

export default CovidPortal;
