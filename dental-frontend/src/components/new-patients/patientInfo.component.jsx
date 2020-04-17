import React from "react";


const AlignLeft = (props) => {
    return (
        <div>
            <div style={{ paddingTop: "3rem" }} className="office-comfort container">
                <div className="office-comfort-main row">
                    <div className="col-lg-8">
                        <h2 style={{ textAlign: "left" }}>{props.header}</h2>
                        <p style={{ textAlign: "left" }}>{props.description1}</p>
                        <ul style={{ color: "white", fontSize: "14pt" }}>
                            {props.list.map((item) =>
                                <li key={item}>{item}</li>
                            )}
                        </ul>
                        <img style={{ height: "230px", width: "380px" }} src={props.image} alt="new_patient_image" />
                    </div>
                    <div className="col-lg-4">
                        <img style={{ height: "350px", width: "300px", marginTop: "3rem", marginBottom: "2rem" }} src={props.image2} alt="quip" />
                    </div>
                </div>

            </div>
        </div >
    )

}

const AlignLeftButton = (props) => {
    return (
        <div>
            <div className="office-comfort container">
                <div className="office-comfort-main row">
                    <div className="col-lg-8">
                        <h2 style={{ textAlign: "left" }}>{props.header}</h2>
                        <p style={{ textAlign: "left", flexWrap: "wrap" }}>{props.description1}</p>
                        <ul style={{ color: "white", fontSize: "14pt" }}>
                            {props.list.map((item) =>
                                <li key={item}>{item}</li>
                            )}
                        </ul>
                        <form action="https://northavedental.net/wp-content/uploads/2018/07/Forms-Website-NorthAveDental.pdf" method="get">
                            <div style={{ marginBottom: "2rem" }}>
                                <button type="submit" className="button"> <strong>>></strong> Download Your New Patient Forms Now</button>
                            </div>
                        </form>

                    </div>
                    <div className="col-lg-4">
                        <img style={{ height: "250px", width: "380px", marginTop: "3rem" }} src={props.image} alt="new_patient" />
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
                    <div className="office-comfort-main row">
                        <div className="col-lg-4">
                            <img style={{ height: "230px", width: "380px", marginTop: "3rem" }} src={props.image} alt="new_patient" />
                        </div>
                        <div style={{ marginTop: "2rem" }} className="col-lg-8">
                            <h2 style={{ textAlign: "right" }}>{props.header}</h2>
                            <p style={{ textAlign: "right" }}>
                                {props.description1}
                            </p>
                            <p style={{ textAlign: "right" }}>
                                {props.description2}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { AlignLeft, AlignRight, AlignLeftButton };