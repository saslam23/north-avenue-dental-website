import React, { useEffect } from "react";
import ReviewInfo from "./review-compnent";
import { reviewInfo } from "../../data";

function reviewPiece(review) {
    return (


        <ReviewInfo
            key={review.id}
            description={review.description}
            name={review.name}
            date={review.date}
            image={review.image}
        />
    )

}

const Reviews = () => {
    useEffect(() => {
        document.title = "Reviews-West Chicago Dentist-North Ave Dental Associates"
    })
    return (

        <div >
            <div data-aos="fade-down" data-aos-duration="1000" className="home">
                <img className="banner" src={process.env.PUBLIC_URL + "/assets/review-banner.jpg"} alt="banner_image" />
                <h1 className="banner-text">Patient Reviews</h1>

            </div>
            <h1 style={{ borderBottom: "1px solid #ffffff", paddingBottom: "3px" }}>Read our 5-star Reviews</h1>
            <br></br>
            <div data-aos="fade-up" data-aos-duration="2000" className="container-fluid row row-cols-md-3 row-cols-sm-1 mb-3">
                {reviewInfo.map(reviewPiece)}
            </div>

        </div>
    )
}

export default Reviews;