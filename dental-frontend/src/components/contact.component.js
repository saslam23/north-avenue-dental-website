import React, { Component } from "react";
import axios from "axios";


export default class Contacts extends Component {


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
            <div className="contact">
                <div data-aos="fade-down" data-aos-duration="1000" className="home">
                    <img className="banner" src={process.env.PUBLIC_URL + "/assets/gray-macbook.jpg"} alt="banner_image" />
                    <h1 className="banner-text-center">Contact Us</h1>
                    <h1 className="banner-text-center-sm">We would love to hear from you...why not get in touch?</h1>

                </div>
                <div style={{ textAlign: "center" }} className="row">
                    <div className=" col-lg-4 col-sm-6">
                        <h1>Call Us</h1>
                        <h4>(630) 231-4500</h4>
                        <br></br>
                        <img
                            style={{ width: "300px", height: "250px", marginTop: ".5rem" }}
                            src={process.env.PUBLIC_URL + "/assets/outside-office.jpg"}
                            alt="outside_office"
                        />
                    </div>
                    <div className="col-lg-4 col-sm-6 ">
                        <h1 style={{ paddingLeft: "18px" }}>Find Us</h1>
                        <h4>1933 Franciscan Way</h4>
                        <h4>West Chicago, IL 60185</h4>
                        <p style={{ marginLeft: "4rem" }}><iframe title="gps" className="gps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.8810207947413!2d-88.21182588431746!3d41.91691637096276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f01cc5adc9f7b%3A0x79ee25d54f4272ee!2sNorth%20Avenue%20Dental%20Associates!5e0!3m2!1sen!2sus!4v1584997311163!5m2!1sen!2sus" width="300" height="250" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe></p>
                    </div>
                    <div className="col-lg-4 col-sm-6 ">
                        <h1>E-mail Us</h1>
                        <form onSubmit={this.onSubmit}>
                            <div >
                                <label>E-mail address</label>
                                <br></br>
                                <input value={this.state.email} onChange={this.onChangeEmail} style={{ width: "250px" }} id="email" type="email" className="form-control-md" />
                            </div>
                            <div>
                                <label>Subject</label>
                                <br></br>
                                <input value={this.state.subject} onChange={this.onChangeSubject} style={{ width: "250px" }} id="subject" className="form-control-md" />
                            </div>
                            <div>
                                <label>Message</label>
                                <br></br>
                                <textarea value={this.state.message} onChange={this.onChangeMessage} style={{ display: "flexbox", width: "250px" }} className="form-control-md textArea" id="message" placeholder="Type your message here" rows="5"></textarea>
                            </div>
                            <button style={{ width: "125px", height: "50px" }} type="submit" className="btn button">Send</button>

                        </form>
                    </div>
                </div>
            </div >
        )
    }
}

