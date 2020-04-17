import React from "react";
import ServiceNavComponent from "./ServiceNav.component";
import { serviceNav } from "../../data";

const servicesData = (navName) => {
    return (
        <ServiceNavComponent
            key={navName.id}
            class={navName.class}
            title={navName.title}
        />
    )


}



const ServiceNavbar = () => {
    return (
        <div className="sticky-sidebar " data-aos="fade-right" id="sidebar" >
            <nav className="navbar nav sticky-top ">
                <div id="navbarSupportedContent">
                    <ul  >
                        {serviceNav.map(servicesData)}
                    </ul>
                </div>
            </nav>
        </div>
    )

}

export default ServiceNavbar;