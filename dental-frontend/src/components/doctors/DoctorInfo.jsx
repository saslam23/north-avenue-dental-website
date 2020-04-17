import React from "react";


const DoctorInfo = (props) => {
    return (
        <div>
            <div className="home">
                <h1>{props.title}</h1>
                <br></br>
                <h4 style={{ color: "white", textAlign: "center", marginBottom: "2rem" }}>West Chicago Dentist</h4>
                <div className="container row">
                    <div className="col-md-6">
                        <img className="doctors-images" src={props.image} alt="pic" />
                    </div>
                    <div className="col-md-6">
                        <p className="left-aligner">{props.description1}</p>
                        <ul style={{ color: "white", fontSize: "14pt" }}>
                            {props.list.map((item) =>
                                <li key={item}>{item}</li>)}
                        </ul>
                        <p className="left-aligner">{props.description2}</p>
                        <p className="left-aligner">{props.description3}</p>
                        <p className="left-aligner">{props.description4}</p>
                        <p className="left-aligner">{props.description5}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DoctorInfo;