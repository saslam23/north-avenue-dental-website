import React from "react";

const Image = (props) => {
    return <img style={{ border: "none" }} className="additional-picture" src={props.image} alt="image_source" />
}

const ServiceImage = (props) => {
    return <img style={{ border: "none" }} className="picture" src={props.image} alt="service_image" />
}

const ReviewsImage = (props) => {
    return <img style={{ border: "none" }} className="review-image" src={props.image} alt="reviews_image" />
}
export { Image, ServiceImage, ReviewsImage };