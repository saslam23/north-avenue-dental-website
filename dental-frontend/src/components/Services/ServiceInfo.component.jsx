import React from "react";

const AlignLeft = (props) => {
    return (
        <div>
            <div className="container-fluid row">
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <h2 style={{ textAlign: "left", marginTop: "2rem" }}>{props.header}</h2>

                    <p style={{ textAlign: "left" }}>{props.description1}</p>
                    <p style={{ textAlign: "left" }}>{props.description2}</p>
                    <h4 style={{ color: "white" }}><u><strong>{props.header2}</strong></u></h4>
                    <p style={{ textAlign: "left" }}>{props.description3}</p>
                    <h4 style={{ color: "white" }}><u><strong>{props.header3}</strong></u></h4>
                    <p style={{ textAlign: "left" }}>{props.description4}</p>
                    <ul style={{ color: "white" }}>
                        {props.list.map((item) =>
                            <li key={item}>{item}</li>)}
                    </ul>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <img style={{ height: "230px", width: "380px", marginTop: "3rem", marginBottom: "2rem" }} src={props.image} alt="service_image" />
                </div>
            </div>
        </div>


    )
}

const AlignRight = (props) => {
    return (
        <div>
            <div className="dark-background">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <img style={{ height: "230px", width: "380px", marginTop: "3rem", marginBottom: "2rem" }} src={props.image} alt="service_image" />
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <h2 style={{ textAlign: "right" }}>{props.header}</h2>
                            <p style={{ marginRight: "-3rem", textAlign: "right" }}>{props.description1}</p>
                            <p style={{ marginRight: "-3rem", textAlign: "right" }}>{props.description2}</p>
                            <p style={{ marginRight: "-3rem", textAlign: "right" }}>{props.description3}</p>
                            <p style={{ marginRight: "-3rem", textAlign: "right" }}>{props.description4}</p>
                            <ul style={{ color: "white", overflow: "auto" }}>
                                {props.list.map((item) =>
                                    <li key={item} >{item}</li>)}
                            </ul>
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
            <div className="dark-background">
                <div className="container-fluid row">
                    <div className="row row-cols-md-1 row-cols-md-2 ">
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <img style={{ height: "230px", width: "380px", marginTop: "3rem", marginBottom: "2rem" }} src={props.image} alt="service_image" />
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <h2 style={{ textAlign: "right" }}>{props.header}</h2>
                            <p style={{ marginRight: "-3rem", textAlign: "right" }}>{props.description1}</p>
                            <p style={{ marginRight: "-3rem", textAlign: "right" }}>{props.description2}</p>
                            <p style={{ marginRight: "-3rem", textAlign: "right" }}>{props.description3}</p>
                            <p style={{ marginRight: "-3rem", textAlign: "right" }}>{props.description4}</p>
                            <ul style={{ color: "white", overflow: "auto" }}>
                                {props.list.map((item) =>
                                    <li key={item}>{item}</li>)}
                            </ul>
                            <form action="/contact" method="get">
                                <div style={{ marginTop: "1rem", marginBottom: "1rem", textAlign: "right" }}><button type="submit" className="button">{props.button}</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { AlignLeft, AlignRight, AlignRightButton }