import React from "react";
import { serviceData } from "../../data";
import { AlignLeft, AlignRight } from "./ServiceInfo.component";


const Implants = () => {
    return (
        <div className="service-pages" id="implants">
            <div>
                <img className="service-banner" src={process.env.PUBLIC_URL + "/assets/implant-banner.jpg"} alt="implants" />
                <h1 data-aos="fade-right" data-aos-duration="2000" className="banner-sm-left">Implants</h1>
                <h1 data-aos="fade-right" data-aos-duration="2700" className="banner-text-other">Offering the highest standard of care</h1>
            </div>
            <AlignLeft key={serviceData[18].id} header={serviceData[18].header} description1={serviceData[18].description1} description2={serviceData[18].description2} list={serviceData[18].list} image={serviceData[18].image} />
            <AlignRight key={serviceData[19].id} header={serviceData[19].header} description1={serviceData[19].description1} description2={serviceData[19].description2} list={serviceData[19].list} image={serviceData[19].image} />
            <AlignLeft key={serviceData[20].id} header={serviceData[20].header} description1={serviceData[20].description1} list={serviceData[20].list} image={serviceData[20].image} />
            <AlignRight key={serviceData[21].id} header={serviceData[21].header} description1={serviceData[21].description1} description2={serviceData[21].description2} description3={serviceData[21].description3} list={serviceData[21].list} image={serviceData[21].image} />

        </div>
    )
}

export default Implants;