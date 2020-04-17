import React from "react";
import { Link } from "react-scroll";

const ServiceNavComponent = (props) => {
    return (
        <div className="navbar-nav">
            <li className="nav-item">
                <Link activeClass="active"
                    className="nav-link"
                    to={props.class}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-100}
                    duration={1000}
                > {props.title} </Link>
            </li>
        </div>
    )
}

export default ServiceNavComponent;