import React from "react";
import DoctorInfo from "./DoctorInfo";
import { doctorInfo } from "../../data";

const Salman = () => {
    return (
        <div style={{ marginBottom: "30rem" }} data-aos="fade-up" data-aos-duration="1500" id="dr-salman-javed">
            <DoctorInfo
                title={doctorInfo[1].title}
                image={doctorInfo[1].image}
                description1={doctorInfo[1].description1}
                list={doctorInfo[1].list}
                description2={doctorInfo[1].description2}
                description3={doctorInfo[1].description3}
                description4={doctorInfo[1].description4}
                description5={doctorInfo[1].description5}

            />

        </div>
    )
}


export default Salman;