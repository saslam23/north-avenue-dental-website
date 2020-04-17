import React from "react";
import { serviceData } from "../../data";
import { AlignLeft, AlignRightButton } from "./ServiceInfo.component";


const Emergency = () => {
    return (
        <div className="service-pages" id="emergency_dentistry">
            <div>
                <img className="service-banner" src={process.env.PUBLIC_URL + "/assets/emergency-banner.jpg"} alt="emergency" />
                <h1 data-aos="fade-right" data-aos-duration="2000" className="banner-sm-left">Emergency</h1>
                <h1 data-aos="fade-right" data-aos-duration="2700" className="banner-text-xs">Prompt treatment available</h1>

            </div>
            <AlignLeft key={serviceData[5].id} header={serviceData[5].header} description1={serviceData[5].description1} list={serviceData[5].list} image={serviceData[5].image} />
            <AlignRightButton key={serviceData[6].id} header={serviceData[6].header} description1={serviceData[6].description1} list={serviceData[6].list} image={serviceData[6].image} button={serviceData[6].button} />

        </div>
    )
}

export default Emergency;