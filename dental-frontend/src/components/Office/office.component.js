import React, { useEffect } from "react";
import { officeData } from "../../data";
import { AlignLeft, AlignRight, AlignLeftButton, AlignRightButton } from "./officeInfo.component";

const Office = () => {
    useEffect(() => {
        document.title = "Our Office-West Chicago Dentist-North Ave Dental Associates"
    })


    return (
        <div id="office">
            <div data-aos="fade-down" data-aos-duration="1000" className="home ">
                <img className="banner" src={process.env.PUBLIC_URL + "/assets/office Cropped.jpg"} alt="banner_image" />
                <h1 className="banner-text">Our West Chicago Dental Office</h1>
                <h1 className="banner-sm-text">Comfort, Convenience, Affordability</h1>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" >
                <AlignLeftButton key={officeData[0].id} header={officeData[0].header} description1={officeData[0].description1} button={officeData[0].button} image={officeData[0].image} />
                <AlignRightButton key={officeData[1].id} header={officeData[1].header} description1={officeData[1].description1} button={officeData[1].button} image={officeData[1].image} />
                <AlignLeft key={officeData[2].id} header={officeData[2].header} description1={officeData[2].description1} button={officeData[2].button} image={officeData[2].image} />
                <AlignRight key={officeData[3].id} header={officeData[3].header} description1={officeData[3].description1} description2={officeData[3].description2} description3={officeData[3].description3} description4={officeData[3].description4} button={officeData[3].button} image={officeData[3].image} />
            </div>

        </div>

    )
}


export default Office;