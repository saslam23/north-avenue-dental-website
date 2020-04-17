import React, { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Salman from "./salman.component";
import Monim from "./monim.component";
import Abasin from "./abasin.component";

const Doctors = () => {
    useEffect(() => {
        document.title = "Our Dentists-West Chicago Dentist-North Ave Dental Associates"
    })
    return (
        <div id="doctors">
            <div data-aos="fade-down" data-aos-duration="1000">
                <img className="banner" src={process.env.PUBLIC_URL + "/assets/dentist-banner.jpg"} alt="dentist_banner" />
                <div >
                    <h1 className="banner-text">Our Dentists</h1>

                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className="container doctors">
                <h1 style={{ textAlign: "left" }}>Who We Are</h1>
                <p style={{ marginTop: "1rem", textAlign: "left", fontSize: "14pt", color: "#242323" }}>
                    North Ave Dental Associates has three compassionate and skilled dentists who provide the most up to date dental services available.  Our DuPage dentists are “In Network” with most Dental PPO insurance plans. Our dental office is located at Rt 59 and North Ave in West Chicago.  Read the biographies of each of our West Chicago dentists.
                </p>
                <div style={{ color: "white" }}>
                    <h4>Learn about our Dentists</h4>
                    <div style={{ fontSize: "14pt" }}>
                        <Link className="nav-link linkStyle" to="/doctors/dr-monim-albazzaz">Dr. Albassaz</Link><br></br>
                        <Link className="nav-link linkStyle" to="/doctors/dr-salman-javed">Dr. Javed</Link><br></br>
                        <Link className="nav-link linkStyle" to="/doctors/dr-abasin-safi">Dr. Safi</Link>
                    </div>
                </div>
                <br></br>
                <br></br>
                <Route path="/doctors/dr-monim-albazzaz" component={Monim} />
                <Route path="/doctors/dr-salman-javed" component={Salman} />
                <Route path="/doctors/dr-abasin-safi" component={Abasin} />
            </div>
        </div >
    )
}


export default Doctors;