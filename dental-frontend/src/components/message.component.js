import React from "react";

const Success = () => {
    return (
        <div >
            <div style={{ backgroundColor: "#098a83" }} className="jumbotron">
                <h1 className="display-4">Your Message has been sent!</h1>
                <p style={{ color: "white" }} className="lead">Please give up to 24 hours for a response back.  Thank you!</p>
                <hr className="my-4" />
                <a style={{ width: "175px", height: "55px" }} className="btn button btn-lg" href="/" role="button">Back to Home</a>
            </div>
        </div>
    )
}


export default Success;