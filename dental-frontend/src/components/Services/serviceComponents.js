import React, { useEffect } from "react";
import Preventative from "./preventative.component";
import DeepCleanings from "./deep-cleanings.component";
import Emergency from "./emergency.component";
import Invisalign from "./invisalign.component";
import Dentures from "./dentures.component";
import Extractions from "./extractions.component.js";
import NightGuard from "./nightguard.component";
import Sedation from "./sedation.component";
import Restorative from "./restorative.component";
import Implants from "./implants.component";
import Fillings from "./fillings.component";
import Whitening from "./whitening.component";

const ServiceComponents = () => {
    useEffect(() => {
        document.title = "Services-West Chicago Dentist-North Ave Dental Associates"
    })
    return (
        <div className="page-content">
            <Preventative />
            <DeepCleanings />
            <Emergency />
            <Invisalign />
            <Dentures />
            <Extractions />
            <NightGuard />
            <Sedation />
            <Restorative />
            <Implants />
            <Fillings />
            <Whitening />
        </div>
    )
}

export default ServiceComponents;