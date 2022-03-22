import React from "react";
import CovidHeader from "../CovidHeader/CovidHeader";
import CovidHelp from "../CovidHelp/CovidHelp";
import CovidPreventions from "../CovidPreventions/CovidPreventions";
import CovidSymptoms from "../CovidSymptoms/CovidSymptoms";
import NavigationCovid from "../Navigation/NavigationCovid";

const CovidPortal = () => {
    return (
        <>
            <NavigationCovid></NavigationCovid>
            <CovidHeader></CovidHeader>
            <CovidPreventions></CovidPreventions>
            <CovidSymptoms></CovidSymptoms>
            <CovidHelp></CovidHelp>
        </>
    );
};

export default CovidPortal;
