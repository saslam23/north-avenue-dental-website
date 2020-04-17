import React from "react";
import ServiceNavbar from "./Services/serviceNavbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ServiceComponents from "./Services/serviceComponents";
import Navbar from "./navbar.component";



const Main = () => {
    return (
        <div className="services main-wrapper container-fluid">
            <div className="row">
                <ServiceNavbar />
                <ServiceComponents />
            </div>

        </div>
    )
}

const Services = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Route exact path="/services" component={Main} />

            </Router>
        </div>
    )
}

export default Services;