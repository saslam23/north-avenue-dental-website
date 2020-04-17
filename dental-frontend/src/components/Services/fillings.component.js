import React from "react";
import { serviceData } from "../../data";
import { AlignLeft, AlignRight } from "./ServiceInfo.component";


const Fillings = () => {
    return (
        <div className="service-pages" id="fillings">
            <div>
                <img className="service-banner" src={process.env.PUBLIC_URL + "/assets/fillings-banner.jpg"} alt="fillings" />
                <h1 data-aos="fade-right" data-aos-duration="2000" className="banner-text-fillings">Fillings & <br /> Crowns</h1>
            </div>
            <AlignLeft key={serviceData[22].id} header={serviceData[22].header} header2={serviceData[22].header2} header3={serviceData[22].header3} description1={serviceData[22].description1} description2={serviceData[22].description2} description3={serviceData[22].description3} description4={serviceData[22].description4} list={serviceData[22].list} image={serviceData[22].image} />
            <AlignRight key={serviceData[23].id} header={serviceData[23].header} description1={serviceData[23].description1} description2={serviceData[23].description2} list={serviceData[23].list} image={serviceData[23].image} />
            <AlignLeft key={serviceData[24].id} header={serviceData[24].header} description1={serviceData[24].description1} description2={serviceData[24].description2} list={serviceData[24].list} image={serviceData[24].image} />
            <AlignRight key={serviceData[25].id} header={serviceData[25].header} description1={serviceData[25].description1} list={serviceData[25].list} image={serviceData[25].image} />
            <AlignLeft key={serviceData[26].id} header={serviceData[26].header} description1={serviceData[26].description1} list={serviceData[26].list} image={serviceData[26].image} />



        </div>
    )
}

export default Fillings;