import React from "react";

const NotFound = () => {
    return (
        <div >
            <div style={{ backgroundColor: "#098a83" }} className="jumbotron">
                <h1 className="display-4">OOPS! That page cannot be found...</h1>
                <hr className="my-4" />
                <a style={{ width: "175px", height: "55px" }} className="btn button btn-lg" href="/" role="button">Back to Home</a>
            </div>
        </div>
    )
}

export default NotFound;