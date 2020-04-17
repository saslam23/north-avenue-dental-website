import React, { Component } from "react";
import ServicesFirst from "./reusable-components/ServicesFirst.component";
import AdditionalServices from "./reusable-components/AdditionalServices.component";
import { servicesHome, services } from "../data";
import axios from "axios";



function Services(service) {
    return (
        <ServicesFirst
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
        />
    )
}

function addServices(service) {
    return (
        <AdditionalServices
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
        />
    )
}

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            subject: '',
            message: ''
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeSubject(e) {
        this.setState({
            subject: e.target.value
        })
    }

    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        const messageForm = {
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }

        axios.post("/email", messageForm)
            .then((res) => {
                if (res.data === "Email has been sent!") {
                    window.location = "/success";
                } else if (res.data === "Internal Error") {
                    window.location = "/fail";
                }
            })


    }


    render() {
        return (
            <div className="home">
                <div data-aos="fade-down" data-aos-duration="1000" className="home">
                    <img className="banner" src={process.env.PUBLIC_URL + "/assets/office Cropped.jpg"} alt="banner_image" />

                    <div data-aos="fade-right" className="email-form ">
                        <form onSubmit={this.onSubmit}>
                            <div >
                                <label>E-mail address</label>
                                <br></br>
                                <input value={this.state.email} onChange={this.onChangeEmail} style={{ width: "350px" }} id="email" type="email" className="form-control-md" />
                            </div>
                            <div>
                                <label>Subject</label>
                                <br></br>
                                <input value={this.state.subject} onChange={this.onChangeSubject} style={{ width: "350px" }} id="phone" className="form-control-md" />
                            </div>
                            <div>
                                <label>Message</label>
                                <br></br>
                                <textarea value={this.state.message} onChange={this.onChangeMessage} style={{ display: "flexbox", width: "350px", height: "275px" }} className="form-control-md textArea" id="message" placeholder="Type your message here" rows="5"></textarea>
                            </div>
                            <button style={{ width: "125px", height: "50px" }} type="submit" className="btn button">Send</button>

                        </form>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="home-banner-text">
                        <h1 >North Ave Dental Associates</h1>
                        <h2 style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>Call (630) 231-4500 or Email Us!</h2>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className="services-home outer-picture container-fluid ">
                    <h1 style={{ marginTop: "2rem" }}> OUR SERVICES </h1>
                    <div className="service-pictures">
                        {services.map(Services)}
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className="about-home">
                    <div className="container">
                        <h1 style={{ paddingTop: "2rem" }}>About Us</h1>
                        <p style={{ fontSize: "18pt" }}>North Ave Dental Associates in West Chicago has been serving the communities of West Chicago and Bartlett for more than six years. We have a talented team of dentists that provide a full array of dental services.</p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className="additional-services-home">
                    <div className="container-md">
                        <h1 style={{ paddingTop: "2rem" }}>Additional Dental Services</h1>
                        <p style={{ paddingLeft: "5rem", paddingTop: "1rem", fontSize: "14pt" }}>Invisalign, sedation, TMJ treatments and more…..</p>
                        <div style={{ marginLeft: "1rem" }} className="container-fluid row row-cols-md-2 row-cols-sm-1 ">
                            {servicesHome.map(addServices)}
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className="get-in-touch-home">
                    <h1 style={{ paddingTop: "2rem" }}>Get in Touch</h1>
                    <div className="container mt-5">
                        <h5>WE ARE ACCEPTING NEW PATIENTS</h5>
                        <p style={{ textAlign: "left", paddingTop: "10px" }}>
                            North Ave Dental Associates see patients of all ages. We accept patients with and without dental insurance. We pride oruselves
                            on being affordable with several payment options so you can get the dentistry you need and want.
                        </p>
                    </div>
                    <div className="container mt-5">
                        <h5>North Ave Dental Associates</h5>
                        <div className="col-6 row">
                            <img style={{ border: "none" }} className="icons" src={process.env.PUBLIC_URL + "/assets/address-icon.png"} alt="address" />
                            <p style={{ textAlign: "left", padding: "5px 0px 0px 5px" }}>
                                1933 Franciscan Parkway<br></br>
                            West Chicago, IL 60185 <br></br>
                            United States
                        </p>
                        </div>
                        <div className="col-6 row">
                            <img style={{ border: "none" }} className="icons" src={process.env.PUBLIC_URL + "/assets/phone-icon.png"} alt="phone" />
                            <p style={{ textAlign: "left", padding: "5px 0px 0px 5px" }}>
                                (630) 231-4500
                        </p>
                        </div>
                        <div className="col-6 row">
                            <img style={{ border: "none" }} className="icons" src={process.env.PUBLIC_URL + "/assets/email-icon.png"} alt="email" />
                            <p style={{ textAlign: "left", padding: "5px 0px 0px 5px" }}>
                                NorthAveDental@yahoo.com
                        </p>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}