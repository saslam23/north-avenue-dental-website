import React from "react";
import { Image } from "./Images"

const AdditionalServices = (props) => {
    return (
        <div style={{ paddingLeft: "1rem" }}>
            <div style={{ marginBottom: "2rem" }} className="rectangle container-fluid row ">
                <div className="col-md-3 col-sm-12 text-center" style={{ marginTop: "1rem" }}><Image image={props.image} alt="whitening" /></div>
                <div className="col-md-9 col-sm-10 ">
                    <div className="text-center text-sm-left px-2" style={{ color: "black", fontSize: "13pt" }}>
                        <p className="additional-service-title">{props.title} <br></br></p>
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalServices