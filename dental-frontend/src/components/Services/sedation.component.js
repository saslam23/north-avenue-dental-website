import React from "react";
import { serviceData } from "../../data";
import { AlignLeft, AlignRight } from "./ServiceInfo.component";


const Sedation = () => {
    return (
        <div className="service-pages" id="sedation">
            <div>
                <img className="service-banner" src={process.env.PUBLIC_URL + "/assets/sedation-banner.jpg"} alt="sedation" />
                <h1 data-aos="fade-right" data-aos-duration="2000" className="banner-sm-left">Sedation</h1>
                <h1 data-aos="fade-right" data-aos-duration="2700" className="banner-text-other">Experience an anxiety free dental visit</h1>
            </div>
            <AlignLeft key={serviceData[13].id} header={serviceData[13].header} description1={serviceData[13].description1} description2={serviceData[13].description2} description3={serviceData[13].description3} list={serviceData[13].list} image={serviceData[13].image} />
            <AlignRight key={serviceData[14].id} header={serviceData[14].header} description1={serviceData[14].description1} list={serviceData[14].list} image={serviceData[14].image} />
            <AlignLeft key={serviceData[15].id} header={serviceData[15].header} description1={serviceData[15].description1} description2={serviceData[15].description2} description3={serviceData[15].description3} list={serviceData[15].list} image={serviceData[15].image} />
        </div>
    )
}

export default Sedation;