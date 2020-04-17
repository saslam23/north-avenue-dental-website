import React from "react";
import DoctorInfo from "./DoctorInfo";
import { doctorInfo } from "../../data";

const Monim = () => {
    return (
        <div style={{ marginBottom: "10rem" }} data-aos="fade-up" data-aos-duration="1500" id="dr-monim-albassaz">
            <DoctorInfo
                title={doctorInfo[0].title}
                image={doctorInfo[0].image}
                description1={doctorInfo[0].description1}
                list={doctorInfo[0].list}
                description2={doctorInfo[0].description2}
                description3={doctorInfo[0].description3}
                description4={doctorInfo[0].description4}
                description5={doctorInfo[0].description5}
            />

        </div>
    )
}


export default Monim;