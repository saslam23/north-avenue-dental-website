import React from "react";
import { serviceData } from "../../data";
import { AlignLeft, AlignRight } from "./ServiceInfo.component";


const Extractions = () => {
    return (
        <div className="service-pages" id="extractions">
            <div>
                <img className="service-banner" src={process.env.PUBLIC_URL + "/assets/extractions.jpg"} alt="extractions" />
                <h1 data-aos="fade-right" data-aos-duration="2000" className="banner-sm-left">Extractions</h1>
            </div>
            <AlignLeft key={serviceData[11].id} header={serviceData[11].header} description1={serviceData[11].description1} list={serviceData[11].list} image={serviceData[11].image} />
            <AlignRight key={serviceData[12].id} header={serviceData[12].header} description1={serviceData[12].description1} list={serviceData[12].list} image={serviceData[12].image} />
            <div>
                <h1 style={{ marginBottom: "3rem" }}>What Happens During Dental Surgery?</h1>
                <div className="text-center"><iframe title="extraction" width="850" height="500" src="https://www.youtube.com/embed/brW4tsxxJEQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            </div>
        </div >
    )
}

export default Extractions;