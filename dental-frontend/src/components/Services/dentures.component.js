import React from "react";
import { serviceData } from "../../data";
import { AlignLeft, AlignRightButton } from "./ServiceInfo.component";


const Dentures = () => {
    return (
        <div className="service-pages" id="dentures">
            <div>
                <img className="service-banner " src={process.env.PUBLIC_URL + "/assets/old-people.jpg"} alt="dentures" />
                <h1 data-aos="fade-right" data-aos-duration="2000" className="banner-sm-left">Dentures</h1>
                <h1 data-aos="fade-right" data-aos-duration="2700" className="banner-text-xs" >We will help you smile again!</h1>
            </div>
            <AlignLeft key={serviceData[9].id} header={serviceData[9].header} description1={serviceData[9].description1} list={serviceData[9].list} image={serviceData[9].image} />
            <AlignRightButton key={serviceData[10].id} header={serviceData[10].header} description1={serviceData[10].description1} list={serviceData[10].list} image={serviceData[10].image} button={serviceData[10].button} />

        </div>
    )
}

export default Dentures;