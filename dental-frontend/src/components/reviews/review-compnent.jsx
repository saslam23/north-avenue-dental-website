import React from "react";
import { ReviewsImage } from "../reusable-components/Images";

const ReviewInfo = (props) => {
    return (
        <div>
            <div className="small-rectangle">
                <div style={{ padding: "15px 0px 0px 10px" }}>
                    <p style={{ color: "black", fontWeight: "bold", textAlign: "left", fontSize: "12pt" }}>"{props.description}"</p>
                    <h6 style={{ color: "grey" }}>{props.name}</h6>
                    <h6 style={{ fontSize: "9pt", color: "grey" }}>{props.date}</h6>
                    <div><ReviewsImage image={props.image} /></div>
                </div>
            </div>

        </div>
    )
}

export default ReviewInfo;