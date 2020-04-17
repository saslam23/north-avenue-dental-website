import React from "react";


const AlignLeft = (props) => {
    return (
        <div>
            <div className="office-comfort container mt-5">
                <div className="row">
                    <div className="col-lg-8">
                        <h2>{props.header}</h2>
                        <p style={{ textAlign: "left" }}>{props.description1}</p>
                    </div>
                    <div style={{ marginBottom: "2rem" }} className="col-lg-4">
                        <img style={{ height: "230px", width: "380px" }} src={props.image} alt="pic" />
                    </div>
                </div>

            </div>
        </div>
    )

}

const AlignLeftButton = (props) => {
    return (
        <div>
            <div className="office-comfort container mt-5">
                <div className="row">
                    <div className="col-lg-8">
                        <h2>{props.header}</h2>
                        <p style={{ textAlign: "left" }}>{props.description1}</p>
                        <form action="/services/#sedation" method="get">
                            <div style={{ marginBottom: "2rem" }}><button to="/services" className="button"> {props.button}</button></div>
                        </form>
                    </div>
                    <div style={{ marginBottom: "2rem" }} className="col-lg-4 ">
                        <img style={{ height: "230px", width: "380px" }} src={props.image} alt="pic" />
                    </div>
                </div>

            </div>
        </div>
    )

}

const AlignRight = (props) => {
    return (
        <div>
            <div className="office-convenience">
                <div className="office-comfort container">
                    <div className="row">
                        <div className="col-lg-4">
                            <img style={{ height: "430px", width: "330px", marginTop: "3rem" }} src={props.image} alt="pic" />
                        </div>
                        <div style={{ marginTop: "2rem" }} className="col-lg-8 text-right">
                            <h2>{props.header}</h2>
                            <div>
                                <p style={{ textAlign: "right" }}>
                                    {props.description1}
                                </p>
                                <p style={{ textAlign: "right" }}>
                                    {props.description2}
                                </p>
                                <p style={{ textAlign: "right" }}>
                                    {props.description3}
                                </p>
                                <p style={{ textAlign: "right" }}>
                                    {props.description4}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AlignRightButton = (props) => {
    return (
        <div>
            <div className="office-convenience">
                <div className="office-comfort container">
                    <div className="row">
                        <div className="col-lg-5">
                            <img style={{ height: "230px", width: "380px", marginTop: "3rem" }} src={props.image} alt="pic" />
                        </div>
                        <div style={{ marginTop: "2rem" }} className="col-lg-7 text-right">
                            <h2>{props.header}</h2>
                            <p style={{ textAlign: "right" }}>
                                {props.description1}
                            </p>
                            <p style={{ textAlign: "right" }}>
                                {props.description2}
                            </p>
                            <form action="/contact" method="get">
                                <div style={{ marginBottom: "2rem" }}><button to="#" className="button"> {props.button}</button></div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { AlignLeft, AlignRight, AlignLeftButton, AlignRightButton };