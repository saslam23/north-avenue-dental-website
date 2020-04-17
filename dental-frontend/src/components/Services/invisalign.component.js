import React from "react";
import { serviceData } from "../../data";
import { AlignLeft, AlignRight } from "./ServiceInfo.component";


const Invisalign = () => {
    return (
        <div className="service-pages" id="invisalign">
            <div>
                <img className="service-banner" src={process.env.PUBLIC_URL + "/assets/invisalign-banner.jpg"} alt="invisalign" />
                <h1 data-aos="fade-right" data-aos-duration="2000" className="banner-sm-left">Invisalign</h1>
                <h1 data-aos="fade-right" data-aos-duration="2700" className="banner-text-xs">Clear removable braces</h1>
            </div>

            <AlignLeft key={serviceData[7].id} header={serviceData[7].header} description1={serviceData[7].description1} list={serviceData[7].list} image={serviceData[7].image} />
            <AlignRight key={serviceData[8].id} header={serviceData[8].header} description1={serviceData[8].description1} list={serviceData[8].list} image={serviceData[8].image} />
            <div>
                <div style={{ textAlign: "center" }} className="col-md-12">
                    <h2 style={{ marginTop: "2rem" }}>How Does Invisalign Work?</h2>
                    <p style={{ lineHeight: "3rem", textAlign: "center" }}>
                        Aligners are appropriate for teens and adults.
                        Your dentist will evaluate your mouth and determine if you or your child is a candidate for Invisalign.
                        Your dentist will take records and forward them to the lab for fabrication.
                        Your dentist will deliver a series of custom made trays made just for you.
                        You will wear the aligners for 1 - 2 weeks and replace the trays with a new set of aligners.
                        You will visit our office 1 - 2 times each month during your treatment.
         </p>
                </div>
            </div>
        </div>
    )
}

export default Invisalign;