import React from "react";
import { serviceData } from "../../data";
import { AlignLeft, AlignRight } from "./ServiceInfo.component";


const Preventative = () => {
    return (
        <div id="preventative">
            <div data-aos="fade-down" data-aos-duration="2000">
                <img style={{ filter: "brightness(75%)" }} className="service-banner " src={process.env.PUBLIC_URL + "/assets/preventative-banner.jpg"} alt="preventative_banner" />
                <h1 className="banner-lg-left">Preventative Dentistry</h1>
                <h1 className="banner-text-xs-preventative">School exams, Dental Examinations, Digital X-Rays & Dental Cleanings</h1>
            </div>

            <AlignLeft key={serviceData[0].id} header={serviceData[0].header} description1={serviceData[0].description1} list={serviceData[0].list} image={serviceData[0].image} />
            <AlignRight key={serviceData[1].id} header={serviceData[1].header} description1={serviceData[1].description1} list={serviceData[1].list} image={serviceData[1].image} />
            <AlignLeft key={serviceData[2].id} header={serviceData[2].header} description1={serviceData[2].description1} list={serviceData[2].list} image={serviceData[2].image} />
            <AlignRight key={serviceData[3].id} header={serviceData[3].header} description1={serviceData[3].description1} description2={serviceData[3].description2} list={serviceData[3].list} image={serviceData[3].image} />
            <AlignLeft key={serviceData[4].id} header={serviceData[4].header} description1={serviceData[4].description1} list={serviceData[4].list} image={serviceData[4].image} />
        </div>
    )
}

export default Preventative;