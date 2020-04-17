import React from "react";
import { hours } from "../../data";

function renderHour(hour) {
    return (
        <tr key={hour.id}>
            <td>{hour.day}</td>
            <td>{hour.time}</td>
        </tr>
    )
}

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-6 mt-md-0 mt-3">
                        <img className="img-fluid" style={{ border: "none", height: "500px" }} src={process.env.PUBLIC_URL + "/assets/footer-insurance.jpg"} alt="footer_image" />
                    </div>

                    <div className="col-md-4 col-sm-6 mt-5 mb-md-0 mb-3">
                        <p>North Ave Dental Assoc.</p>
                        <p>1933 Franciscan Way</p>
                        <p>West Chicago, IL 60185</p>
                        <p>(630) 231-4500</p>
                    </div>
                    <div className="col-md-4 col-sm-6 mt-5">
                        <h1 style={{ textAlign: "left", fontSize: "20pt" }}>Office Hours</h1>
                        <table style={{ color: "white" }} className="table table-bordered table-responsive{-sm}">
                            <thead>
                                <tr>
                                    <th scope="col">Day</th>
                                    <th scope="col">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hours.map(renderHour)}
                            </tbody>
                        </table>
                    </div>

                </div>
                <div style={{ textAlign: 'center' }}>
                    <a href="https://www.facebook.com/NorthAveDental/"><img className="footer-image" alt="facebook" src={process.env.PUBLIC_URL + "/assets/fb-logo.png"} /></a>
                    <a href="https://www.google.com/maps/place/North+Avenue+Dental+Associates/@41.9169124,-88.2118312,17z/data=!3m1!4b1!4m5!3m4!1s0x880f01cc5adc9f7b:0x79ee25d54f4272ee!8m2!3d41.9169124!4d-88.2096372?shorturl=1"><img style={{ width: "46px", height: "46px" }} className="footer-image" alt="instagram" src={process.env.PUBLIC_URL + "/assets/google-logo.png"} /></a>
                </div>
                <br></br>
            </div>
            <div style={{ textAlign: "center", color: "white", backgroundColor: "#2c2a2a" }} className="copywright">
                <p> Copyright &copy; {(new Date().getFullYear())} West Chicago Dentists- North Ave Dental Associates </p>
            </div>
        </footer>
    )
}

export default Footer;
