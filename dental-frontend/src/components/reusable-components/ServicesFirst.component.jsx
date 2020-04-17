import React from "react";
import { ServiceImage } from "./Images";

const ServicesFirst = (props) => {
    return (
        <div>
            <div className="image-spacer">
                <ServiceImage image={props.image} />
                <h5 style={{ marginLeft: ".5rem" }}>{props.title}</h5>
                <p style={{ width: "290px" }}>{props.description}</p>

            </div>
        </div>
    )
}

export default ServicesFirst;