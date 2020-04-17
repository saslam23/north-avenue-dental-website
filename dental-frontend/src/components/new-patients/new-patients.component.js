import React, { useEffect } from "react";
import { AlignLeft, AlignRight, AlignLeftButton } from "./patientInfo.component";
import { patientLeft, patientRight } from "../../data";



const Patients = () => {
    useEffect(() => {
        document.title = "New Patients-West Chicago Dentist-North Ave Dental Associates"
    })
    return (
        <div className="patients">
            <div data-aos="fade-down" data-aos-duration="1000" className="home">
                <img className="banner" src={process.env.PUBLIC_URL + "/assets/new-patient-banner.jpg"} alt="banner_image" />
                <h1 className="banner-text">Welcome New Patients!</h1>
                <h1 className="banner-sm-text">Use our dental coupons</h1>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
                <AlignLeft key={patientLeft[0].id} header={patientLeft[0].header} description1={patientLeft[0].description1} list={patientLeft[0].list} image={patientLeft[0].image} image2={patientLeft[0].image2} />
                <AlignRight key={patientRight.id} header={patientRight[0].header} description1={patientRight[0].description1} description2={patientRight[0].description2} image={patientRight[0].image} />
                <AlignLeftButton key={patientLeft[1].id} header={patientLeft[1].header} description1={patientLeft[1].description1} list={patientLeft[1].list} image={patientLeft[1].image} />
            </div>


        </div>
    )

}

export default Patients;