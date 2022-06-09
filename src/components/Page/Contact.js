import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
    return (
        <div className="contact-area p-5">
            <h2 style={{ color: "#037fff" }} className="mb-5">
                Contact me
            </h2>
            <div className="row g-5">
                <div className="col-md-6">
                    <h4 className="mb-3 text-white-50">Get in Touch</h4>
                    <form>
                        <input
                            type="text"
                            style={{ color: "#fff" }}
                            placeholder="Enter name"
                            className="form-control bg-transparent mb-3"
                            name="name"
                            id=""
                        />
                        <input
                            type="text"
                            style={{ color: "#fff" }}
                            placeholder="Enter email"
                            className="form-control bg-transparent mb-3"
                            name="email"
                            id=""
                        />
                        <input
                            type="text"
                            style={{ color: "#fff" }}
                            placeholder="Subject"
                            className="form-control bg-transparent mb-3"
                            name="subject"
                            id=""
                        />
                        <textarea
                            name="message"
                            style={{ color: "#fff" }}
                            id=""
                            cols="30"
                            rows="5"
                            placeholder="Message"
                            className="form-control bg-transparent mb-3"
                        ></textarea>
                        <input
                            className="resume-btn"
                            type="submit"
                            value="Send Mail"
                        />
                    </form>
                </div>
                <div className="col-md-6">
                    <ul className="address">
                        <li className="d-flex align-items-center">
                            <div className="contact-icon">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="icon"
                                ></FontAwesomeIcon>
                            </div>
                            <div className="contact-text">
                                <p className="m-0">+8801613071257</p>
                                <p className="m-0">+8801628939578</p>
                            </div>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="contact-icon">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="icon"
                                ></FontAwesomeIcon>
                            </div>
                            <div className="contact-text">
                                <p className="m-0">tanjir.dev@gmail.com</p>
                                <p className="m-0">tanjira584@gmail.com</p>
                            </div>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="contact-icon">
                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                    className="icon"
                                ></FontAwesomeIcon>
                            </div>
                            <div className="contact-text">
                                <p className="m-0">Location</p>
                                <p className="m-0">Chattogram, Bangladesh</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
