import React from "react";
import { serviceData } from "../../data";
import { AlignLeft, AlignRight } from "./ServiceInfo.component";


const Restorative = () => {
    return (
        <div className="service-pages" id="restorative">
            <div>
                <img className="service-banner" src={process.env.PUBLIC_URL + "/assets/restorative-banner.jpg"} alt="service" />
                <h1 data-aos="fade-right" data-aos-duration="2000" className="banner-sm-left">Restorative <br></br>Dentistry</h1>
            </div>
            <AlignLeft key={serviceData[16].id} header={serviceData[16].header} description1={serviceData[16].description1} list={serviceData[16].list} image={serviceData[16].image} />
            <AlignRight key={serviceData[17].id} header={serviceData[17].header} description1={serviceData[17].description1} list={serviceData[17].list} image={serviceData[17].image} />

        </div>
    )
}

export default Restorative;