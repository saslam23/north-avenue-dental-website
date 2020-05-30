import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img style={{ border: "none" }} className="dental-logo" src={process.env.PUBLIC_URL + "/assets/dental-logo.png"} alt="northavedentallogo" />
                </a>

                <p className="navbar-info">
                    Call: (630) 231-4500<br></br>
                        Email: NorthAveDental@yahoo.com
                    </p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/office">Our Office</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/services" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                Services
                                </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/doctors" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                Our Dentists
                                </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/patients">New patients</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/reviews">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/gallery">Gallery</a>
                        </li>


                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;