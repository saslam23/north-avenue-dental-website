import React from "react";
import DoctorInfo from "./DoctorInfo";
import { doctorInfo } from "../../data";

const Abasin = () => {
    return (
        <div style={{ marginBottom: "3rem" }} data-aos="fade-up" data-aos-duration="1500" id="dr-abasin-safi">
            <DoctorInfo
                title={doctorInfo[2].title}
                image={doctorInfo[2].image}
                description1={doctorInfo[2].description1}
                list={doctorInfo[2].list}
                description2={doctorInfo[2].description2}
                description3={doctorInfo[2].description3}
                description4={doctorInfo[2].description4}
                description5={doctorInfo[2].description5}
            />
        </div>
    )
}


export default Abasin;